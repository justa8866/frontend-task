# Test Specification

**Language**: TypeScript (_.ts, _.tsx), SCSS (_.scss)
**Rules**: 
- Start using `create-react-app`
- Adding additional libraries is forbidden
- `function` keyword is forbidden
- `redux` is forbidden
- Everything has to be typed as a result
  - Known types have to be omitted (`const str = 'test';` > `const str: string = 'test';`)
  - `any` and `unknown` type is forbidden
  - `object` type is forbidden - objects has to be described by eg.: `{ someProp: string; }` 
- Code have to be splitted into components - You have to use at least once function component and class component **correctly** 
- Styles have to be written in `_.scss`files and imported in`_.ts(x)`files
  - Styles have to be written by programmer - not imported from external source
  - Styles cannot be written inline (in JS/TS files)
  - All relations between JS and CSS have to be achieved using selectors, CSS variables and custom`data-_`attributes

**Result application**:
- Have to have two forms
    - First form allows add new color to database
        - Form have to be submitted by`onSubmit`event
        - Colors will be saved in LocalStorage in some way
        - Color have to be checked, parsed before adding
        - Color have to be in HEX RGB form
        - Writting non valid characters have to be blocked
        - Writting too many characters have to be blocked
        - Writting`#`(except first character) have to be blocked
    - Second form allows filter colors displayed below
        - After every change list of colors are changed
        - Displayed colors have to meet ALL selected by user conditions, possible conditions:
        -`Red > 50%`means Red in RGB is higher that 127
        -`Green > 50%`means Green in RGB is higher that 127
        -`Blue > 50%`means Blue in RGB is higher that 127
        -`Saturation > 50%` means Saturation in HSL is higher than 50%
  
- List of colors have to contains all colors:
  - Listed in predefined, default list:
    - You cannot remove them, so "x" should be hidden
  - Listed in LocalStorage, added by user:
    - They should be removable
  - Colors have to be named using HEX RGB form, with uppercase
  - Colors have to be represented by colored rectangle above name
  - Colors have to be ordered in such way: 
    - Higher Red value first; if the same then:
    - Higher Green value first; if the same then:
    - Higher Blue value first; if the same then on the same position

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
