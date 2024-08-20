<h2 align="center">
  <img width="70" src="https://sf16-sg.tiktokcdn.com/obj/eden-sg/plduhogbps/image/a11y-icon.png">
  <p>Accessibility Cloud Label - Empowering the Visually Impaired Community</p>
</h2>
Accessibility solutions no longer require front-end developers to continuously write code for adaptation. Simply integrate the Cloud Label SDK, use the annotation tool for visual configuration based on the data rules defined by Cloud Label, and conduct real-time accessibility testing. This entire process can be completed by QA or other roles with no development foundation.
(When the UI view structure dynamically changes, the Cloud Label SDK will generate new accessibility attributes in real-time based on the page content)

[中文版本](./README.CN.md)

### Environment Requirements

Node: It is recommended to use **node v18.12.0** or higher versions.

Browser: depending on [Socket.IO](https://www.npmjs.com/package/socket.io)
![Client 版本](https://camo.githubusercontent.com/40fa0971ae4554132eaa9669afdc0a5ed63c315de05dcf22fdb68a6cdec42728/68747470733a2f2f73617563656c6162732e636f6d2f62726f777365722d6d61747269782f736f636b65742e737667)

### Quick Experience

1. Install dependencies

```
$ yarn bootstrap
```

2. Build the **mark tool** and **runtime SDK** and start the **node server**

```
$ yarn build
```

Choose to run an example

```
? Please choose usage:
❯ Run example
  Run packages
```

Choose to run nodejs-server

```
? Please choose usage: Run example
? Please choose examples:
  a11y-webpack-loader-react
❯ nodejs-server
```

3. Wait for the build to complete, and it will automatically open the annotation panel at http://localhost:3001/index.html and connect to the socket.

4. Open your project, and introduce the SDK in the code; or open any website in the browser, and introduce the SDK through the devtool console. Then you can start the accessibility annotation on the annotation panel at http://localhost:3001/index.html

```js
const script = document.createElement("script");
script.src = "http://localhost:3001/sdk.min.js";
document.body.appendChild(script);
```

### Quick Integration and Deployment

To integrate the Accessibility Cloud Label into your project, follow these steps:

1. Use the `Build` command to build the front-end artifacts, and then place the artifacts from `packages/a11y-web-client/dist` into your resource platform, and introduce the artifacts from `packages/a11y-web-sdk/dist` into your project (you can also directly introduce the source code into your own project for building).

```
$ Yarn build
```

Choose to build packages

```
? Please choose usage:
  Run example
❯ Run packages
```

Choose to build a11y-web-client and a11y-web-sdk

```
? Please choose usage: Run packages
? Select the corresponding debug packages (multiple selections allowed, use space to select, supports fuzzy search):
  a11y-web-client
❯ a11y-web-sdk
  a11y-web-socket
  a11y-webpack-loader
```

Adjust the position of the artifacts after the build is completed.

2. Deploy the nodejs code in the `packages/a11y-web-socket` directory on your server and start it with the command (note: modify the port configuration in `config/deployment.config.js`)

```
$ cd packages/a11y-web-socket && npm run start
```

3. Implement the mock interface in the `examples/nodejs-server` directory and store it in your own database (note: modify the port configuration in `config/deployment.config.js`).

### Cloud Label Standard Data Explanation

**A11yTag Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>desc</td>
    <td>Accessibility function description</td>
    <td>string</td>
  </tr>
  <tr>
    <td>attrs</td>
    <td>The Cloud Label SDK will directly set the attributes in attrs on the target element</td>
    <td>AttrsProps</td>
  </tr>
  <tr>
    <td>aid</td>
    <td>The property value of the element's a11y-id attribute, generated by a11y-loader, used to select the element</td>
    <td>string</td>
  </tr>
  <tr>
    <td>query</td>
    <td>The element's CSS Selector, used to select the element (alternatively used with aid)</td>
    <td>string</td>
  </tr>
  <tr>
    <td>calcAttrs</td>
    <td>Definition of calculation rules, this entry will inform the Cloud Label SDK how to generate accessibility attributes based on the information of existing page elements</td>
    <td>CalcAttrsProps</td>
  </tr>
</table>

**AttrsProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>tabindex</td>
    <td>Focus order, follows w3c</td>
    <td>string | number</td>
  </tr>
  <tr>
    <td>role</td>
    <td>Such as button, link, dialog, etc., follows w3c</td>
    <td>string</td>
  </tr>
</table>

- This category can support any standard HTML element attributes.

**CalcAttrsProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>label</td>
    <td>Sentence, the final reading result of a focus</td>
    <td>LabelProps</td>
  </tr>
</table>

**LabelProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>list</td>
    <td>Segment, a sentence contains multiple segments</td>
    <td>ListProps</td>
  </tr>
  <tr>
    <td>terms</td>
    <td>Conditions, specify when the segment is effective under one or more conditions</td>
    <td>termsProps</td>
  </tr>
</table>

**ListProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>list</td>
    <td>Segment, a sentence contains multiple segments</td>
    <td>WordProps[]</td>
  </tr>
</table>

**WordProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>aid</td>
    <td>The property value of the element's a11y-id attribute, generated by a11y-loader, used to select the element</td>
    <td>string</td>
  </tr>
  <tr>
    <td>query</td>
    <td>The element's CSS Selector, used to select the element</td>
    <td>string</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Fixed text splicing</td>
    <td>string</td>
  </tr>
  <tr>
    <td>opt</td>
    <td>Word processing method: default is append (+), can be set to subtract (-)</td>
    <td>'-' | '+'</td>
  </tr>
  <tr>
    <td>map</td>
    <td>Map elements with specific attributes to text</td>
    <td>AttrMap</td>
  </tr>
</table>

**AttrMap Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>type</td>
    <td>The type of mapping, fixed to attribute</td>
    <td>'attr'</td>
  </tr>
  <tr>
    <td>attr</td>
    <td>The attribute for mapping, such as 'src' for images</td>
    <td>string</td>
  </tr>
  <tr>
    <td>match</td>
    <td>Matching rules</td>
    <td>{ [string]: string }</td>
  </tr>
</table>

**termsProps Interface**

<table>
  <tr>
    <th>Field Name</th>
    <th>Field Introduction</th>
    <th>Field Type</th>
  </tr>
  <tr>
    <td>bool</td>
    <td>Effective condition, yes or no</td>
    <td>boolean</td>
  </tr>
  <tr>
    <td>check</td>
    <td>Rule type, currently supports: existence check, numeric check</td>
    <td>'exist' | 'number'</td>
  </tr>
  <tr>
    <td>aid</td>
    <td>The property value of the element's a11y-id attribute, generated by a11y-loader, used to select the element</td>
    <td>string</td>
  </tr>
  <tr>
    <td>query</td>
    <td>The element's CSS Selector, used to select the element</td>
    <td>string</td>
  </tr>
</table>

### Directory Introduction

```
.
├── CONTRIBUTING.CN.md
├── CONTRIBUTING.md
├── DSL.js                         // Cloud Label Standard Data Explanation
├── LICENSE
├── README.CN.md
├── README.md
├── commitlint.config.js
├── config
│   ├── deployment.config.js       // Deployment configuration, modify as needed
│   └── webpack.base.config.js     // Basic webpack configuration
├── examples
│   ├── a11y-webpack-loader-react  // Example of automatically generating a11y-id attributes in a React project using a11y-webpack-loader
│   └── nodejs-server              // Example of a data processing service built with nodejs
├── lerna.json
├── package-lock.json
├── package.json
├── packages
│   ├── a11y-web-client            // Cloud Label Annotation Tool 🔧, supports highlighting during the annotation process and real-time function effectiveness
│   ├── a11y-web-sdk               // Cloud Label Runtime SDK, integrates accessibility into the code
│   ├── a11y-web-socket            // Cloud Label Service, provides socket annotation capabilities
│   └── a11y-webpack-loader        // webpack build loader, adds fixed a11y-id attributes for easy annotation. (Supports JSX source code or product code)
├── script
│   ├── build.js
│   ├── clean.js
│   ├── start.js
│   ├── test.js
│   └── utils.js
└── yarn.lock
```

### Contact US

If you have any questions, you can contact us by submitting an issue or leaving a comment, and we will respond within three business days.

### License

Accessibility Cloud Label uses the Apache License 2.0.
