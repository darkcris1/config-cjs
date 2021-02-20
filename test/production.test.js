process.env.NODE_ENV = "production";
process.env.DB_PASSWORD = "12345"
process.env.DB_USER = "db_user"

const config = require("../index")
const productionConfig = require("../config/production")
const defaultConfig = require("../config/default")

const mergeConfig = {...defaultConfig,...productionConfig}

describe("Config Production",()=>{
	it("should match the production values",()=>{
		expect(config.appName).toBe("production_test")
		expect(config.dbUser).toBe("db_user")
		expect(config.dbPassword).toBe("12345")
		expect(config).toEqual(mergeConfig)
	})
})