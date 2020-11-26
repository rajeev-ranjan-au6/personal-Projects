setInterval(function () {
    var date = new Date;
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();
    var today;
    if (hr > 11) {
        today = "PM";
    } else {
        today = "AM";
    }
//    sec
    if(sec<10){
        sec="0"+sec;
    }
//    hour
    if(hr<10){
        hr="0"+hr;
    }
//    minutes
    if(min<10){
        min="0"+min;
    }
    switch(day){
        case 0:
            day="Sunday";
            break;
            case 1:
            day="Monday";
            break;
            case 2:
            day="Tuesday";
            break;
            case 3:
            day="Wednesday";
            break;
            case 4:
            day="Thursday";
            break;
            case 5:
            day="Friday";
            break;
            case 6:
            day="Saturday";
            break;
        default:
            day="Syntex Error";
    }
document.querySelector("#newday").innerText=day;
document.querySelector("#newhr").innerText=hr;
document.querySelector("#newmin").innerText=min;
document.querySelector("#newsec").innerText=sec;
document.querySelector("#newtoday").innerText=today;
});
