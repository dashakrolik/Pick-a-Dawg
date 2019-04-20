# Pick a Dawg! -- A single player dog guessing game

## Overview
Build a dog breed memorization game.

We are using a free public API called [Dog API](https://dog.ceo/dog-api/documentation/).

The webapp is built using React and Redux.

# Features

1. The webapp shows the user a random picture of a dog (the Dog API provides an endpoint for this purpose), and it asks the user to choose the correct breed name from a list of 3 options.
2. When a user makes the correct choice, they proceed to the next question.
3. If the user makes the wrong choice, the game shows them the right answer, then pauses for 2 seconds before proceeding to the next question.
4. The game keeps track of the user's performance and displays a success rate (in percentages) on the page.
5. Occasionally the user gets a different question type. The game shows them the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
6. The user is able to use the keyboard to select their answer for quicker gameplay (using Tab)
7. If a user sees a breed for the first time, the game gives them an easy hint so they can learn the right answer.
8. The game starts off with only 3 breeds and gradually increases in difficulty. When the user has a streak of 10 correct answers, the game adds another 3 breeds into the mix, and so on.

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
