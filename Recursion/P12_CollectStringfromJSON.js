var json = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


var res=[];
function collectStrings (obj1) {

  for(var key in obj1){
    if( typeof obj1[key] == 'string' ) 
      res.push(obj1[key]);
    else if (typeof obj1[key] === 'object'){
         collectStrings(obj1[key]);
        }
 
}
return res;
} ;





collectStrings(json);