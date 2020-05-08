This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


The usual **Babel** and **Webpack** configuration are in:     `react-scripts` library (/node_modules).

---
### Scripts

#### `yarn start`

Runs the app in the development mode in: <br />
[http://localhost:3000](http://localhost:3000)

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

It will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.

---

## Config/ Libs

## EditorConfg, ESLint & Prettier

ESLInt: Enforces style guide, points out the errors.
Preetier: Modifies the code to follow the enforced style.

- Generate .editorConfig <br>
  You must have the EditoConfig plugin installed in VSCode

- **ESLint** <br>
  `yarn add eslint -D`
  - `yarn eslint --init` : <br>
    Important points on this configuration:
    - Enforce code style
    - JS modules (import/export)
    - Use Popular Style-guide - Airbnb
    - Code-file format: JS
  - Let the dependencies be installed using NPM (Eslint default). After installing, **delete `package-lock.json`** and then **run `yarn`** to update the dependencies in the `yarn.lock`.

- **Prettier**
  ```javascript
    yarn add
      prettier
      eslint-config-prettier
      eslint-plugin-prettier
      babel-eslint
    -D
  ```

- **Configure `.eslintrc.js`** <br>
  - Add prettier to `extends:[]`
  - Add `parser: 'babel-eslint'`
  - Add `plugin` prettier.

  - `rules:`
    - `'prettier/prettier': 'error'`<br>
      All rules prettier does not found will be highlighted as errors
    - `'react/jsx-filename-extension'`: <br>
      This allows to use `'.js'` extension (even though we write jsx in them).
    - `'import/prefer-default-export': 'off'`<br>
      Not all `exports` must be `default`.

- **Configure `.prettierrc`** <br>
    ```javascrip
    "singleQuote": true,
    "trailingComma": "es5"
    ```

### React Routing

- `yarn add react-router-dom` \
Allow navigation between pages. \
"React Router is a collection of navigational components that compose declaratively with your application.". [React Router](https://reacttraining.com/react-router/)

- Import the `react-router-dom` into a `routes.js` file.
  - `BrowserRouter` \
    The `react-router-dom` can export a variety of routers.
    `BrowserRouter` is the one that allow us to navigate between our pages with a "url" format.
    I.e.: ...host/page1 or ...host/page2
    (In contrast of routers that use '#' as page identifier)

  - `Switch` \
    Element that will make that only one page/route is accessed at a time.
    Because `react-router-dom` allows that multiple components are called at the same time.

  - `Route` \
    Element that will represent each page of our application.
    Here we define the path accessed by the user and the target page.
    Remember to add the `exact` property when defining the root route, otherwise `'/'` will be the only route displayed.
    ```jsx
      <Route path="/" exact component={Main} />
      <Route path="/repository" component={Repository} />
    ```

- Import this routes to `App.js`, and return only the defined `<Routes />`

### Styled-Components

- `yarn add styled-components`
  Will adapt how to write css in React applications.
  Just like React, with this lib we can create components.
  So instead of using regular css `h1{style}`, which would impact all `<h1>` from the application. \
  We can now define a component like `Title` that will "extend" a regular `h1` e and our onw twist
  to that specific component.

  ```javascript
  export const Title = styled.h1`custom styles...`;

  // Import the styles and add to your code
  <Title>Your Styled Title</Title>
  ```

  You can also add JS functions to this syntax to manipulate your css. \
  **i.e.:**

  ```css
    color: ${props => (props.error ? 'red' : 'green' )};
  ```

  Another important functionality is the global Styles.

- Add the VSCode Plugin: **vscode-styled-components
jpoissonnier.vscode-styled-components**<br>
Syntax highlighting and Intellisense for styled-components.
