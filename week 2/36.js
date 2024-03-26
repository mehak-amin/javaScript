function multiplyBy(multiplier) {
    function innerFunction(numberToMultiply) {
        return numberToMultiply * multiplier;
    }
    return innerFunction;
}


let multiplyByFive = multiplyBy(5);


let result = multiplyByFive(10);
console.log(result); 