var countPrimes = function(n) {

    if(n<=1) return 0; 
       
       var a = [];
       for (var i = 0; i < n; i++) {
           a.push(true);
       }
       
       
       a[0] = false; a[1]=false;
       let count=1;
       
       for(let i=2;i<Math.sqrt(n);i++){
           if(a[i]){
               for(let j=i*i ;j<n;j+=i){
                   if(a[j]) count++;
                   a[j] = false;
               }
           }
       }
   
       return n-count-1;
   
   }
   
   
   const isPrime = (n)=> {
       for(let i=2;i<n/2;i++){
           if(n%i==0) return false;
       }
       return true;
   }
   
   //check any number divisible by for half of the number. If not that means it is a prime
   