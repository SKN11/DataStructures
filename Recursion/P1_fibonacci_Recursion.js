function fib(n){        //o(2^n)   very bad

    if(n<=2)return 1;
  
    return fib(n-1)+fib(n-2);
    
  }
  
  //fib(35);
  
  
  
  //Using Dynamic Programming    //O(n)
  function fibonacci(n,memo=[])
  {
    if(memo[n]!==undefined) return memo[n];
  
    if(n<=2) return 1;
  
    let res = fibonacci(n-1,memo)+fibonacci(n-2,memo);
    memo[n]=res;
  
    return res;
  }
  
  
  fibonacci(5);
  
  
  
  //without Base Case
  function fibonacciWBC(n,memo=[undefined,1,1])
  {
    if(memo[n]!==undefined) return memo[n];
  
    //if(n<=2) return 1;
  
    let res = fibonacci(n-1,memo)+fibonacci(n-2,memo);
    memo[n]=res;
  
    return res;
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