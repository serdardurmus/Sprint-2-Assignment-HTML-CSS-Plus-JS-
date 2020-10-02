const hour=document.querySelector("#hour")
const minutes=document.querySelector("#minute");
const seconds=document.querySelector("#second");

function clock() {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

    hour.innerHTML=h;
    minutes.innerHTML=m;
    if (s<10) {
        seconds.innerHTML="0"+s;
    } else {
        seconds.innerHTML=s;
    }
}

const getClock = setInterval(clock, 1000)