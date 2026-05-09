
let finalAns = '';
let answerOption = document.querySelector('.answerOption');
console.log(answerOption)
let next = document.querySelector('a');
let curIndex = Number(localStorage.getItem('indexNo'))|| 0;
let question = document.querySelector('.question h3');
let Counting = document.querySelector('.QuestionCounting');
let showTime = document.querySelector('.contentContainer .Showtime');
let count = 30;
let userScore=Number(localStorage.getItem('score')) || 0;
let audio=document.querySelector('audio');
let speaker=document.querySelector('.volume img');
let timer;
localStorage.setItem('score', 0);
localStorage.setItem('indexNo', 0);
let body=document.querySelector('body');
function startTimer() {
    if (timer) clearInterval(timer);

    timer = setInterval(() => {
         let percentage = (count / 30) * 100;
         console.log(percentage)

         if(percentage<=100 && percentage>50){
            body.style.backgroundColor='#CCE2C2';
         }else if(percentage<=50 && percentage>=15){
           body.style.backgroundColor='#E4E5C7';
           next.style.color='#C58800';
         }else if(percentage<=15){
            body.style.backgroundColor='#DBADAD';
            next.style.color='#C50000';
         }

        if (count <= 0) {
            clearInterval(timer);

            if (curIndex + 1 >= quizData.length) {
                window.location.href = 'result.html';
            } else {
                curIndex++;
                localStorage.setItem('indexNo', curIndex);
                onloadQuestion();
            }

        } else {
            console.log(showTime)
            showTime.innerText = count;
            count--;
        }

    }, 1000);
}
startTimer();

// let timerId = setInterval(() => {
//     if (count < 0) {
//         curIndex++;
//         clearInterval(timerId);
//         onload();

//     } else {
//         showTime.innerText = count;
//         count--;
//     }

// }, 1000);

function ChangeCounting() {
    if (curIndex + 1 <= quizData.length) {
        Counting.innerText = `${curIndex + 1}/${quizData.length}`;

    }

}
ChangeCounting();

function ShowQuestion(questionNo) {
     if (curIndex >= quizData.length) {
        window.location.href = 'result.html';
        return;
    }else{
        question.innerText = quizData[curIndex].question;
    console.log('next question')
     
    }
    
    
}

function returnAns(index) {
     if (index >= quizData.length) {
        return [];
    }
    return quizData[index].answers;
}

ShowQuestion(curIndex);

function ShowOption() {
    finalAns = ''
    finalAns += `
${returnAns(curIndex).map((value, i) => {
        return `
        <div class="answer1" index='${i}'>
            <h4>${value.ans}</h4>
            <span></span>
            <div>
                <img src='' />
            </div>
        </div>
        
    `
    }).join('')}
`;
    answerOption.innerHTML = finalAns;
}
ShowOption();

let optionAns = document.querySelectorAll('.answer1');
// console.log(optionAns)
answerOption.addEventListener('click', (e) => {
    let answerDiv = e.target.closest('.answer1');

    if (answerDiv) {
        let userChoise = answerDiv.firstElementChild.innerText;
        let corOption;
        let correctAns = returnAns(curIndex).find((opt) => {
            if (opt.istrue && opt.ans) {
                corOption = opt.ans;
            }
            if (opt.istrue && opt.ans == userChoise) {
                userScore++;
                localStorage.setItem('score',userScore);
                return true;

            }

        });
        if (correctAns) {
            // console.log('correct');
            answerDiv.classList.add('forCorrectParent');
            answerDiv.lastElementChild.classList.add('correctChoice');
            answerDiv.lastElementChild.lastElementChild.src = './images/tick.png';

        } else {
            answerDiv.classList.add('forCrossParent');
            answerDiv.lastElementChild.classList.add('falseChoice');
            answerDiv.lastElementChild.lastElementChild.src = './images/cross.png';
            // console.log(answerDiv.querySelector('span').innerText = 'You chose');
        }


        optionAns.forEach((div, i) => {
            if (div.querySelector('h4').innerText == corOption) {
                div.classList.add('forCorrectParent');
                div.lastElementChild.classList.add('correctChoice');
                div.lastElementChild.lastElementChild.src = './images/tick.png';
            }
        });


    }

});

function onloadQuestion() {
    count = 30;
    ChangeCounting()
    ShowQuestion(curIndex);
    ShowOption();
    optionAns = document.querySelectorAll('.answer1');
    startTimer()
}
next.addEventListener('click', () => {
    if (quizData.length > curIndex+1) {
        curIndex++;
        localStorage.setItem('indexNo',curIndex);
         console.log("CurIndex "+curIndex);
        next.setAttribute('index', curIndex);
        onloadQuestion();
    }else{
        window.location.href = 'result.html';
    }

});

// speaker click logic

speaker.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        speaker.src='./images/volume-up.png'
    } else {
        audio.pause();
        speaker.src="https://static.thenounproject.com/png/1331692-200.png";
    }

});


//FOR next page reload





