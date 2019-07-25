function add(x,y)
        {
            var r=x+y;
            return r;
        }
        function sub(x,y)
        {
            var r=x-y;
            return r;
        }
        function mul(x,y)
        {
            var r=x*y;
            return r;
        }
        function div(x,y)
        {
            var r=x/y;
            return r;
        }
        function operations()
        {
                var n1=document.getElementById("num1").value;
                var n2=document.getElementById("num2").value;
                var no1=parseInt(n1);
                var no2=parseInt(n2);
                var result;
                var opert=document.getElementById("op").value;
                if(opert=='+'){
                    result=add(no1,no2);
                }
                else if(opert=='-'){
                  
                      result=sub(no1,no2);

                }
                else if(opert=='*')
                {
                    result=mul(no1,no2);
                }
                else if(opert=='/' && no2==0)
                {
                    alert("Operation Cannot be performed");
                }
                else if(opert=='/'){
                    result=div(no1,no2);

                }
                //console.log(result);
                
                document.getElementById("results").innerHTML=result;
        }