function insertionSort(arr){    //colt steele solution

    console.log(arr);

    const swap = (arr,a,b) => {     //using es15 syntax
        [arr[a],arr[b]] =[arr[b],arr[a]];
    }


    for(let i=1;i<arr.length;i++)
    {
        let curVal=arr[i];
        for(var j=i-1;j>=0 && arr[j]>curVal;j--)
        {
         arr[j+1] =arr[j];       
        }
        arr[j+1] = curVal;
    }

    

    console.log(arr);

}

insertionSort([1,5,4,6,10,2,9]);
//console.log(res);


/*Mysolution
function insertionSort(arr){

    console.log(arr);

    const swap = (arr,a,b) => {     //using es15 syntax
        [arr[a],arr[b]] =[arr[b],arr[a]];
    }


    for(let i=1;i<arr.length;i++)
    {
        let s=i;
        for(let j=i-1;j>=0;j--)
        {
            if(arr[s]<arr[j])
            {

                swap(arr,s,j);
                s=j;
            }
                
        }
        
    }

    

    console.log(arr);

}
*/