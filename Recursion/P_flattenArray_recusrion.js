function flatten(arr){

    
    let flat = [];
    
   for(let i=0;i<arr.length;i++)
   {
       Array.isArray(arr[i])  ? flat = flat.concat(flatten(arr[i])) : flat.push(arr[i]);    
   }

    

    return flat;

    
}



flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]



// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3   



//another implementation
// var res=[];
// function flatten(arr){
//     arr.map(e => Array.isArray(e) ? flatten(e) : res.push(e)); 
//  }
 
//  flatten([1, [2, [3, 4], [[5]]]])
//  console.log(res)