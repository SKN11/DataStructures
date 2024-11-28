class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;

        while (true) {
            if (value === current.value) {
                return undefined;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;

            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }



    }


    contains(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value === current.value)
                found = true;
            else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }

        }

        return found;

    }

    find(value) {
        if (!this.root) return false;

        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value === current.value)
                found = true;
            else if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            }

        }

        if (!found) return undefined
        return current;

    }

    find2(value) {

        if (!this.root) return undefined;

        let current = this.root;

        while (true) {
            if (current.value === value) return true; //u can return current as well

            if (current.value > value) {
                if (!current.left) {
                    return false;
                }
                else current = current.left;
            } else if (current.value < value) {

                if (!current.right) {
                    return false;
                }
                else current = current.right;
            }

        }


    }

    bfs() {
        var bfsData = [],
            node,
            queue = [];  //we will levearge queue data struture to do the bfs

        if (!this.root) return undefined;

        node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();  //not an optimise solution use circular array or linked list
            bfsData.push(node.value);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }

        return bfsData;

    }

    preorder() {
        let data = [];
        let current = this.root; //starting point

        function traverse(node) {   //helper function to store child in data
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;

    }

    postorder() {
        let data = [];
        let current = this.root;

        function traverse(node) {

            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);

            data.push(node.value);   //as it is postorder

        }

        traverse(current);
        return data;
    }

    inorder() {
        let data = [];
        let current = this.root;

        function traverse(node) {

            if (node.left) traverse(node.left);

            data.push(node.value);   //as it is inorder

            if (node.right) traverse(node.right);



        }

        traverse(current);
        return data;
    }

    findWithParent(value) {
        if (!this.root) return false;

        let current = this.root;
        let parent = this.root
        let found = false;
        while (current && !found) {
            if (value === current.value)
                found = true;
            else if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            }

        }

        if (!found) return undefined
        return { "parent": parent, "child": current };

    }

    remove(val) {
        if (!this.root) return undefined;

        let nodeWithParent = this.findWithParent(val);
        console.log(nodeWithParent);

        if (nodeWithParent.child.value == nodeWithParent.parent.value) {
            nodeWithParent.parent = null;
            this.root = null;
            nodeWithParent.child = null;
        }
        else if (nodeWithParent.child.value > nodeWithParent.parent.value) {
            if (nodeWithParent.child.right) {
                nodeWithParent.parent.right = nodeWithParent.child.right;
            }
            else {
                nodeWithParent.parent.right = null;
            }
        } else if (nodeWithParent.child.value < nodeWithParent.parent.value) {
            if (nodeWithParent.child.left) {
                nodeWithParent.parent.left = nodeWithParent.child.left;
            }
            else {
                nodeWithParent.parent.left = null;
            }
        }
    }
}


let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);

//      10
//     5   13
//   2  7 11  16

//bst.bfs();
//bst.preorder();
//bst.postorder();
//bst.inorder();

//bst.remove(13);
//bst.bfs();



