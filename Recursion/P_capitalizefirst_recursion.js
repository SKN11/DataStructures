/*

captialize the first letter in a Array of String
*/

//With Helper Method Recursion
function capitalizeFirst_WithHelperRecursion (arr) {

  let res =[];
  function helper(arr){
      if(arr.length == 0) return;
      
      let capitalized = arr[0].charAt(0).toUpperCase()+arr[0].slice(1);  
      res.push(capitalized);
      
      helper(arr.slice(1,arr.length))
  }
  helper(arr);
  
        
return res;
}


//function capitalizeFirst (arr) {
//
//    let res =[];
//
//    for(let i=0;i<arr.length;i++)
//      {
//        res.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//      }
//  return res;
//  }
  
  let s = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  
  console.log(s);
