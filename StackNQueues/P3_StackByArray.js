

//Stack with Array Impl i O(1)

class Stack{
    constructor(){
        this.arr=[];
        this.length=0;
    }

    push(a){
        this.arr.push(a);
    }

    pop(){
        this.arr.pop();
    }
}






let s = new Stack();
s.push(1);
s.push(2);
s.pop();
s.push(3);
s.push(4);
s.pop();

console.log(s.arr);