/*
FrequencyCounter/MultiplePointer
Given an unsorted array find if thier exists any pair of elements whose difference is 
equal to the passed number

*/


function findPair(arr,num)   
{
    let found=false;
    if(!arr) return true;
    arr = arr.sort((a,b)=>{return (a-b)});
    //console.log(arr);
    let beg=0;
    let last=arr.length-1;
    let mid=Math.floor((beg+last)/2);
    for(let i=0;i<arr.length;i++)
    {
        let target = arr[i]+num;
        let array=[];
        array.push(...arr.slice(0,i+1));
        array.push(...arr.slice(i,arr.length));
        
        found = binarySearch(array,target);
        if(found) break;
    }
    
    
    
    return found;
}

function binarySearch(arr,target){
    let beg=0;
    let last=arr.length-1;
    let mid=Math.floor((beg+last)/2);
    
    while(beg<=last)
    {
        if(target===arr[mid]) return true;
        else if(arr[mid]>target){
            last=mid-1;
        }
        else if(arr[mid]<target){
            beg=mid+1;
        }
        mid=Math.floor((beg+last)/2);
    }
    
    return false;
}


findPair([6,1,4,10,2,4],2);