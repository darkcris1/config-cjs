process.env.NODE_ENV = undefined;
const config = require("../index")

const defaultConfig = require("../config/default")

describe("Config Default Values",()=>{
	it("should match the default values",()=>{
		expect(config.appName).toBe("testdefault")
		expect(config.dbUser).toBe("dbuser")
		expect(config.dbPassword).toBe("dbpassword")
		expect(config).toEqual(defaultConfig)
	})
})
