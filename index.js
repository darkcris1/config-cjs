function importer(js = ""){
	const filePath = process.env["CONFIG-DIR"] || process.cwd() + "/config/" + js
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
			def = {...def , ...importer(ENV)}
	}
	
	return def;

}

module.exports = init()
