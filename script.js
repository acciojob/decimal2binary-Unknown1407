// function decimalToBinary(num) {
//   //Write you code here
// 	let ans = 0;
// 	while (num>0) {  
// 		let a = num%2; 
// 		ans = (ans * 10 ) + a;  
// 		num = Math.floor(num/2);
// 	}
// 	return ans;
  
// }

function decimalToBinary(num) {
  let binary = 0;
  let base = 1;  // Used for place value

  while (num > 0) {
    let remainder = num % 2;  // Calculate the remainder when dividing by 2
    binary += remainder * base;  // Add the remainder to the binary value with proper place value
    base *= 10;  // Move to the next place value
    num = Math.floor(num / 2);  // Update the number to the quotient when divided by 2
  }

  return binary;
}

window.decimalToBinary = decimalToBinary;
