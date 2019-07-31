function add(a,b,callback)  
{
    var c=a+b;
    callback(c);                //display is the function called here
    //var r=String(c);
}

/*function display(res)
{
    document.getElementById("result").innerHTML=res;
}*/

//add(10,20,display);
add(30,20,(res)=>{
    document.getElementById("result").innerHTML=res;
})