# Nuxt 3 Minimal Starter + VueFire + Ionic

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Install [CocoaPods](https://capacitorjs.com/docs/getting-started/environment-setup#cocoapods) with

```bash
brew install cocoapods
```

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## iOS

Open `ios/App/App.xcodeproj` in Xcode.

- Select the App icon in the file explorer and setup "Signing and Capabilities"
- Select Window => Device & Simulator, select your device and put it in Developer mode.

On your device, Settings -> General -> VPN & Device Management, then trust the developer.

```bash
pnpm run generate
npx cap run ios
```

### Using Ionic VSCode [extension](https://marketplace.visualstudio.com/items?itemName=ionic.ionic)

- Click Run->iOS in Ionic extension
