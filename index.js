
const merge = require("./mergeDeep")
function importer(js = ""){
	
	let fileDir = process.env["CONFIG-DIR"] || "/config"
	fileDir = fileDir.trim().replace(/\/$/,"") + "/"
	
	const filePath = process.cwd() + fileDir + js
	
	try {
		return require(filePath)
	} catch (_) {
		// If the file is not exist will return an empty object
		return {}
	}
}

function init(){
	
	const ENV = (process.env.NODE_ENV || "development").toLowerCase();
	let def = importer("default")
	
	switch (ENV) {
		case 'development':
		case 'production':
		case 'staging':
		case 'qa':
		case 'test':
			def = merge(def,importer(ENV))
	}
	
	return def;

}

module.exports = init()
