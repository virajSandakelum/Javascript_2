const width = document.getElementById('width');
const height = document.getElementById('height');
const clickbtn = document.getElementById('clickbtn'); 
const areaDisplay = document.getElementById('areaDisplay');

clickbtn.addEventListener("click",function(){
    let area = width.value * height.value;
    areaDisplay.innerHTML = "Area of the rectangle is " + area + "cm2";     
})