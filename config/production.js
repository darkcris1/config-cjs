module.exports = {
	appName: "production_test",
	dbPassword: process.env.DB_PASSWORD,
	dbUser: process.env.DB_USER,
	dbConfig: {
		host: "localhost",
		port: process.env.PORT
	}
}