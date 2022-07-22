const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const total = document.getElementById("total");



amount.addEventListener("mouseout",function()
{
    percentage.innerHTML = "20% of value:"+amount.value*0.2;
    total.innerHTML = "Total:"+amount.value+"+"+amount.value*0.2+"="+Number(amount.value)+Number(amount.value*0.2);
})