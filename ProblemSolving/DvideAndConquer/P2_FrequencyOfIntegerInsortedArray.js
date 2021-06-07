function sortedFrequency(arr,num){  //using binary search
    if(arr.length===0) return -1;
    let rc=-1;    
    function find(arr,beg,last){
        
        if(beg<=last)
        {
            let mid=Math.floor((beg+last)/2);
            if(arr[mid] ===num && arr[mid-1]!==num) 
            rc= mid;
            else if(arr[mid]===num && arr[mid-1]===num)
            {
                find(arr,0,mid);
            }
            else if(arr[mid]<num)
            {
                find(arr,mid+1,last);
            }
            else if(arr[mid]>num)
            {
                find(arr,0,mid-1);
            }
            
        }
        return rc;
    }
    rc=-1;

    function findFinal(arr,beg,last){
        
        if(beg<=last)
        {
            let mid=Math.floor((beg+last)/2);
            if(arr[mid] ===num && arr[mid+1]!==num) 
            rc= mid;
            else if(arr[mid]===num && arr[mid+1]===num)
            {
                findFinal(arr,mid,last);
            }
            else if(arr[mid]<num)
            {
                findFinal(arr,mid+1,last);
            }
            else if(arr[mid]>num)
            {
                findFinal(arr,0,mid-1);
            }
            
        }
        return rc;
    }

    let initial =  find(arr,0,arr.length-1);
    let final = findFinal(arr,0,arr.length-1);
    //console.log(initial+":"+final)

    if(initial===-1 && final ===-1) return -1;
    return final-initial+1;
}



let res= sortedFrequency([2,3],2);
console.log(res);
