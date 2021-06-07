//to check two number 181,811 have same number of integers or not
//It can be done using Frequency Pattern 

function sameFrequency(a,b){
    //let temp = {};
    a = a.toString();
    b = b.toString();
    if(a.length !== b.length)
    return false;
    
     
      let f={};
      for(let i=0;i<a.length;i++)
      {
          let dig = a.charAt(i);
          f[dig] ? f[dig]++ : f[dig] = 1
      }
    
        for(let i=0;i<b.length;i++)
        {
            let temp = b.charAt(i);
            if(!f[temp])
            return false
            else
            f[temp] -= 1;
        }
    return true;
    }
    
    
    var res1 = sameFrequency(181,811);
    
    console.log(res1);