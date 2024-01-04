function display(x){
    if(document.getElementById("display").value==0){
        document.getElementById("display").value ="";
        document.getElementById("display").value +=x;
    }else{
        document.getElementById("display").value +=x;

}
    
}
let isOpenParenthesis = true;

function toggleParenthesis() {
    if (isOpenParenthesis) {
        display('(');
    } else {
        display(')');
    }
    isOpenParenthesis = !isOpenParenthesis;
}

function Clear(){
    document.getElementById("display").value="0";
}
function calculate(){
    try{
        document.getElementById("display").value=eval(document.getElementById("display").value);
        // document.getElementById("display").value=Tofixed(3);
    }
    catch(err){
        alert("Invalid");
    }
}
function del(){
    
    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
    if(document.getElementById("display").value==''){
        document.getElementById("display").value=0;
    }
}