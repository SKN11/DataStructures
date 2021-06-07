function binarySearch(arr,num){
  if(arr.length === 0)
  return -1;
  
  let beg=0;
  let end=arr.length-1;
  let mid = Math.floor((beg+end)/2);
   
  while(beg<=end)
  {
      if(arr[mid] === num)     return mid;
      else if(arr[mid]<num)    beg=mid+1;
     else if(arr[mid]>num)    end=mid-1;
      
      mid = Math.floor((beg+end)/2);
      
  }
   return -1;  
  }
  
  
  let res = binarySearch([1,3,4,5,6,9],5);
  console.log(res);