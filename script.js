function decimalToBinary(num) {
  //Write you code here
	let ans = 0;
	while (num>0) {  // 7 => 3
		let a = num%2; // 1
		ans = (ans * 10 ) + a;  // (0 * 10) + 1
		num = a/2;
	}
	return decimalToBinary;
  
}

window.decimalToBinary = decimalToBinary;
