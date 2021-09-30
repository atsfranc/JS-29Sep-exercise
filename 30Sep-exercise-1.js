const names = ['Maria', 'Antony', 'Joy', 'Juan']
const insertName = (name) => {
	names.push(name)
	return names
}
console.log(insertName("Francis"))

const hasName = (arr, name) => {
	return arr.includes(name)
}
console.log(hasName(names, "Tom"))

const newNames = ["Tom", "Maria", "Joy"]
const existsInBothArray = (lhs, rhs) => {
	return lhs.filter( (item) => {
		return rhs.includes(item)
	})
}
console.log(existsInBothArray(names, newNames))

// map() reduce() filter()
const toLength = (arr) => {
	return arr.map((item) => item.length)
}
console.log(toLength(names))