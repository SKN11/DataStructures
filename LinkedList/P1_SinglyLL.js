class Node
{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class SinglyLinkedList{

    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value)
    {
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop()
    {

        if(!this.head){
            return undefined;
            }
        
            let temp = this.head;
            let newTail = temp;
            
            while(temp.next)
                {
                   newTail=temp;
                   temp=temp.next;
                }
              this.tail = newTail;
              this.tail.next = null;
              this.length--;
              if(this.length==0)
              {
                  this.head=null;
                  this.tail=null;
              } 
              return temp;
        
        
    }

    shift(){
        if(!this.head)
        return undefined;
        
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length===0)
              {
                  this.tail=null;
              } 
        return temp;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head)
        {
        this.head = newNode;
        this.tail=this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
         
        return newNode;
    }

    get(index){
        if(index <0 || index > this.length-1) return undefined;

        if(!this.head) return undefined;
        
        let temp = this.head;
        while(index>0)
        {
            temp = temp.next;
            index--;
        }
        return temp;
    }

    set(index,value){
       var found = this.get(index);
       if(found){
       found.data = value
        return true;
       }
       return false;
    }

    insert(index,value){
        if(index ==0) {
            this.unshift(value);
            return true;
        }
        if(index == this.length){
          this.push(value);
          return true;
        }
        
        var found = this.get(index-1);
        let newNode = new Node(value);
        if(found){
            newNode.next = found.next;
            found.next = newNode;
            this.length++;
            return true;
       }
       return false;
    }

    remove(index,value){
        if(index ==0) {
            this.shift();
            return true;
        }
        if(index == this.length){
          this.pop();
          return true;
        }
        
        var prevNode = this.get(index-1);
        if(prevNode){
            var removed= prevNode.next;
            prevNode.next = removed.next;
            this.length--;
            return removed;
       }
       return undefined;
    }

    reverse(){  //try to delte & make it again from scratch
        if(!this.head)
        return undefined;
        
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let nextNode;
        let prevNode = null;
        
        while(node)
        {
            nextNode = node.next;
            node.next = prevNode
            prevNode = node;
            node = nextNode;
        }   
        

    }


    traverseList(){
        let temp = this.head;
        while(temp)
        {
            console.log(temp.data);
            temp = temp.next;
        }
    }

     print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.data)
            current = current.next
        }
        console.log(arr);
    }

     rotate(num){
    let temp = this.head; 
    this.tail.next = temp;
    //this.tail = temp;
        
    for(let i=0;i<num-1;i++)
    {
        
        temp=temp.next;
        
    }
    
    this.head= temp.next;
    this.tail =temp;
    temp.next=null;
    
    
    
    }

}

var list = new SinglyLinkedList();
// list.push("first");
// list.push("sec");
// list.push("third")
// list.push("four")

list.push(1);
list.push(2);
list.push(3)
list.push(4);
list.push(5);


//list.traverseList();
list.print();
//list.reverse();
//list.print();
//list.traverseList();

//console.log(list);