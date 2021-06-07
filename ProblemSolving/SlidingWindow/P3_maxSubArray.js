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
    
    return maxSum;
  
  }

//Write a function called maxSubarraySum which accepts an array of integers and a number
// called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([100,200,300,400],2);
//maxSubarraySum([2,3],3);