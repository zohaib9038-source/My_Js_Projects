const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressLabel = document.querySelector('.progress-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value');
let img=document.querySelector('.subtitle img');

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {};
let angle=0;
const AllGoalsQouts=[
'Raise the bar by completing your goals!',
'You are close to your goals',
'Whoo, you completed your goals'
];
setInterval(() => {
  angle+=1;
  img.style.transform=`rotate(${angle}deg)`
}, 10);

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
)

progressValue.style.width = `${(completedGoalsCount.length / inputFields.length) * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount.length}/${inputFields.length} completed`;
function quotes(){
if(completedGoalsCount.length<1){
progressLabel.innerText=AllGoalsQouts[completedGoalsCount.length];
}else{
progressLabel.innerText=AllGoalsQouts[completedGoalsCount.length-1];
}
}


checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputFields].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle('completed')
      const inputId = checkbox.nextElementSibling.id
      allGoals[inputId].completed = !allGoals[inputId].completed
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      );
      
      progressValue.style.width = `${(completedGoalsCount.length / inputFields.length) * 100}%`
      progressValue.firstElementChild.innerText = `${completedGoalsCount.length}/${inputFields.length} completed`;
      localStorage.setItem('allGoals', JSON.stringify(allGoals));
      quotes();
    } else {
      progressBar.classList.add('show-error')
    }
  })
})


 inputFields.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add('completed')
    }
  }

  input.addEventListener('focus', () => {
    progressBar.classList.remove('show-error')
  })

 input.addEventListener('input', (e) => {
      if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name
      return
    }
    if (allGoals[input.id]) {
      allGoals[input.id].name = input.value;
    } else {
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      }
    }

    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
 })