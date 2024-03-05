class Solution{
    RearrangeBySORT(arr,n){
        arr = arr.sort((a,b) => a-b );
        
        for(let i=0 ;i<n;i++)
        {
            if(arr[i] == -1) continue;
            else{
                this.swap(arr,i,arr[i]);
            }
        }
        return arr;
    }

    RearrangeByInPlace(arr,n){
        for(let i=0 ;i<n;)
        {
            if(arr[i] != -1 && (arr[i] !=i)) 
                this.swap(arr,arr[i],i);
            else{
                i++;
            }
        }
        return arr;
    }
    
    swap(arr,i,j){
        [arr[i],arr[j] ] = [arr[j],arr[i] ];
        
    }
}


let s = new Solution();
let res = s.Rearrange([-1,-1,6,1,9,3,2,-1,4,-1],10);
let res1 = s.RearrangeByInPlace([-1,-1,6,1,9,3,2,-1,4,-1],10);

console.log(res);
console.log(res1);