class Node{
    constructor(val){
        this.val = val;
        this.prev =null;
        this.next =null;
    }
}

class DoublyLinkedList{

    constructor(val){
        this.head = null;
        this.tail =null;
        this.length =0;
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
        this.head = node;
        this.tail =node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail =node;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        
        let popped=this.tail;
        
        if(this.length==1)
        {
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            popped.prev =null;
        }   
        this.length--;

        return popped;

    }

    shift(){
        if(!this.head)
        return undefined;

        let oldHead = this.head;
        if(this.length==1)
        {
            this.head=null;
            this.tail=null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next =null;
            
        }
        
        this.length--;
        return oldHead;
    }

    unshift(val){
        let node = new Node(val);

        if(!this.head){
            this.head = node;
            this,tail =node;
        }else{
            this.head.prev=node;
            node.next = this.head;
            this.head = node;

        }
        this.length++;
        return this;

    }

    get(index){
        if(index<0 || index>=this.length)
        return undefined;

        let start;
        if(index < (this.length/2))
        {
           start = this.head;
           while(index>0)
           {
               start = start.next;
               index--;
           }
        } else{
            start = this.tail;
            var count = this.length - 1;   //other logic than working on index to track
           while(count!==index)
           {
               start = start.prev;
               count--;
           }

        }

        return start;


    }

    set(index,val){
        let nodeToSet = this.get(index);
        if(nodeToSet){
            nodeToSet.val = val;
            return true;
        }
        else{
            return false;
        }

    }

    insert(index,val){

        if(index<0 ||index>this.length) return undefined;

        if(index===0) {
            this.unshift(val);
            return true;
           }
           
        if(index===this.length) {
            this.push(val);
             return true;
           }
           
        
        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;

        return true;

    }

    remove(index){

        if(index<0 ||index>=this.length) return undefined;

        if(index===0) {
            this.shift();
            return true;
           }
           
        if(index===this.length-1) {
            this.pop();
             return true;
           }
           
        
        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;


        this.length--;

        return removedNode;

    }

    print(){
        let arr=[];
        let current = this.head;
        while(current)
        {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    reverse(){
        let currentNode=this.head;
        let nextNode=null;
        let prevNode =null;
        
        this.head=this.tail;
        this.tail=currentNode;
    
        while(currentNode.next){
          nextNode = currentNode.next;
          currentNode.next = prevNode;
          currentNode.prev = nextNode;
    
          prevNode = currentNode;
          currentNode = nextNode;
        }
        currentNode.next = prevNode;
        currentNode.prev = null;
      }


}



let list = new DoublyLinkedList();
list.push("first");
list.push("sec");
list.push("third");
list.push("fourth");

list.print();
// list.reverse();
// list.print();
