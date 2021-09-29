
function star(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			console.log(arr[i][j]);
		}
	}
	
}
star([["*"], ["**"], ["***"], ["****"], ["*****"]]);

// for (let line = 0; line < 5; line++) {
// 	let character = "*"
// 	for (let col = 0; col < line; col++) {
//       character += "*"
// 	}
// 	console.log(character)
// 	console.log("\n")
// }