const isObj = (obj) => obj && obj.constructor === Object

function merge(def, source) {
  for (let key in source) {
    const $def = def[key]
    const $source = source[key]
    if (isObj($source) && isObj($def)) {
      def[key] = merge($def, { ...$def, ...$source })
    } else {
      def[key] = $source
    }
  }
  return def
}
module.exports = merge
