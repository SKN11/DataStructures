class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push({val,priority});
        this.sort();
    }

    dequeue(){
        const min = this.values.shift();
        return min;
    }

    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }


}


class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}