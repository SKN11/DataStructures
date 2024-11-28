class Node {
    constructor(data, priority) {
        this.value = data;
        this.priority = priority
    }
}

//This PriorityQueue is created by MaxHeap
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap(a, b) {
        [this.values[a], this.values[b]] = [this.values[b], this.values[a]];
    };


    //  shiftUp(){
    //     let index = this.values.length-1;
    //     let parentIndex = Math.floor((index-1)/2);

    //     const swap = (arr,a,b)=>{
    //         [arr[a],arr[b]] = [arr[b],arr[a]];
    //     };

    //     while(this.values[index] > this.values[parentIndex])
    //     {
    //         //swap(this.values,index,parentIndex);
    //         this.swap(index,parentIndex);
    //         index = parentIndex;
    //         parentIndex = Math.floor((index-1)/2);
    //     }

    // }

    shiftUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {                          //while(true) condition create a problem it will compare the root to -1 index which is wrong thats why used while(idx>0)
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentValue = this.values[parentIdx];
            if (element <= parentValue) break;
            [this.values[idx],this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            //try not use conventional swapping
            // this.values[parentIdx] = element;
            // this.values[idx] = parentValue;
            idx = parentIdx;
        }
    }



    insert(value) {
        this.values.push(value);
        this.shiftUp();

    }

    remove() {
        if (!this.values.length) return null;

        this.swap(0, this.values.length - 1); //swap root with last element
        let res = this.values.pop();   //remove the swap value which is also the highest value or root value
        this.shiftDown();             //to make the heap again
        return res;
    }

    shiftDown() {
        let idx = 0;
        const element = this.values[0];
        const length = this.values.length;

        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftElement;
            let rightElement;
            let swapIdx = null;  //this will decide whther to choose left child or right child to replace

            if (leftIdx < length) { // this willl make sure the leftIdx is not out of bound in the values []
                leftElement = this.values[leftIdx];
                if (element < leftElement) {
                    swapIdx = leftIdx;
                }
            }


            if (rightIdx < length) {
                rightElement = this.values[rightIdx];
                if ((swapIdx === null && element < rightElement) || (swapIdx !== null && leftElement < rightElement)) {   //(swapIdx === null && element < rightElement) -> checks whether we calculated the leftIdx or not
                    swapIdx = rightIdx;
                }
            }




            if (swapIdx === null) break;

            this.swap(idx, swapIdx);
            idx = swapIdx;


        }


    }


}


let heap = new PriorityQueue();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//heap.insert(55,[41,39,33,18,27,12]);