# Simple Chat
![](SimpleChatExample.gif)

# What does this app do:
- simple chat app based off react-native-gifted-chat
- on first load app will load a seed of messages (shows spinner pretending to fetch messages from a server)
- once messages are loaded they will appear in a chat window
- user can add additional messages which will be persisted on app memory
- if app is closed and reloaded, app will reload all chat history included appended messages by user

# Setup:
1. Install `node`, `watchman` and `yarn`
2. run `yarn install` in the root folder of the directory
3. `cd ios` and run `pod install`
4. for iOS open `SimpleChat.xcworkspace` and run with any simulator
5. for Android run `react-native run-android` with a simulator or device connected to computer
6. if Metro bundler does not start, open a seperate terminal window in the root folder of the project and run `react-native start --reset-cache`

# Code highlights:
- separation between app folder code and messenger folder code (actions, sagas, reducers)
- all messenger related code is in messenger folder, including visual components
- react hooks instead of react component lifecycle methods
- redux logger to see which actions are firing at which time
- redux sagas that watch and trigger side effects for better flow control
- flow for every file
- tachyons for inline styling (same concept as tailwind.js for styling on the web)

# Next steps in terms of code/features:
- Component and E2E tests
- When a new message/messages are appended to the existing chain, add a server call and read/received receipts (hook in by watching action fired in redux saga and start a flow to call server/update state once call is successful)
- remove redux logger from production (add a isDev flag)
- improve flow types by removing `any` flow instances
