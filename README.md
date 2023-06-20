# Codename

Codename is a mobile application built with React Native CLI that brings the popular board game "Codenames" to your smartphone. Enjoy the game with your friends and family anytime, anywhere.

## Features

- Create and join game rooms to play with friends.
- Two roles: Spymaster and Operative, with different permissions and responsibilities.
- Real-time communication between team members within the game room.
- Generate random word grids for each game.
- Score tracking and game progress indicators.
- Timer for turn-based gameplay.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/firtysh/codename.git
```

2. Navigate to the project directory:

```shell
cd codename
```

3. Install the dependencies:

```shell
npm install
```

4. Run the Metro bundler:

```shell
npm start
```

5. For Android, open a new terminal window and run the following command:

```shell
npm run android
```

   If the above command doesn't work, you can try the following alternative:

```shell
npm start -- --reset-cache
```

   Then open a new terminal window and run:

```shell
npx react-native run-android
```

   For iOS, open a new terminal window and run:

```shell
npx react-native run-ios
```

Please ensure you have the necessary development environment and tools set up for React Native and Android/iOS development. Refer to the official documentation of React Native and the respective platforms for more detailed setup instructions if needed.

## Usage

1. Follow the installation instructions above to set up the project.

2. Once the app is running on your device or emulator, follow the on-screen instructions to create or join a game room.

## Technologies Used

- React Native
- React Navigation (for navigation between screens)
- Socket.io (for real-time communication)

## Contributing

Contributions to Codename are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request. Make sure to follow the project's code style and guidelines.

## License

Codename is open source and released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

- The Codename project is inspired by the board game "Codenames" designed by Vlaada Chvátil.
- Thanks to the React Native community and various open source libraries that have made this project possible.