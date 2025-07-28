# Web3 Medical Invoice Storacha

A decentralized medical billing system that combines spreadsheet functionality with Web3 technologies to create, manage, and store medical invoices securely on the blockchain. Built with React and integrated with MetaMask for seamless Web3 authentication and ConnectKit for enhanced wallet connectivity.

## 🚀 Features

- **Interactive Spreadsheet Interface**: Built on SocialCalc for comprehensive medical invoice creation and editing
- **Web3 Integration**: MetaMask wallet connectivity with ConnectKit for secure authentication
- **Blockchain Storage**: Utilizes Web3.Storage for decentralized file storage and retrieval
- **Multi-Device Support**: Responsive design with device-specific optimizations for desktop, iPad, iPhone, and iPod
- **Real-time Calculations**: Automatic calculations for medical billing amounts and totals
- **File Management**: Save, load, and manage multiple invoice templates and documents
- **Cross-Chain Support**: Configured for Polygon zkEVM Cardona testnet

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Core UI framework
- **CSS3** - Custom styling with Milligram CSS framework
- **SocialCalc** - Spreadsheet engine for invoice creation
- **HTML5** - Modern web standards

### Web3 & Blockchain
- **Wagmi 2.10.9** - React hooks for Ethereum
- **Viem 2.x** - TypeScript interface for Ethereum
- **ConnectKit 1.8.2** - Wallet connection interface
- **@web3-storage/w3up-client 17.2.0** - Decentralized storage client
- **Polygon zkEVM Cardona** - Target blockchain network

### Development Tools
- **React Scripts 5.0.1** - Build toolchain and development server
- **Jest** - Testing framework with React Testing Library
- **Yarn** - Package management
- **Babel** - JavaScript compilation

### Storage & State Management
- **@tanstack/react-query 5.49.2** - Server state management
- **Local Storage** - Client-side data persistence
- **Web3.Storage** - IPFS-based decentralized storage

## 📁 Project Structure

```
src/
├── App/              # Main application component and styles
├── Files/            # File management and operations
├── Menu/             # Navigation and menu components
├── socialcalc/       # Spreadsheet engine and calculations
├── storage/          # Local storage utilities
├── utils/            # Web3 provider and utilities
└── img/              # Application assets

public/
├── images/           # SocialCalc UI assets and icons
└── styles/           # CSS frameworks (Milligram, Normalize)
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **Yarn** package manager
- **MetaMask** browser extension
- **Git** for version control

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/anisharma07/web3-medical-invoice-storacha.git

# Navigate to project directory
cd web3-medical-invoice-storacha

# Install dependencies
yarn install

# Create environment file
touch .env
```

### Environment Configuration
Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
REACT_APP_ALCHEMY_ID=your_alchemy_api_key
```

**Required Credentials:**
- **WalletConnect Project ID**: Get from [WalletConnect Dashboard](https://walletconnect.com/)
- **Alchemy API Key**: Get from [Alchemy Dashboard](https://alchemy.com/)

## 🎯 Usage

### Development
```bash
# Start development server
yarn start

# Run tests
yarn test

# Run tests in watch mode
yarn test --watchAll
```

### Production
```bash
# Build for production
yarn build

# The build folder will contain optimized production files
```

### Creating Medical Invoices
1. Connect your MetaMask wallet using the ConnectKit interface
2. Use the spreadsheet interface to input patient information, services, and costs
3. Utilize built-in formulas for automatic calculations
4. Save invoices to decentralized storage via Web3.Storage
5. Access and manage saved invoices through the Files component

## 📱 Platform Support

- **Desktop Browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile Web** (iOS Safari, Chrome Mobile)
- **Tablet** (iPad, Android tablets)
- **Web3 Wallets** (MetaMask, WalletConnect compatible wallets)

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test --coverage

# Run specific component tests
yarn test App.test.js
yarn test Files.test.js
yarn test Menu.test.js
```

**Testing Stack:**
- Jest with React Testing Library
- DOM testing utilities
- User event simulation

## 🔄 Deployment

### Static Hosting (Recommended)
```bash
# Build the project
yarn build

# Deploy build folder to your hosting service
# Compatible with: Vercel, Netlify, GitHub Pages, AWS S3
```

### Environment Setup for Production
Ensure all environment variables are properly configured in your hosting platform:
- `REACT_APP_WALLETCONNECT_PROJECT_ID`
- `REACT_APP_ALCHEMY_ID`

## 📊 Performance & Optimization

- **Code Splitting**: Automatic code splitting with React.lazy()
- **Asset Optimization**: Compressed images and optimized CSS
- **Caching**: Efficient caching strategies for Web3 calls
- **Bundle Analysis**: Use `yarn build` to analyze bundle size
- **Web3 Optimization**: Efficient RPC calls with connection pooling

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow React best practices and hooks patterns
- Maintain Web3 security standards
- Test all wallet connection flows
- Ensure mobile responsiveness
- Update tests for new features
- Follow the existing code structure in `src/` directories

### Code Style
- Use functional components with hooks
- Implement proper error handling for Web3 operations
- Follow the established CSS class naming conventions
- Maintain compatibility with SocialCalc spreadsheet engine

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2024 SEETA
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 🙏 Acknowledgments

- **SocialCalc** - For the powerful spreadsheet engine
- **ConnectKit** - For the seamless wallet connection interface
- **Web3.Storage** - For decentralized storage infrastructure
- **Polygon** - For the zkEVM Cardona testnet
- **React Team** - For the excellent frontend framework

## 📞 Support & Contact

- **Repository**: [anisharma07/web3-medical-invoice-storacha](https://github.com/anisharma07/web3-medical-invoice-storacha)
- **Issues**: [GitHub Issues](https://github.com/anisharma07/web3-medical-invoice-storacha/issues)
- **Discussions**: [GitHub Discussions](https://github.com/anisharma07/web3-medical-invoice-storacha/discussions)

### Getting Help
1. Check existing [Issues](https://github.com/anisharma07/web3-medical-invoice-storacha/issues) for similar problems
2. Review the [SocialCalc documentation](https://socialcalc.org/) for spreadsheet-related questions
3. Consult [Wagmi documentation](https://wagmi.sh/) for Web3 integration issues
4. Create a new issue with detailed reproduction steps

---

*Built with ❤️ for the decentralized healthcare ecosystem*