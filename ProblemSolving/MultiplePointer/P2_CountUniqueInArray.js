
//Implement a function called countUniqueValues, which accepts a sorted array, 
//and counts the unique values in the array. There can be negative numbers in the array, 
//but it will always be sorted.

function countUniqueValues(arr){     //using two pointer with scout. In this approach we will create a array with unique elements [-2,-1,-1,0,1] -> [-2,-1,0,1]
    let i=0;
    for(let j=1;j<arr.length;j++)
    {
        if(arr[i] !== arr[j])
        {
        i++;
        arr[i]=arr[j];  //[arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    //console.log(i+1);
    return (i+1);
  }

  
  
  let i =   countUniqueValues([-2,-1,-1,0,1]);
  //countUniqueValues([1,1,1,1,1,2,2]);
  console.log(i);



  //ToDO: 
  //Try to do it with unsorted array