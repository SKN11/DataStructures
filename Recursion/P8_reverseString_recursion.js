function reverse(str){
  
     if(str.length===0) return ""; //base case

     return  reverse(str.slice(1)) + str[0];
  }
  
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
 //reverse('reemas si doog yob');
  