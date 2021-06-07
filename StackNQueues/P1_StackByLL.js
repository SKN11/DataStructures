class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}


class Stack {
    constructor(){
    this.first=null;
    this.last=null;
    this.size=0;
    }


    push(val){
        let node = new Node(val);
        if(!this.first)    //empty stack
        {
            this.first = node;
            this.last =node;
        }else{
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
            
        }
        this.size++;
        return this;
    }

     pop(){
        if(!this.first) return undefined;
        
        let popped = this.first;
        
        if(this.first==this.last)   //if only one element in stack   (important)
        {
            this.last = null;
        }
        
        this.first = this.first.next;
         popped.next = null;

        this.size--;
        return popped.val;
    }
}

let stack = new Stack();
stack.push('method 1');
stack.push('method 2');
stack.push('method 3');


