function minSubArrayLen(arr,sum){ //using sliding window
  

    //minimum subarray length whose sum is equal to the passed sum 
    let tempSum=0;
    let start=0;
    let end=0;
    let minLen=Infinity;
   
    while(start<arr.length)
    {
      if(tempSum<sum && end < arr.length)
      {
        tempSum+=arr[end];
        end++;
      }
      else if(tempSum>=sum){
        minLen= Math.min(minLen,end-start);
        tempSum-=arr[start];
        start++;
      }
      else{
        break;
      }
    }
   
   return minLen===Infinity?0:minLen;
   
   }


   let result = minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19],52);
//let result = minSubarrayLen([2,3,1,2,4,3],7);
console.log(result);
   