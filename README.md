# react-redux-setup

## React Setup Using Parcel and Babel

Install bellow packages dev dependenies

```
    npm i -D parcel-bundler @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties    
```
Install bellow packages dependencies

```
    npm i react react-dom
```
Create file `.babelrc` write below code

```json
    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties"
        ]
    }
```

Create a directory `src` and create `index.js` and `index.html` in src

```linux
    mkdir src
    cd src
    touch index.js index.html
```
Write below code into `index.html`
```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>React with Parcel.js</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="index.js"></script>
        </body>
    </html>
```
Write below code into `index.js`
```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';

    const Index = () => <h1>Index Page</h1>;
    ReactDOM.render(<Index />, document.getElementById('root'))
```

Then write script in `package.json` file
```json
    {
        ...
        "scripts": {
            "start": "parcel ./src/index.html",
            "build": "parcel build ./src/index.html"
        }
        ...
    }
```
#### Implement Hot Replacement 

```linux
    npm i -D react-hot-loader
```

Rewrite `.babelrc`

```json
    {
        ...
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
        ]
        ...
    }
```

Rewrite `index.js` file

```javascript
    ReactDOM.render(<Index />, document.getElementById('root'));

    if (module.hot) {
        module.hot.accept();
    }
```