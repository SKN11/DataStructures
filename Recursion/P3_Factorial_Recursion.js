function factorial(num) {

    if (num === 1) return 1; //base case

    return num * factorial(num - 1);
}


factorial(5);



//Factorial Iteratively
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total

}