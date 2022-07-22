const name = document.getElementById('name');
const birthday = document.getElementById('birthday');
const clickbtn = document.getElementById('clickbtn');

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day = today.getDate();

var age = function()
{
    var birth = birthday.value;
    var birth_year = birth.substring(0,4);
    var birth_month = birth.substring(5,7);
    var birth_day = birth.substring(8,10);
    var age = year - birth_year;
    if(birth_month > month)
    {
        age--;
    }
    else if(birth_month == month)
    {
        if(birth_day > day)
        {
            age--;
        }
    }
    return age;
}

clickbtn.addEventListener('click', function()
{
    alert(age() + " years old.");
});


