$(document).ready(function (){
    function even(x,callback){
        if(x%2==0)
        {
            callback("even");
        }
        else
            callback("odd");
    }
    $('#b1').click(function (){
        var num=$('#num1').val();
        even(num,(res)=>{
            $('#result').text(res);
        })

    })
});