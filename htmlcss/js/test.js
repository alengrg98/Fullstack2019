var x=10;           //var creates global variables
if(x<15)
{
    let x=20;               //let creates a local variable
    x=x+1;
    console.log(x);
}
console.log(x);