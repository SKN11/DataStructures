class Graph {

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];

    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ele => ele !== vertex2);

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ele => ele !== vertex1);   
    }

    removeVertex(vertex) {

        this.adjacencyList[vertex].map((ele) => {
            this.removeEdge(ele, vertex);
        });

        delete this.adjacencyList[vertex];  // javascript delete() :  remove key from map/object

    }

    depthFirstRecursive(val) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfsRecursive(vertex) {
            if (!vertex) return null;

            visited[vertex] = true;    //storing visited vertex info
            result.push(vertex);
            adjacencyList[vertex].map((ele) => {
                if (!visited[ele]) dfsRecursive(ele);
            })

        }
        dfsRecursive(val);
        return result;
    }

    depthFirstIterative(vertex){
        let result = [];
        let visited={};
        let stack = [vertex];
        let currentVertex;

        visited[vertex] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
          
                
                this.adjacencyList[currentVertex].map((neighbor) => {
                      if(!visited[neighbor]){
                          visited[neighbor] = true;
                          stack.push(neighbor);
                      }
                });
    
            }
        return result;
    }

    breadthFirstSearch(val) {    //['A', 'B', 'C', 'D', 'E', 'F']
        if (!val) return null;

        const queue = [val];
        const visited = {};
        const result = [];
        let vertex;

        visited[val] = true; //mark it as visited
        while (queue.length) {
            vertex = queue.shift();   //popping the first added element
            result.push(vertex);
            this.adjacencyList[vertex].map((ele) => {    //this.adjacencyList[vertex].slice().reverse().map((ele)=>{  //for reverse
                if (!visited[ele]) {
                    visited[ele] = true;
                    queue.push(ele);
                }
            });
        }
        return result;

    }

}

//let graph = new Graph();
// graph.addVertex('Tokyo');
// graph.addVertex('Dallas');
// graph.addVertex('Aspen');

// graph.addEdge('Tokyo','Dallas');
// graph.addEdge('Dallas','Aspen');



let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
//g.depthFirstRecursive("A");    //['A', 'B', 'D', 'E', 'C', 'F']

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F


console.log(g);

// {
//     'A': ['B','C'],
//     'B': ['A','D'],
//     'C': ['A','E'],
//     'D': ['B','E','F'],
//     'E': ['C','D','F'],
//     'F': ['D','E'],
// }


