/*
to check two number 181,811 have same number of integers or not
It can be done using Frequency Pattern 
*/

function sameFrequency(a, b) {
    //let temp = {};
    a = a.toString();
    b = b.toString();

    if (a.length !== b.length) return false;  //first check


    let lookup = {};
    for (let i = 0; i < a.length; i++) {    //Alternative: for(let i in a){
        let dig = a.charAt(i);
        lookup[dig] ? lookup[dig]++ : lookup[dig] = 1
    }

    for (let i = 0; i < b.length; i++) {   //Alternative: for(let i in a){
        let temp = b.charAt(i);
        if (!lookup[temp]) return false; //temp not found
        else lookup[temp] -= 1;   //decrement as it is found in f object
    }
    return true;
}


var res1 = sameFrequency(181, 811);
console.log(res1);