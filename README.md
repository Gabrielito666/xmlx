# XMLX

This package allows you to create XML strings using a simple JSX-like syntax:

```bash
npm i xmlx
```

```jsx
//my-xml.js
import Xmlx from "xmlx";
const Word = ({children}) =>  <a-tag>{children}</a-tag>

const xml = <my-tag>
   <Word>Hello</Word>
   <Word>World</Word>
</my-tag>


console.log(xml);
```

```js
//my-builder.js
const buildXmlx = require("xmlx/builder");

buildXmlx("./my-xml.js", "bundle.js");
```

Then you can execute the bundle and generate the XML you need.

```bash
node my-builder #to compile
node bundle.js #to execute
```

This package supports working with fragments and arrays, which can be useful for creating components to simplify SVG or other formats.

