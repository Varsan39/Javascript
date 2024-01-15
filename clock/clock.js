let ampm=document.getElementById('ampm')
var month=["January","February","March","April","June","July","August","September","October","November","December"]
var days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
function displaytime(){
    let time=new Date()
    let hr=time.getHours()
    let min=time.getMinutes()
    let sec=time.getSeconds()
    if(hr>12)
    {
    hr=hr-12
    ampm.innerHTML='PM'
    }
    document.getElementById('date').innerHTML=(days[time.getDay()]+ " " + time.getDate()+ " "+ month[time.getMonth()]+ " " +
    time.getFullYear());
    document.getElementById('hours').innerHTML=addzero(hr);
    document.getElementById('mins').innerHTML=addzero(min);
    document.getElementById('sec').innerHTML=addzero(sec);
}
function addzero(num)
{
    return num<10?"0"+num:num
}

setInterval(displaytime,100)