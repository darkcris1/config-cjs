const fs = require('fs')
const merge = require('./mergeDeep')

const matcher = /export\s{1,}default\s*|module\s*\.\s*exports\s*=\s*/

const debug = process.env['CONFIG_CJS_DEBUG'] === 'true'

function log(message) {
  console.log(`[config-cjs]\x1b[41m DEBUG \x1b[0m: ${message}`)
}

function importer(jsFile = '') {
  const fileDir =
    (process.env['CONFIG_CJS_DIR'] || '/config').trim().replace(/\/$/, '') + '/'

  const filePath = process.cwd() + fileDir + jsFile

  try {
    const res = fs.readFileSync(filePath, { encoding: 'utf-8' })
    // eval should be cleaner but I don't want to mess up with the variables
    return new Function(
      `return (function(){  ${res.replace(matcher, 'return ')}  })()`,
    )()
  } catch (error) {
    if (debug) log(`${error.message} at ` + filePath)

    // If the file is not exist will return an empty object
    return {}
  }
}

function init() {
  const ENV = (process.env.NODE_ENV || 'development').toLowerCase()
  let def = importer('default.js')
  switch (ENV) {
    case 'development':
    case 'production':
    case 'staging':
    case 'qa':
    case 'test':
      def = merge(def, importer(ENV + '.js'))
  }

  return def
}

module.exports = init()
