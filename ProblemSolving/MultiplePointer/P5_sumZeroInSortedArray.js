
//it returns the firts pair which makes the sum 0

function sumZero(arr){

    if(!arr || arr.length==0) return undefined; //edge condition

    let left=0;right=arr.length-1;
    while(left<right){
        let sum = arr[left] + arr[right];

        if(sum==0) return [arr[left],arr[right]];
        else if(sum>0) --right;
        else if(sum<0) left++;
    }

    return undefined;
    
}


//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
//sumZero([1,2,3])








//with O(n2) complexity
function sumZero_with_On2(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
