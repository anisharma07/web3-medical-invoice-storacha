# Web3 Medical Invoice Storage

A decentralized medical billing system that combines Web3 technology with spreadsheet functionality, enabling secure medical invoice creation, management, and storage on blockchain networks. Built with React and integrated with Metamask for seamless cryptocurrency wallet connectivity.

## 🚀 Features

- **Web3 Integration**: Seamless Metamask integration using ConnectKit for wallet connectivity
- **Decentralized Storage**: Utilizes Web3.Storage (w3up-client) for decentralized file storage
- **Interactive Spreadsheets**: Built-in SocialCalc spreadsheet engine for creating detailed medical invoices
- **Multi-Chain Support**: Configured for Polygon zkEVM Cardona testnet with extensible chain support
- **Responsive Design**: Mobile-friendly interface that adapts to different device types (iPhone, iPad, iPod)
- **File Management**: Comprehensive file handling system for managing multiple medical invoices
- **Local Storage**: Client-side data persistence for offline capability
- **Professional UI**: Clean, modern interface using Milligram CSS framework

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with concurrent features
- **React DOM** - React rendering library
- **ConnectKit 1.8.2** - Web3 wallet connection interface
- **CSS Framework**: Milligram CSS with Normalize.css
- **Custom Components**: App, Files, Menu modules with dedicated styling

### Blockchain & Web3
- **Wagmi 2.10.9** - React hooks for Ethereum
- **Viem 2.x** - TypeScript interface for Ethereum
- **Web3.Storage w3up-client 17.2.0** - Decentralized storage client
- **Polygon zkEVM Cardona** - Layer 2 scaling solution

### Data Management
- **TanStack React Query 5.49.2** - Server state management
- **SocialCalc** - JavaScript spreadsheet engine
- **Local Storage API** - Client-side data persistence

### Development Tools
- **React Scripts 5.0.1** - Build tooling and development server
- **Jest & React Testing Library** - Testing framework
- **Babel** - JavaScript transpilation
- **ESLint** - Code linting (implied by ESLint disable comments)

## 📁 Project Structure

```
├── src/
│   ├── App/                 # Main application component
│   ├── Files/               # File management system
│   ├── Menu/                # Navigation and menu components
│   ├── socialcalc/          # Spreadsheet engine integration
│   │   └── aspiring/        # SocialCalc core files
│   ├── storage/             # Local storage utilities
│   ├── utils/               # Web3 provider and utilities
│   └── app-data.js          # Application configuration data
├── public/
│   ├── images/              # SocialCalc UI assets (70+ icons)
│   └── styles/              # CSS frameworks
└── package.json             # Dependencies and scripts
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (version 14 or higher)
- **Yarn** or **npm** package manager
- **Metamask** browser extension
- **Alchemy API Key** (for blockchain connectivity)
- **WalletConnect Project ID**

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/anisharma07/web3-medical-invoice-storacha.git
cd web3-medical-invoice-storacha
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. **Set up environment variables**
```bash
# Create environment file
touch .env
```

Add the following variables to your `.env` file:
```env
REACT_APP_ALCHEMY_ID=your_alchemy_api_key_here
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
```

4. **Get required credentials**
- **Alchemy API Key**: Sign up at [Alchemy](https://alchemy.com/) and create a new app
- **WalletConnect Project ID**: Register at [WalletConnect Cloud](https://cloud.walletconnect.com/)

## 🎯 Usage

### Development
```bash
# Start development server
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Production
```bash
# Build for production
npm run build
# or
yarn build

# The build folder will contain the production-ready files
```

### Testing
```bash
# Run tests
npm test
# or
yarn test

# Run tests in CI mode
npm run test -- --env=jsdom
```

## 📱 Platform Support

- **Web Browsers**: Chrome, Firefox, Safari, Edge (with Metamask extension)
- **Mobile Devices**: Responsive design supports iOS and Android browsers
- **Wallet Support**: Metamask, WalletConnect-compatible wallets
- **Networks**: Polygon zkEVM Cardona (configurable for other EVM chains)

## 🧪 Testing

The project includes comprehensive testing setup:

- **Unit Tests**: React Testing Library for component testing
- **Integration Tests**: Jest for application logic testing
- **Test Files**: Each component has corresponding `.test.js` files

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 🔄 Deployment

### Static Hosting (Recommended)
```bash
# Build the project
npm run build

# Deploy to your preferred static hosting service:
# - Vercel: vercel --prod
# - Netlify: netlify deploy --prod --dir=build
# - GitHub Pages: Use gh-pages package
```

### Environment Variables for Production
Ensure these environment variables are set in your hosting platform:
- `REACT_APP_ALCHEMY_ID`
- `REACT_APP_WALLETCONNECT_PROJECT_ID`

## 📊 Performance & Optimization

- **Code Splitting**: React lazy loading for optimal bundle size
- **Caching**: React Query for efficient data fetching and caching
- **Local Storage**: Reduces server requests by storing user preferences locally
- **Optimized Assets**: Compressed images and CSS for faster loading
- **Web3 Optimization**: Efficient blockchain queries using Viem and Wagmi

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices and hooks patterns
- Maintain component modularity (separate CSS files for each component)
- Write tests for new components and utilities
- Use proper Web3 error handling for wallet connections
- Ensure responsive design compatibility
- Document complex blockchain interactions

### Code Style
- Use functional components with hooks
- Implement proper error boundaries for Web3 operations
- Follow the existing file structure conventions
- Add appropriate ESLint comments for complex operations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License
Copyright (c) 2024 SEETA
```

The software is provided "as is", without warranty of any kind. See the full license for complete terms and conditions.

## 🙏 Acknowledgments

- **SocialCalc**: For providing the robust spreadsheet engine
- **Socialtext, Inc.**: Original creators of SocialCalc
- **ConnectKit**: For seamless Web3 wallet integration
- **Polygon**: For the zkEVM scaling solution
- **Web3.Storage**: For decentralized storage capabilities
- **Milligram CSS**: For the clean, minimal CSS framework

## 📞 Support & Contact

- **Repository**: [github.com/anisharma07/web3-medical-invoice-storacha](https://github.com/anisharma07/web3-medical-invoice-storacha)
- **Issues**: Report bugs and request features through GitHub Issues
- **Discussions**: Use GitHub Discussions for general questions

### Getting Help

1. Check the existing [Issues](https://github.com/anisharma07/web3-medical-invoice-storacha/issues) for similar problems
2. Review the code documentation in the source files
3. Ensure your Web3 wallet is properly configured
4. Verify your environment variables are correctly set

---

**Built with ❤️ for the decentralized healthcare future**