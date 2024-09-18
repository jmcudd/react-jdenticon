A basic wrapper around [Jdenticon](https://jdenticon.com/) for React.

### Usage

#### ESM (ECMAScript Module)

For modern JavaScript environments that support ES modules:

```javascript
import React from 'react';
import Jdenticon from 'react-jdenticon';
function Example(){
  return(<Jdenticon size="48" value="Hello World" />);
}
```

#### CJS (CommonJS)

For environments that use CommonJS modules, such as Node.js:

```javascript
const React = require('react');
const Jdenticon = require('react-jdenticon');
function Example(){
  return(<Jdenticon size="48" value="Hello World" />);
}
```

#### UMD (Universal Module Definition)

For environments that support UMD, such as browsers directly or AMD loaders:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jdenticon Example</title>
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
  <script src="path/to/your/umd/react-jdenticon.js"></script>
</head>
<body>
  <div id="root"></div>
  <script>
    const { createElement } = React;
    const { render } = ReactDOM;
    const Jdenticon = window.ReactJdenticon.default;
    function Example(){
      return createElement(Jdenticon, { size: "48", value: "Hello World" });
    }
    render(createElement(Example), document.getElementById('root'));
  </script>
</body>
</html>
```
