function constructNote(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    //console.log(str1);
    //console.log(str2);
    let s={};
    for(let i=0;i<str2.length;i++)
    {
        let ch = str2.charAt(i);
        s[ch] ? ++s[ch]:s[ch]=1;
    }
    console.log(s);
    let res=false;
    for(let i=0;i<str1.length;i++)
    {
        let ch = str1.charAt(i);
        if(s[ch])
        {
         res=true;
         --s[ch];
        }else{
            res=false;
        }
        
        
    }
    return res;
    
  }
  
  
  constructNote('aa','abc');