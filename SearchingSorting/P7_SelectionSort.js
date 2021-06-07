function selectionSort(arr){

    console.log(arr);

    const swap = (arr,a,b) => {     //using es15 syntax
        [arr[a],arr[b]] =[arr[b],arr[a]];
    }


    for(let i=0;i<arr.length;i++)
    {
        let min = i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j] < arr[min])
            {
                min = j;
            //swap2(arr,j,j+1);
            }
        }

        swap(arr,i,min);
       // console.log(arr);
        //console.log("--");    
    }

    

    console.log(arr);

}

selectionSort([5,4,6,10,1,2,9]);
//console.log(res);