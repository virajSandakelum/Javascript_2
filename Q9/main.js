const subject = document.getElementById('subject');
const marks = document.getElementById('marks');
const btn = document.getElementById('clickbtn');
const resultMsg = document.getElementById('resultMsg');


btn.addEventListener('click', function(){
    if(subject.value == '' || marks.value == ''){
        resultMsg.innerHTML = 'Please fill all the fields';
    }else{
        resultMsg.innerHTML = 'Your result is ' + (marks.value/subject.value)*100 + '%';
    }

    if(marks.value >= 75 && marks.value <= 100){
        resultMsg.innerHTML = 'Your result is A';
    }
    else if(marks.value >= 65 && marks.value <= 74){
        resultMsg.innerHTML = 'Your result is B';
    }
    else if(marks.value >= 50 && marks.value <= 64){
        resultMsg.innerHTML = 'Your result is C';
    }
    else if(marks.value >= 0 && marks.value <= 49){
        resultMsg.innerHTML = 'You have to work hard for '+subject.value+' subject...';
    }
    else{
        resultMsg.innerHTML = 'Please enter valid marks';
    }
});

