function decimalToBinary(num) {
  //Write you code here
	let ans = 0;
	while (num>0) {  
		let a = num%2; 
		ans = (ans * 10 ) + a;  
		num = Math.floor(num/2);
	}
	return ans;
  
}

	// function Main() {
		// var n = prompt("Enter the decimal number");
		var n = ("Enter the decimal number");
	// 	alert(decimalToBinary(n));
	// }
	// Main();
window.decimalToBinary = decimalToBinary(n);
