// Tokyo +7
// New York  -6
// Türkiye +1
// London -1




const hour=document.querySelector("#hour");
const minutes=document.querySelector("#minute");
const seconds=document.querySelector("#second");

const hour_ny=document.querySelector("#hour_ny");
const minutes_ny=document.querySelector("#minute_ny");
const time_const_ny=document.querySelector("#time_const_ny");

const hour_tr=document.querySelector("#hour_tr");
const minutes_tr=document.querySelector("#minute_tr");
const time_const_tr=document.querySelector("#time_const_tr");

const hour_tk=document.querySelector("#hour_tk");
const minutes_tk=document.querySelector("#minute_tk");
const time_const_tk=document.querySelector("#time_const_tk");

const hour_lnd=document.querySelector("#hour_lnd");
const minutes_lnd=document.querySelector("#minute_lnd");
const time_const_lnd=document.querySelector("#time_const_lnd");


function clock() {
    let h_real=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    if (h_real > 12) { h= h_real-12} else { h = h_real}

    if (h_real<12) { var h_tr = h+1} else if (h_real==23) { var h_tk = 0} else { var h_tr = h_real-11} // Türkiye
    if (h_real<6) { var h_tk = h+7} else if (h_real<17) { var h_tk = h-5} else { var h_tk = h_real-17} // Tokyo
    if (h_real<6) { var h_ny = h+6} else if (h_real<19) { var h_ny = h-6} else { var h_ny = h_real-18} // New York
    if (h_real==0) { var h_lnd = 11} else if (h_real<14) { var h_lnd = h-1} else { var h_lnd = h_real-13} // London

    if (h<10) { hour.innerHTML="0"+h+":"; } else { hour.innerHTML=h+":"; }
    if (m<10) { minutes.innerHTML="0"+m+":"; } else { minutes.innerHTML=m+":"; }
    if (s<10) { seconds.innerHTML="0"+s; } else { seconds.innerHTML=s; }
    if (h_real<13) { time_const.innerHTML="AM"; } else { time_const.innerHTML="PM"; }

    if (h_ny<10) { hour_ny.innerHTML="0"+h_ny+":"; } else { hour_ny.innerHTML=h_ny+":"; }
    if (m<10) { minutes_ny.innerHTML="0"+m; } else { minutes_ny.innerHTML=m; }

    if (h_tr<10) { hour_tr.innerHTML="0"+h_tr+":"; } else { hour_tr.innerHTML=h_tr+":"; }
    if (m<10) { minutes_tr.innerHTML="0"+m; } else { minutes_tr.innerHTML=m; }

    if (h_tk<10) { hour_tk.innerHTML="0"+h_tk+":"; } else { hour_tk.innerHTML=h_tk+":"; }
    if (m<10) { minutes_tk.innerHTML="0"+m; } else { minutes_tk.innerHTML=m; }

    if (h_lnd<10) { hour_lnd.innerHTML="0"+h_lnd+":"; } else { hour_lnd.innerHTML=h_lnd+":"; }
    if (m<10) { minutes_lnd.innerHTML="0"+m; } else { minutes_lnd.innerHTML=m; }
    
}

const getClock = setInterval(clock, 1000)