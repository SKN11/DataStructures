function isSubsequence(a,b) {
    // good luck. Add any arguments you deem necessary.
    let res=false;
     if(a.length===0)
      return res;
      let j=0;
      for(let i=0;i<a.length;)
      {
          if(a.charAt(i) == b.charAt(j))
          {
              res=true;
              i++;
              j++;
          }
          else{
              res=false;
              if(j<b.length-1)
              j++
              else
              break;
          }
  
          
      }
  
  return res;
  }
  
  
  
  isSubsequence('sing','sting'); //true
  //isSubsequence('abc','acb'); //false
  
  
  
  
  
  //colt steele soluton
  
  function isSubsequence2(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }