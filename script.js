function decimalToBinary(num) {
  //Write you code here
	let ans = 0;
	while (num>0) {  
		let a = num%2; 
		ans = (ans * 10 ) + a;  
		num = num/2;
	}
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
