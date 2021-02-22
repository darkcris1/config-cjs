# Make your node configuration easier

You can configure in different environment such as **development**,
**production**,**test**,**staging** and etc... If the environment is not defined the default will be **development**

To specify the environment
create a file with this format **`{environment}.js`** in your config folder

if you use [config](https://www.npmjs.com/package/config) package before, it has similarity of the file structure

What's make this stand-out

- Lightweight **(< 1kb)**
- Predictable
- Very Fast (No parsing behind the scenes)
- No Dependencies
- Very Straightforward
- No need to call a function

# Installation

```bash
npm i config-cjs
```

# Usage

You need to create a `config/` folder in your working directory

**`/config/default.js`**

```javascript
export default {
  appName: '<Your App name>',
}
```

**`/config/production.js`**

```javascript
export default {
  dbConfig: {
    host: process.env.DB_HOST,
    pass: process.env.DB_PASS,
  },
}
```

> You can also use commonjs **`module.exports`**

```javascript
process.env.NODE_ENV = "production"

const config = require("config-cjs")

console.log(config.appName) //<Your App name>

db.connect(config.dbConfig).then(()=>......)
```

You can also use the [dotenv](https://www.npmjs.com/package/dotenv) alongside with this

```javascript
require("dotenv").config();

const config = require("config-cjs")

console.log(config.appName) //<Your App name>

db.connect(config.dbConfig).then(()=>......)
```

> **Don't** use **import** or **require** inside the config file otherwise it will not work as your expected

<hr />

## How to change the config directory ?

@default **`/config`**

```javascript
process.env['CONFIG_CJS-DIR'] = '/configuration'
```

## How to debug if the result is not as expected ?

@default **`false`**

```javascript
process.env['CONFIG_CJS_DEBUG'] = true

// Open the console and see the message
```
