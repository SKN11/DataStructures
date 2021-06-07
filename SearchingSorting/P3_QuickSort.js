function pivot(arr,start=0,end=arr.length-1)
{
      const swap = (arr,a,b) => {     //using es15 syntax
        [arr[a],arr[b]] =[arr[b],arr[a]];
    }

    let pivot=arr[start];
    let swapIndex=start;
    

    for(let i=start+1;i<arr.length;i++)
    {
        if(arr[i]<pivot){
        swapIndex++;
        swap(arr,swapIndex,i)
        }
       
    }

    swap(arr,swapIndex,start);

    return swapIndex;


}

//pivot([4,8,2,1,5])


function quickSort(arr,left=0,right=arr.length-1){
    if(left<right)
   { 
    let pivIndex = pivot(arr,left,right);
    quickSort(arr,left,pivIndex-1);
    quickSort(arr,pivIndex+1,right);
   }
    return arr;
}


quickSort([4,8,2,1,5]);