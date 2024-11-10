# IonicReactKit

A modern starter kit for building cross-platform mobile applications using Ionic Framework with React. This toolkit provides a pre-configured environment with best practices, commonly used components, and essential utilities to kickstart your mobile app development.

## Features

- ⚡️ Built with Ionic React and React 18
- 📱 Cross-platform support (iOS, Android, PWA)
- 🎨 Pre-configured theming system
- 📝 Form handling with validation
- 🌐 API integration setup
- 📦 State management configuration
- 🧪 Testing setup with Playwright
- 📱 Native device features integration

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- iOS development requires a Mac with Xcode 13+
- Android development requires Android Studio

## Installation

```bash
# Clone the repository
git clone https://github.com/rgilsimoes/IonicReactKit.git

# Navigate to project directory
cd IonicReactKit

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
├── pages/          # Application pages/routes
├── store/          # State management
├── theme/          # Theming and styling
├── types/          # Interface and type definitions
├── utils/          # Utility functions
└── App.tsx         # Application entry point
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run deploy` - Deploy to production

## Native Features

This kit includes setup for common native features:

- Application Badge
- Camera access **comming soon**
- Geolocation **comming soon**
- File system **comming soon**
- Push notifications **comming soon**
- Biometric authentication **comming soon**
- Device storage **comming soon**
- Network status **comming soon**

## Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Building for Production

```bash
# Build web version
npm run build

# Build iOS app
ionic capacitor build ios

# Build Android app
ionic capacitor build android
```

## Deployment

1. Build your application
2. Test on target platforms
3. Deploy using preferred hosting service
4. For app stores, follow platform-specific submission guidelines

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please [open an issue](https://github.com/rgilsimoes/IonicReactKit/issues) on GitHub.

## Acknowledgments

- [Ionic Framework](https://ionicframework.com/)
- [React](https://reactjs.org/)
- [Capacitor](https://capacitorjs.com/)
- [Pullstate](https://lostpebble.github.io/pullstate/)

---

Built with ❤️ by [rgilsimoes](https://github.com/rgilsimoes)
