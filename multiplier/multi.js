"use strict";

function genTable(){
    var num = document.getElementById("inputnumber").value ;
//    console.log(num);
    var i;
    for (i=1; i <=5 ; i++) {
        console.log(num, "*",  i,"=", i*num) ;
    }
    
}