function productOfArray(arr){
    
    if(arr.length === 0) return 0;
    
   return arr[0] * productOfArray(arr.slice(1));
}


productOfArray([1,2,3,10]);