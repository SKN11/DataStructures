function getDigit(num,idx)
{
    return  (Math.floor(Math.abs(num)  /  Math.pow(10,idx)) % 10 );
}


function digitCount(num)
{
    if(num===0) return 1;
    return Math.floor(Math.log10(num))+1;
}

function mostDigits(arr){
    let maxDigits=0;
    let a= arr.map(e => {
        maxDigits = Math.max(maxDigits,digitCount(e));     //if(count>maxDigits) maxDigits =count;
    });
    return maxDigits;
}


function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k=0; k<maxDigitCount ;k++)
    {
        let buckets = Array.from({length:10},()=>[]);           //let buckets = [[],[],[],[],[],[],[],[],[],[]];
        for(let i=0;i < arr.length;i++)
        {
           let place = getDigit(arr[i],k);
           buckets[place].push(arr[i]); 
        }
        arr = [].concat(...buckets);
        //console.log(arr);
    }
    
    return arr;
}

radixSort([23,345,5497,12,2345,9852]);