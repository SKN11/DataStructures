/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
   
    let str = s.replace(/[^a-zA-Z0-9]/g,'');
    return pallindrome(str.toLowerCase());
    
};


function pallindrome(s){
        
        let res =false;
        
        if(s.length===1 || s.length===0 ) 
        {
            res =true;
            return res;
        }
      
        if(s.charAt(0)===s.charAt(s.length-1)) 
            res= true;
        else 
            res=false;
        
        if(res===false)
            return res;

        res = pallindrome(s.substring(1,s.length-1));
        return res;
    }
    

isPalindrome('nitin');  