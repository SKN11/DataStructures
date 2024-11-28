//https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

var merge = function(nums1, m, nums2, n) {
    
    let i=m-1;
    let j=n-1;
    let k=nums1.length-1;
    
    while(i>=0 && j >=0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
     }

    // If there are remaining elements in nums2, copy them
    while(j >=0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    // No need to copy remaining nums1 elements as they are already in place
    
    
   
};


//let nums1 = [4,5,6,0,0,0];
//let nums2 = [1,2,3];

//let nums1 = [-1,0,0,3,3,3,0,0,0]
//let nums2 = [1,2,2]

let nums1 = [0]
let nums2 = [1]


//let res= merge(nums1, 6, nums2, 3);
let res= merge(nums1, 0, nums2, 1);
console.log(nums1);
