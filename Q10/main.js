const equal = document.getElementById('equal');
const display = document.getElementById('display');

var number = 0;
var number1 = 0;
var number2 = 0;



function numInsert(num)
{

    display.innerHTML += num;
}

function operatorInsert(operator)
{
    display.innerHTML += operator;
}

function clearDisplay()
{
    display.innerHTML = "";
}


equal.addEventListener('click', function()
{
    number = display.textContent;
    for (let i = 0; i < number.length; i++) {

        if(number[i] == '+')
        {
            number1 = number.slice(0,i);
            number2 = number.slice(i+1,number.length);
            display.innerHTML = Number(number1)+Number(number2);
        }
        else if(number[i] == '-')   
        {
            number1 = number.slice(0,i);
            number2 = number.slice(i+1,number.length);
            display.innerHTML = Number(number1)-Number(number2);
        }
        else if(number[i] == '*')
        {
            number1 = number.slice(0,i);
            number2 = number.slice(i+1,number.length);
            display.innerHTML = Number(number1)*Number(number2);
        }
        else if(number[i] == '/')
        {
            number1 = number.slice(0,i);
            number2 = number.slice(i+1,number.length);
            display.innerHTML = Number(number1)/Number(number2);
        }
    }
});



