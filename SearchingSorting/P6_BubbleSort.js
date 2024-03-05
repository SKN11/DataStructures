function bubblesort(arr){
    var noSwaps; //optimisation by checking is there any swap ... helpful in almost sorted array
    
    const swap_es15 = (arr,a,b) => {     //using es15 syntax
        [arr[a],arr[b]] =[arr[b],arr[a]];
    }

    for(let i=arr.length;i>0;i--)
    {
        noSwaps =true;  //use for optimisation
        for(let j=0;j<i-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
             noSwaps =false;  //swap needed hence making it false
             swap_es15(arr,j,j+1);
            }
        }
        if(noSwaps)
        break;
    }

    function swap(arr,a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    console.log(arr);
}

bubblesort([5,4,6,10,1,2,9]);
//console.log(res);