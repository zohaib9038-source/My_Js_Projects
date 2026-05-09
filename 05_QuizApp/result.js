let content=document.querySelector('.content');
let message=document.querySelector('.message');
content.style.width=`${(localStorage.getItem('score')/quizData.length)*100}%`;
let correctOutOfTotal=document.querySelector('.correctOutOfTotal h2');

if(localStorage.getItem('score')){
correctOutOfTotal.innerText=localStorage.getItem('score')+'/'+quizData.length;
}else{
    correctOutOfTotal.innerText=0+'/'+quizData.length;
}

console.log(Number(localStorage.getItem('score')));

if(Number(localStorage.getItem('score')) == quizData.length){
   message.innerText = "Perfect Score! ";
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
    
}else if(Number(localStorage.getItem('score')) >= quizData.length/2){
   message.innerText = "Good job! Keep improving ";
}
else{
   message.innerText = "Practice more and try again ";
}

//Retry Logic

let retryBtn=document.querySelector('.retry');
retryBtn.addEventListener('click',(e)=>{
    localStorage.removeItem('score');
    localStorage.removeItem('indexNo');
    window.location.href='quiz.html'
});

