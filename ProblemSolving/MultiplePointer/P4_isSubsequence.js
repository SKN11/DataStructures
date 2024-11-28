function isSubsequence(a,b) {

    if(a.length>b.length) return false;

    let i=0;
    for(let j=0;i<a.length,j<b.length;){

      if(a.charAt(i) === b.charAt(j)) {
        i++;j++
      }
      else if(a.charAt(i) !== b.charAt(j)) {
        j++;
      }

    }

  if(i<a.length) return false;
  else return true;

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