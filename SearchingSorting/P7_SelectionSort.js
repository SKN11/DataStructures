function selectionSort(nums) {

    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[minIndex] > nums[j])
                minIndex = j;
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
}


selectionSort([5, 4, 6, 10, 1, 2, 9]);
//console.log(res);