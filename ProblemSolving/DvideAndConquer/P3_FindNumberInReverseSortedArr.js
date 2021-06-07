function findRotatedIndex(arr,num){    //o(logn)
    // add whatever parameters you deem necessary - good luck!
    if(arr.length===0) return -1; 
    
    
    let beg=0;
    let last=arr.length-1
    let mid = Math.floor((beg+last)/2);
  
    while(beg<=last)
    {
        if(arr[mid]===num)
        return mid;
        else if(arr[mid]<num){
         beg=0;
         last=mid-1;   
        }
        else if(arr[mid]>num){
         beg=mid+1;
         last=last;   
        }
         mid = Math.floor((beg+last)/2);
    }
  
    return -1;
    
  }
  
  
  findRotatedIndex([5,4,3,2,1],0);