var isPalindrome = function(s) {
    s = s.toLowerCase().trim();
    if(s.length===0) return true;
    let end=s.length-1,start=0;
    let res=false;
    while(start<=end){
        if(s.charCodeAt(start)<97 || s.charCodeAt(start)>122)
        {
            start++;
            continue;
        }
        if(s.charCodeAt(end)<97 || s.charCodeAt(end)>122)
        {
            end--;
            continue;
        }
        
        if(s[start] === s[end])
        {
            start++;end--;
            res=true;
        }
        else
            return false;
    }
    return res;
    
};

/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

*/