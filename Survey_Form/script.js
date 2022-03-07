function Counter() {
    var count = 0;
    
    for (i = 0; i < 4; i++) {
        if (document.getElementById("value" + i).value !=='') {
            count = count + 1;
        }
    }
    document.getElementById("showc").innerHTML = count;
}

function checkboxes(){
    var inputElems= document.getElementsByTagName("input");
     var count2=0;
    for(var i=0;i<inputElems.length;i++){
        if(inputElems[i].type=="checkbox" && inputElems[i].checked===true){
            count2++;
        }
    }
    document.getElementById("checkbox").innerHTML = count2;

}


function radio(){
    var inputElement=document.getElementsByTagName("input");
    console.log(inputElement);
    var count3=0;
    for(var i=0;i<inputElement.length;i++){
        if(inputElement[i].checked){
            count3++;
        }
    }
    document.getElementById("radio").innerHTML=count3;
}