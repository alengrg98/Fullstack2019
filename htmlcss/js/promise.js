var mypromise=new Promise((resolve,reject)=>{

    var mygrade='A+';
    if(mygrade=='A+')
    {
        resolve();
    }
    else
    {
        reject();
    }

});

mypromise.then(()=>{
    //console.log("Promise resolved");
    document.getElementById("result").innerHTML="Promise resolved";
}).catch(()=>{
    //console.log("Promise Rejected ");
    document.getElementById("result").innerHTML="Promise Rejected ";
})