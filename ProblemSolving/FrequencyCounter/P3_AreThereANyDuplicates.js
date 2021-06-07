function areThereDuplicates(...arg) {
    // good luck. (supply any arguments you deem necessary.)
  let temp={};
  for(let j=0;j<arg.length;j++)
  {
      let m = arg[j];
      temp[m] ? temp[m]++ : temp[m] =1;
  }
  //console.log(temp);
  for(let i in temp)
  {
      if(temp[i]>1)
      return true
  }
  
  return false;
  }
  
  //var res = areThereDuplicates(1,2,3,4);
  var res = areThereDuplicates('a','b','c','a');   //It has duplicate which is a
  
  console.log(res);
  
  
//Naive Solution using iteration is O(n2) use freq pattern u can do this in O(n)

  
  
  // function areThereDuplicates(...arg) {
  //   // good luck. (supply any arguments you deem necessary.)
  // let i=0;
  // if(arg.length===0)
  // return false;
  
  // for(let j=1;j<arg.length;j++)
  // {
  //     if(arg[i] == arg[j])
  //     {
  //         return true;
  //     }
  //     else{
  //     i++;
  //     }
  // }
  
  // return false;
  // }
  