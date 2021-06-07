class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root)
        {
            this.root = newNode;
            return this;
        }
        let current = this.root;
            
            while(true){
                if(value === current.value){
                    return undefined;
                }
                if(value<current.value)
                {
                    if(current.left===null){
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                    
                }else if(value>current.value){
                    if(current.right===null){
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }

           

    }


   contains(value){
       if(!this.root) return false;
        
       let current = this.root;
       let found =false;
       while(current && !found){
           if(value===current.value)
           found=true;
           else if(value<current.value){
               current = current.left;
           }else if(value>current.value){
               current = current.right;
           }

       }

       return found;

   }

   find(value){
       if(!this.root) return false;
        
       let current = this.root;
       let found =false;
       while(current && !found){
           if(value===current.value)
           found=true;
           else if(value<current.value){
               current = current.left;
           }else if(value>current.value){
               current = current.right;
           }

       }
        
        if(!found) return undefined
       return current;

   }

   bfs(){
       var data =[],
            node,
           queue=[];

       if(!this.root) return undefined;

       node = this.root;
       queue.push(node);
       let current = this.root;
       while(queue.length)
       {
           node = queue.shift()
           data.push(node.value);

           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);

       }

       return data;

   }

   preorder(){
       let data=[];
       let current = this.root; //starting point

       function traverse(node){   //helper function to store child in data
           data.push(node.value);
           if(node.left) traverse(node.left);
           if(node.right) traverse(node.right);
       }

       traverse(current);
       return data;

   }

   postorder(){
       let data=[];
       let current = this.root;

       function traverse(node){
           
           if(node.left) traverse(node.left);
           
           if(node.right) traverse(node.right);
           
           data.push(node.value);   //as it is postorder

       }

       traverse(current);
       return data;
   }

   inorder(){
       let data=[];
       let current =this.root;

      function traverse(node){
           
           if(node.left) traverse(node.left);
           
           data.push(node.value);   //as it is preorder
           
           if(node.right) traverse(node.right);
           
           

       }

       traverse(current);
       return data;
   }
}


let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

//bst.bfs();
//bst.preorder();
//bst.postorder();
bst.inorder();