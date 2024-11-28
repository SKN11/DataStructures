//https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150


var isPalindrome = function (s) {

  let str = s.replace(/[^a-zA-Z0-9]/g, ''); //remove numeric and symbols

  return pallindrome(str.toLowerCase());

};


function pallindrome(s) {

  if (str.length <= 1) return true; //base condition

  if (str.charAt(0) === str.charAt(str.length - 1)) 
    return pallindrome(str.slice(1, str.length - 1));  //check again for pallindrome
  else 
    return false;
}


isPalindrome('nitin');  