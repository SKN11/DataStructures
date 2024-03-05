class Queue{
    constructor(){
        this.arr=[];
        this.length=0;
    }

    enqueue(a){
        this.arr.unshift(a);
    }

    dequeue(){
        this.arr.pop();
    }
}






let s = new Queue();
s.enqueue(1);
s.enqueue(2);
//s.dequeue();
s.enqueue(3);
s.enqueue(4);
s.dequeue();

console.log(s.arr);