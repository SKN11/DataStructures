class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}


class Queue {
    constructor(){
    this.first=null;
    this.last=null;
    this.size=0;
    }


    enqueue(val){
        let node = new Node(val);
        if(!this.first)    //empty stack
        {
            this.first = node;
            this.last =node;
        }else{
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

     dequeue(){
        if(!this.first) return undefined;
        
        let dequeueNode = this.first;
        
        if(this.first==this.last)   //if only one element in queue   (important)
        {
            this.last = null;
        }
        
        this.first = this.first.next;
         dequeueNode.next = null;

        this.size--;
        return dequeueNode.val;
    }
}

let queue = new Queue();
queue.enqueue('method 1');
queue.enqueue('method 2');
queue.enqueue('method 3');


