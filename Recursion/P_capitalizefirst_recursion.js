function capitalizeFirst (arr) {

    let res =[];
    
    for(let i=0;i<arr.length;i++)
      {
        res.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
      }
  return res;
  }
  
  let s = capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  
  console.log(s);