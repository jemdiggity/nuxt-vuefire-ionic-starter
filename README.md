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

- Use the terminal commands above first, then use the extension once that works OK.
- Click Run->iOS in Ionic extension

## Android

- Install [Android Studio](https://developer.android.com/studio)
- Android Studio's build system, Gradle, needs relatively [old version](https://docs.gradle.org/current/userguide/compatibility.html) of JDK. Install older version of OpenJDK.

```bash
brew install openjdk@17
```

- Check java version

```bash
java --version
```

- fix symlinks if incorrect

```bash
cd /usr/local/opt/openjdk
rm openjdk
ln -s ../Cellar/openjdk@17/17.0.10 openjdk
```

- Use Ionic extension to open project in Android Studio and check `Tools -> Device Manager`.
