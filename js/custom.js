function jfun2()
{
    var name=frm2.txt1.value;
    if(name=="")
    {
        alert("please fill the username");
        frm2.txt1.focus();
    }
}
function jfun3()
{
    var name=frm2.txt1.value;
    var pas=frm2.pass1.value;
    if(name!="" && pas!="")
    {
        
        window.open("index1.html")
    }
    else if(name=="")
    {
        alert("please enter your username");
        frm2.txt1.focus();
    }
    else
    {
        alert("please enter password");
        frm2.pass1.focus();
    }

}