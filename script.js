
function fibonacci(number) {
    if (number === 1) return 0;
    else if (number === 2) return 1;
    var number1 = 0;
    var number2 = 1;
    var sum;
    for (var i = 2; i < number; i++) {
      sum = number1 + number2;
      number1 = number2;
      number2 = sum;
    }
    return number2;
}

module.exports = fibonacci;
