function linearSearch(arr,num){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] === num)
        return i;
    }
    return -1;
  }
  
  
  linearSearch([1,3,4,6,5,12,9],5)



  //Recursion
  function linearSearch_Recursion(arr,num,index){

    if(arr.length===0) return -1;
  
    if(arr[index] === num) return index;
    else{
      return linearSearch(arr,num,(index+1));
    }
    
    }