function decimalToBinary(decimalNumber) {
  //Write you code here
	// let ans = 0;
	// while (num>0) {  
	// 	let a = num%2; 
	// 	if(num%2 == 0)
	// 	{
	// 		ans = 1;
	// 	}
	// 	else
	// 	{
			
	// 	}
	// 	ans = (ans * 10 ) + a;  
	// 	num = Math.floor(num/2);
	// }
	return decimalNumber.toString(2);
  
}

	// function Main() {
	// 	var n = prompt("Enter the decimal number");
	// 	alert(decimalToBinary(n));
	// }
	// Main();
window.decimalToBinary = decimalToBinary;
