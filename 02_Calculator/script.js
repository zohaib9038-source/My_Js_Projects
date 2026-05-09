let calculator = document.querySelector('.calculator');
let input = document.querySelector('.input');

let res = '';

calculator.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    let userInput = e.target.innerText;
    if (['+', '-', '*', '/'].includes(userInput)) {
      input.innerText = input.innerText + userInput;
      console.log(input.innerText);
    } else if (userInput == '=') {
      let result = input.innerText;
      input.innerText = eval(result);
      console.log(eval(curText));
    } else if (userInput == 'c') {
      input.innerHTML = '';
    } else {
      // res=res+userInput;
      input.innerText = input.innerText + userInput;
      console.log(input.innerText);
    }
  }
});



