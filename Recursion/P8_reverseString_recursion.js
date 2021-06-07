function reverse(str){
  
    if(str.length===1)
      return str;
  
      return str.charAt(str.length-1)+reverse(str.slice(0,str.length-1));
  }
  
  
  //reverse('reemas si doog yob');
  