
function fibonacci(number) {
    if(num==1)
		return 0;
	else if(num==2||num==3)
		return 1;
	else 
		return fibonacci(num-1)+fibonacci(num-2);
}

module.exports = fibonacci;
