process.env.NODE_ENV = 'test'
process.env.DB_USER = 'dbuser_test'
process.env.DB_PASSWORD = '12345_test'

const config = require('../index')
const testConfig = require('../config/test')
const defaultConfig = require('../config/default')
const mergeDeep = require('../mergeDeep')

const mergeConfig = mergeDeep(defaultConfig, testConfig)

describe('Config Test Environment', () => {
  it('should match the test values', () => {
    expect(config.appName).toBe('test_test')
    expect(config.dbUser).toBe('dbuser_test')
    expect(config.dbPassword).toBe('12345_test')
    expect(config).toEqual(mergeConfig)
  })
})
