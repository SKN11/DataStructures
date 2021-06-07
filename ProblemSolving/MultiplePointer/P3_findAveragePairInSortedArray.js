function averagePair(arr,num){
  // add whatever parameters you deem necessary - good luck!
    if(arr.length===0)
    return false;
    let i=0;
    for(let j=arr.length-1;j>i;)
    {
        let sum = (arr[i]+arr[j]);
        if(sum === (num*2))
        return true;
        else if(sum<(num*2))
        {
            i++;
        }
        else if(sum>(num*2))
        {
            j--;
        }
        
    }

return false;
}



averagePair([1,3,3,5,5,7,10,12,19],8);


//colt steele

function averagePair2(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}