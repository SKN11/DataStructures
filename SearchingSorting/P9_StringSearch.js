

//Ques: You want to count the number of times a smaller string appears in a longer string


function stringSearch(str1,str2){

    let count=0;
    for(let i=0;i<str1.length;){

      for(let j=0;j<str2.length;j++){
        if(str1.charAt(i) === str2.charAt(j)){
          i++;
          if(j==str2.length-1) {
            i--;
            count++;
          }
        }
        else if(str1.charAt(i) !== str2.charAt(j)){
          break;
        } 
      }
      i++;
    }
    return count;
  }
  
  
  let res = stringSearch('wowomgomgzomg','omg');  //3
  console.log(res);