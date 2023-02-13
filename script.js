let a="";
function addNote(){
    let title=document.getElementById("input1").value;
    let desc=document.getElementById("input3").value;
    a=a+"<div  class='sty' >Title:"+title+"<br>Description:"+desc+"<br><input type='button' value='Delete' onclick='DelNote(id)'></div>";
    document.getElementById("res").innerHTML=a;
}