process.env.NODE_ENV = "development";
process.env.DB_PASSWORD = "12345_development"
process.env.DB_USER = "db_user_development"

const config = require("../index")
const developmentConfig = require("../config/development")
const defaultConfig = require("../config/default")

const mergeConfig = {...defaultConfig,...developmentConfig}

describe("Config Development Environment",()=>{
	it("should match the development values",()=>{
		expect(config.appName).toBe("development_test")
		expect(config.dbUser).toBe("db_user_development")
		expect(config.dbPassword).toBe("12345_development")
		expect(config).toEqual(mergeConfig)
	})
})