# Pick a Dawg! -- A single player dog guessing game

## Overview
Build a dog breed memorization game.

You'll be using a free public API called [Dog API](https://dog.ceo/dog-api/documentation/).

The webapp must be built using React and Redux.

# Features

1. The webapp must show the user a random picture of a dog (the Dog API provides an endpoint for this purpose), and it must ask the user to choose the correct breed name from a list of 3 options.
1. When a user makes the correct choice, they proceed to the next question.
1. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.
1. The game must keep track of the user's performance and display a success rate (in percentages) on the page.
1. Occasionally the user will get a different question type. The game must show them the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
1. The user should also be able to use the keyboard to select their answer for quicker gameplay.
1. If a user sees a breed for the first time, the game should give them an easy hint so they can learn the right answer.
1. The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 10 correct answers, the game will add another 3 breeds into the mix, and so on.

# How to get started

1. Draw some wireframes. That is, simple schematic designs that lay out all the parts of the webapp that need to be built.
1. Specify the game logic:
   1. List all the actions the user can take. For each interaction, write down what the input information is.
   1. Define the shape of your state. Think about all the pieces of information that you have to store in your application state.
1. Setup a React project and implement the wireframes from the previous step. Fill it with dummy data so you can at least see the GUI.
1. Push it to GitHub and add your teammates as collaborators. One person will host the code on their account.
1. Now start working on adding the API connection and implementing the logic as Redux actions and reducers.

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
