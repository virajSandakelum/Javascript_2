const weedingPackage = document.getElementById("weedingPackage");
const birthdayPackage = document.getElementById("birthdayPackage");
const normalFunctionPackage = document.getElementById("normalFunctionPackage");
const dayoutPackage = document.getElementById("dayoutPackage");
let submit = document.getElementById('submit');



weedingPackage.addEventListener('click',function()
{
    if(weedingPackage.checked == true)
    {
        birthdayPackage.disabled = true;
        normalFunctionPackage.disabled = true;
        dayoutPackage.disabled = true;
    }
    else
    {
        birthdayPackage.disabled = false;
        normalFunctionPackage.disabled = false;
        dayoutPackage.disabled = false;
    }

})

birthdayPackage.addEventListener('click',function()
{
    if(birthdayPackage.checked == true)
    {
        weedingPackage.disabled = true;
        normalFunctionPackage.disabled = true;
        dayoutPackage.disabled = true;
    }
    else
    {
        weedingPackage.disabled = false;
        normalFunctionPackage.disabled = false;
        dayoutPackage.disabled = false;
    }
})

normalFunctionPackage.addEventListener('click',function()
{
    if(normalFunctionPackage.checked == true)
    {
        weedingPackage.disabled = true;
        birthdayPackage.disabled = true;
        dayoutPackage.disabled = true;
    }
    else
    {
        weedingPackage.disabled = false;
        birthdayPackage.disabled = false;
        dayoutPackage.disabled = false;
    }
})

dayoutPackage.addEventListener('click',function()
{
    if(dayoutPackage.checked == true)
    {
        weedingPackage.disabled = true;
        birthdayPackage.disabled = true;
        normalFunctionPackage.disabled = true;
    }
    else
    {
        weedingPackage.disabled = false;
        birthdayPackage.disabled = false;
        normalFunctionPackage.disabled = false;
    }
})






















