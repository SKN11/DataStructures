function fib(n){        //o(2^n)   very bad

    if(n<=2)return 1;
  
    return fib(n-1)+fib(n-2);
    
  }
  //fib(100); hangs ur computer
  
  
  
  //Using Dynamic Programming- Bottom Up Approach    
  function fibonacci(n,memo=[])   //Time-O(n) Space- May get space error for large number ex: fibonacci(1000) results in stack overflow error
  {
    if(memo[n]!==undefined) return memo[n];
  
    if(n<=2) return 1;
  
    let res = fibonacci(n-1,memo)+fibonacci(n-2,memo);
    memo[n]=res;
  
    return res;
  }
  
  
  fibonacci(5);
  
  
  
  function fibonacciWBC(n,memo=[undefined,1,1]) //if(n<=2) return 1;  //without Base Case - by putting base case values in memo array
  {
    if(memo[n]!==undefined) return memo[n];

    let res = fibonacci(n-1,memo)+fibonacci(n-2,memo);
    memo[n]=res;
  
    return res;
  }
  
  
  
  //Using Dynamic Programming- Top-Bottom/Tabulation Approach
  function fibonacciByTabulation(n){        //Time-O(n) Space-Will not get space error for large number ex: fibonacci(1000)

    if(n<=2)return 1;
    var fibNums =[0,1,1];
    for(let i=3;i<=n;i++){
      fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n]; 
  }
  
  
  
  
  
  
  /*
  
  function fib(n){
    // add whatever parameters you deem necessary - good luck!  
  
  //if(n<=2)return 1;
  if(n<=2){
  //console.log(n);
  return 1;
  }
  //console.log(n)
  return fib(n-1)+fib(n-2);
    
  }
  
  fib(5);
  
  */