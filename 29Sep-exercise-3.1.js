
// Exercise-3 Part-1

let xValue = 5
while (xValue > 0.5) {
    xValue -= 0.5
    console.log(xValue)
}

// Exercise-3 Part-2

let number = 2
while (number < 100) {
	if (number % 2 !== 0){
		console.log(number)
	} number++
} 

// Exercise-3 Part-3

let x = 1

function myFunction(n) {
	while (n >= x) {
		console.log([x])
		x++
	}
}
myFunction(6)

// const printN = (n) => {
// 	let index = 1
// 	while (index<=n) {
// 		console.log(`[${index}]`)
// 		index++
// 	}
// }
// printN(6)

// Exercise-3 Part-4
const sumPositiveNumber = (n) => {
	if (n < 0) {
		return n
	}
	let sum = 0
	let index = 1
	while (index<=n) {
		sum += index
		index++
	}
	return sum
}
console.log(sumPositiveNumber(5))