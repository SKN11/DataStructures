function maxSubarraySum(arr,num){    //It is using sliding window pattern
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0 || arr.length <num) return null;
    
      let maxSum=0;
      let tempSum=0;
    for(let i=0;i<num;i++)
    maxSum+=arr[i];
  
  tempSum=maxSum;
    for(let i=num;i<arr.length;i++)
    {
      tempSum = tempSum - arr[i-num] + arr[i];
      maxSum = Math.max(maxSum,tempSum);
  
    }

    //Note: not a sliding window pattern
     // for(let j=1;j<=num && num<arr.length ;j++,num++)
    //     {
    //         for(let k=j;k<=num;k++)
    //             {
    //                 tempSum+=arr[k];
    //             }
    //         maxSum= Math.max(tempSum,maxSum)
    //         tempSum=0;
    //     }
    // //console.log(maxSum);
    
    return maxSum;
  
  }

  

//Write a function called maxSubarraySum which accepts an array of integers and a number
// called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([100,200,300,400],2);
//maxSubarraySum([2,3],3);