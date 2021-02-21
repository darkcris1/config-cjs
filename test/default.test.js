process.env.NODE_ENV = undefined;
const defaultConfig = require("../config/default")

describe("Config Default Values",()=>{
	it("should match the default values",()=>{
		const config = require("../index")
		expect(config.appName).toBe("testdefault")
		expect(config.dbUser).toBe("dbuser")
		expect(config.dbPassword).toBe("dbpassword")
		expect(config).toEqual(defaultConfig)
	})
	it("should not slow",()=>{
		let conf = {}
		const timeStart = Date.now();
		for (let i = 0; i < 1e4; i++) {
			conf = require("../index")
		}
		const timeStamp = (Date.now() - timeStart) / 1000;
		expect(timeStamp).toBeLessThan(0.25)
	})
})
