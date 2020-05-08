import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    /* Configuration to all css items, removing any default spacing */
    margin: 0;
    padding: 0;
    outline: 0;
    /* This makes any spacing go to the element size  */
    /* Example: Your item width is 200px.
       You add margin 10px.
       Without box-sizing: item becomes 220px (10px each side)
       With box-sizing: item maintain the 200px size.
        The item is reduced to 180px to accommodate the extra 20px;
    */
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
