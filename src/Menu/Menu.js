import React, { Component } from "react";
import "./Menu.css";
import * as AppGeneral from "../socialcalc/AppGeneral";
import { Files, Local } from "../storage/LocalStorage.js";
import { DATA } from "../app-data.js";
import { create } from "@web3-storage/w3up-client";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.store = new Local(this.props.file);
  }

  async uploadToIPFS(fileData) {
    try {
      this.setState({ isUploading: true });
      
      // Get the saved email and space from localStorage
      const savedEmail = localStorage.getItem('ipfsUserEmail');
      const savedSpace = localStorage.getItem('ipfsUserSpace');
      
      if (!savedEmail || !savedSpace) {
        throw new Error('IPFS account not set up. Please set up your IPFS account in the Files section first.');
      }
      
      const client = await create();
      const account = await client.login(savedEmail);
      await client.setCurrentSpace(savedSpace);
      
      const formattedFile = new File(
        [JSON.stringify(fileData)],
        `${fileData.name}.json`,
        { type: 'application/json' }
      );
      
      const cid = await client.uploadDirectory([formattedFile]);
      return cid.toString();
    } catch (error) {
      console.error('IPFS Upload Error:', error);
      throw error;
    } finally {
      this.setState({ isUploading: false });
    }
  }

  doPrint() {
    const content = AppGeneral.getCurrentHTMLContent();
    var printWindow = window.open("", "", "left=100,top=100");
    printWindow.document.write(content);
    printWindow.print();
    printWindow.close();
  }

  doSave() {
    if (this.props.file === "default") {
      window.alert(`Cannot update ${this.props.file} file! `);
      return;
    }
    const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
    const data = this.store._getFile(this.props.file);
    const file = new Files(
      data.created,
      new Date().toString(),
      content,
      this.props.file
    );
    this.store._saveFile(file);
    this.props.updateSelectedFile(this.props.file);
    window.alert(`File ${this.props.file} updated successfully! `);
  }

  doSaveAs = async () => {
    const filename = window.prompt("Enter filename:");
    if (filename) {
      if (this._validateName(filename)) {
        try {
          const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
          const fileData = {
            name: filename,
            content: content,
            created: new Date().toString(),
            modified: new Date().toString(),
            password : this.props.file
          };

          // Upload to IPFS
          const cid = await this.uploadToIPFS(fileData);
          
          // Save locally
          const file = new Files(
            fileData.created,
            fileData.modified,
            content,
            filename,
            this.props.file
          );
          this.store._saveFile(file);
          this.props.updateSelectedFile(filename);
          
          this.setState({
            showAlert: true,
          });
          window.alert(`File ${filename} saved successfully! IPFS CID: ${cid}`)
        } catch (error) {
          console.error("Save As error:", error);
          window.alert(`Error saving file: ${error.message}`)
          this.setState({
            showAlert: true,
          });
        }
      } else {
        window.alert(`Filename cannot be ${this.props.file}`);
        this.setState({
          showAlert: true,
        });
      }
    }
  };

  newFile() {
    if (this.props.file !== "default") {
      const content = encodeURIComponent(AppGeneral.getSpreadsheetContent());
      const data = this.store._getFile(this.props.file);
      const file = new Files(
        data.created,
        new Date().toString(),
        content,
        this.props.file
      );
      this.store._saveFile(file);
      this.props.updateSelectedFile(this.props.file);
    }
    const msc = DATA["home"][AppGeneral.getDeviceType()]["msc"];
    AppGeneral.viewFile("default", JSON.stringify(msc));
    this.props.updateSelectedFile("default");
  }

  render() {
    return (
      <div className="Menu">
        <button onClick={() => this.doSave()}> Save </button>
        <button onClick={() => this.doSaveAs()}> Save As </button>
        <button onClick={() => this.doPrint()}> Print </button>
        <button onClick={() => this.newFile()}> New File </button>
      </div>
    );
  }

  /* Utility functions */
  _validateName(filename) {
    filename = filename.trim();
    if (filename === "default" || filename === "Untitled") {
      // return 'Cannot update default file!';
      return false;
    } else if (filename === "" || !filename) {
      // this.showToast('Filename cannot be empty');
      return false;
    } else if (filename.length > 30) {
      // this.showToast('Filename too long');
      return false;
    } else if (/^[a-zA-Z0-9- ]*$/.test(filename) === false) {
      // this.showToast('Special Characters cannot be used');
      return false;
    }
    return true;
  }

  _formatString(filename) {
    /* Remove whitespaces */
    while (filename.indexOf(" ") !== -1) {
      filename = filename.replace(" ", "");
    }
    return filename;
  }
}

export default Menu;
