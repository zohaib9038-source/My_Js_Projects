let taskContainer = document.querySelector('.taskContainer')
let taskBar = document.querySelector('.inputFiled input');
let taskBtn = document.querySelector('.inputFiled button')
let emptyTask = document.querySelector('.Error');
let userTask = localStorage.getItem('userTask') ? JSON.parse(localStorage.getItem('userTask')) : [];
let chec=0;
function GenerateTask() {
    console.log(userTask)
    let content = '';
    if (userTask.length > 0) {
        userTask.forEach((ele, index) => {
            console.log(ele.text);
            content += `
           <div class="task" data-id=${index}>
                <p class="${ele.completion ? 'line' : ''}">${ele.text}</p>
                <div class="Action">
                    <button><span data-action="check" class="material-symbols-outlined">check</span>
                    </button>
                    <button>
                        <span data-action="delete" class="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
            
            `;
        });
        taskContainer.innerHTML = content;
         chec = document.querySelectorAll('.taskContainer .task');
        console.log(chec)
    } else {
        taskContainer.innerHTML = '';
    }

}

taskBar.addEventListener('change', (e) => {
    if ((taskBar.value).trim('') == '') {
        emptyTask.innerText = 'Enter task'
    } else {
        console.log(taskBar.value);
        // userTask.push(taskBar.value);
        userTask.push({
            text: taskBar.value,
            completion: false
        });
        console.log(userTask);
        localStorage.setItem('userTask', JSON.stringify(userTask));
        GenerateTask();
    }
    taskBar.value = ''

});
taskBtn.addEventListener('click', (e) => {
    //check if input already empty
    if ((taskBar.value).trim('') == '') {
        timerId = setTimeout(() => {
            emptyTask.innerText = 'please enter task';
        }, 1000);

    } else {
        console.log('else part', taskBar.value)
        emptyTask.innerText = ' ';
    }
    console.log(localStorage.getItem('userTask'));


});

function OnDelete(id) {
    userTask.forEach((ele, index) => {
        if (id == index) {
            userTask.splice(id, 1);
            localStorage.setItem('userTask', JSON.stringify(userTask));
            GenerateTask();
        }
    });
}



function Completed(id) {
    let targetId = id.dataset.id;
    userTask.forEach((elem, ind) => {
        if (ind == targetId) {
            elem.completion = !elem.completion;
            localStorage.setItem('userTask', JSON.stringify(userTask));
            GenerateTask();
        }

    });
}




taskContainer.addEventListener('click', (e) => {
    if (e.target.dataset.action == 'check') {
        let parent_id = e.target.parentElement.closest('.task');
        Completed(parent_id);


    } else if (e.target.dataset.action == 'delete') {
        console.log('close');
        let parent_id = e.target.parentElement.closest('.task').dataset.id;
        OnDelete(+parent_id);
    }

});
//Iffe function

(function Onload(){
 GenerateTask();   
}())



