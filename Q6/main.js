const number = document.getElementById('number');   
const button = document.getElementById('clickbtn');



button.addEventListener("click",function()
{
    alert("Root of the number is: " + number.value*number.value);
})