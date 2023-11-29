function clearscreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value +=value;
}
function calculate(){
    var p=document.getElementById("result").value;
    var q=eva(p);
    document.getElementById("result").value=q;
}
