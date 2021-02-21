
const isObj = (obj)=> obj && obj.constructor === Object;

function merge(def, source){
	for (let key in source) {
		if (isObj(source[key]) && isObj(def[key])){
			def[key] = merge(def[key], {...def[key],...source[key]})
		}else {
			def[key] = source[key]
		}
	}
	return def
}
module.exports = merge