var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();

var PMorAM = function()
{
    if (hour > 12)
    {
        return "PM";
    }
    else
    {
        return "AM";
    }   
}


var hour = (hour > 12) ? hour - 12 : hour;

const text = document.getElementById("current-time");
text.innerHTML  = "Now the time is "+hour + ":" + minute + " " + PMorAM();


var remininHour = 24 - today.getHours();
var remininMinute = 60 - today.getMinutes();


const button = document.getElementById("remainTime");
button.innerHTML = "Remains "+remininHour+" hours and "+remininMinute+" minutes";