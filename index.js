var d= document.querySelector('.dat');
var date=document.querySelector('.date')
function run(){
    let date10=new Date();
    let hrs=date10.getHours();
    let min=date10.getMinutes();
    let sec=date10.getSeconds();
    let txt="AM";
   
    if(hrs>12){
        hrs=hrs-12;
        txt="PM";
    }
        else if(hrs==0){
    hrs=12;
    txt="AM";
     }
    hrs=hrs<10?"0"+hrs:hrs;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    
    let datetime=(`${hrs} : ${min} : ${sec} ${txt}`);
   
    d.innerHTML=datetime;
    var date1=new Date();
let datee=date1.getDate();
let mon=date1.getMonth();
let year=date1.getFullYear();
let datees=(`${datee} : ${mon} : ${year}`);
date.innerHTML=datees;
   
}


setInterval(run,1000)












