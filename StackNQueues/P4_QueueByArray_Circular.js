/* Queue Impl using circular array wth O(1) time */

class Queue{
    constructor(){
        this.arr=new Array();
        this.size=5;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(a){
        
        this.rear= this.rear+1;
        if(this.rear == this.arr.length) {
            this.rear = 0;
            if(this.rear == this.front){
                this.rear = this.arr.length-1;
                return "Queue is full";
            }
        }
        if(this.front ==-1) this.front=0;
        
        this.arr[this.rear] = a;
        return "Value is Queued";
    }

    dequeue(){
        if(this.front == -1) return undefined;
        
        let dequeueElement = this.arr[this.front];
        //this.front = this.front +1;
        
        if(this.front == this.rear){
           this.rear  = -1;
           this.front = -1;
        }else{
            this.front = this.front+1;
            if(this.front == this.arr.length) this.front = 0;
        }
       return  dequeueElement;
    }
}






let s = new Queue();
let e1 = s.enqueue(1);
//console.log(e1);
s.enqueue(2);
s.enqueue(3);
s.enqueue(4);
s.enqueue(5);

/*
let res = s.enqueue(6);
console.log(res);
let e7 = s.enqueue(7);
console.log(e7);
let e8 = s.enqueue(8);
console.log(e8);
*/

let d1 = s.dequeue();
let d2 = s.dequeue();
console.log("Deque: "+d1);
console.log("Deque: "+d2);

s.enqueue(6);
s.enqueue(7);

let d3 = s.dequeue();
console.log("Deque: "+d3);

s.enqueue(8);
s.enqueue(9);

let d4 = s.dequeue();
console.log("Deque: "+d4);

/*
let d4 = s.dequeue();
console.log(d4);
 let d5 = s.dequeue();
console.log(d5);
 let d6 = s.dequeue();
console.log(d6);
s.enqueue(8);
s.enqueue(9);
s.enqueue(10);
s.enqueue(11);
s.enqueue(12);
*/


console.log(s.arr);
console.log("front : "+s.front);
console.log("rear : "+s.rear);
