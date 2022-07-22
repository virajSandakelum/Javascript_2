const name = document.getElementById("name");
const hometown = document.getElementById("hometown");
const button = document.getElementById("clickbtn");


button.addEventListener("click",function(){
    alert("Name:"+name.value+"\n"+"Hometown:"+hometown.value);
})
