
function fibonacci(number) {
    // if (number === 1){
    //     return 0;
    // } 
    // else if(number === 2) {
    //         return 1;
    //     }
     
    // var number1 = 0;
    // var number2 = 1;
    // var sum;
    // for (var i = 2; i < number; i++) {
    //   sum = number1 + number2;
    //   number1 = number2;
    //   number2 = sum;
    // }
    // return number2;
    
    if(num==1)
		return 0;
	else if(num==2||num==3)
		return 1;
	else 
		return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
