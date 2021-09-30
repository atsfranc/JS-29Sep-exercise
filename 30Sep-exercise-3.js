function numberRange(n) {
	if (n > 100) {
		return n + " is greater than 100"
	}
	if (n <= 100 && n >=26) {
		return n + " is between 26 and 100"
	}
	if (n <= 25 && n >= 0) {
		return n + " is between 0 and 25"
	}
	if (n < 0) {
		return n + " is less than 0"
	}
}
numberRange(125)