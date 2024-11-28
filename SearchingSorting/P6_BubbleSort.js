function bubblesort(arr) {
    var noSwaps; //optimisation by checking is there any swap ... helpful in almost sorted array

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;  //use for optimisation
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                noSwaps = false;  //swap needed hence making it false
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (noSwaps) break;
    }
}

let arr = [5, 4, 6, 10, 1, 2, 9];
bubblesort(arr);
console.log(arr);