# Make your node configuration easier

You can configure in different environment such as **development**,
**production**,**test**,**staging** and etc...


to specify the environment
create a file with this format **```{environment}.js```** in your config folder

if you use [config](https://www.npmjs.com/package/config) it has similarity of the file structure

What's make this stand-out

- Lightweight **(< 1kb)**
- Very Fast 
- No Dependencies
- Very Straightforward
- No need to call a function


# Installation
```bash
npm i config-cjs
```

# Usage

> You need to create a ```config/``` folder in your working directory

**```/config/default.js```**
```javascript
module.exports = {
	appName: "<Your App name>"
}

```
**```/config/production.js```**
```javascript
module.exports = {
	dbConfig: {
		host: process.env.DB_HOST,
		pass: process.env.DB_PASS
	}
}

```



then use it 
```javascript
process.env.NODE_ENV = "production"

const config = require("config-cjs")

console.log(config.appName) //<Your App name>

db.connect(config.dbConfig).then(()=>......)
```

