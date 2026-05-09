let tip = document.querySelector('.tip')
let input = document.querySelector('.builder .price');
let generateBill = document.querySelector('.generateBill button');
let allDiv = document.querySelectorAll('.tip .button1stRow button');
let peopleInputElement = document.querySelector('.numberOfPeople input');
let tipAmountCalculation = document.querySelector('.tipAmount span');
let billTipPrice = document.querySelector('.BillPrice .tipAmount span');
let totalPrice = document.querySelector('.BillPrice .total span');
let perPersonBill = document.querySelector('.BillPrice .perPersonBill span');
let resetButton = document.querySelector('.BillPrice .reset button');
let tipAmount = 0;
let noOfPeople = 0;

function IsDisable() {
    generateBill.classList.add('redCursor');
    if (input.value > 0) {
        // generateBill.disabled = false;
        peopleInputElement.disabled = false;
        allDiv.forEach((ele) => {
            ele.style.cursor = 'pointer';
            ele.style.opacity = '1'
        });
    } else {
        generateBill.disabled = true;
        generateBill.style.opacity = '0.5'
        peopleInputElement.disabled = true;
        allDiv.forEach((ele) => {
            ele.style.cursor = 'not-allowed';
            ele.style.opacity = '0.5'
        });

    }
}
IsDisable();

input.addEventListener('input', (e) => {
    IsDisable();

});

peopleInputElement.addEventListener('input', (e) => {
    if (input.value > 0) {
        generateBill.classList.remove('redCursor');
        generateBill.style.opacity = '1'
        generateBill.disabled = false;
        noOfPeople = e.target.value;
    }

});

function CalculateBill(tipAmount, inputValue) {

    billTipPrice.innerText = (tipAmount * (inputValue)) / 100;
    totalPrice.innerText = Number(billTipPrice.innerText) + Number(inputValue);
    perPersonBill.innerText = totalPrice.innerText / noOfPeople;

}

tip.addEventListener('click', (e) => {
    if (e.target.dataset.billcal == 'true') {
        CalculateBill(tipAmount, input.value);
        resetButton.style.color = 'black'
        resetButton.style.backgroundColor = 'white';

    } else if (e.target.tagName == 'BUTTON') {
        tipAmount = e.target.innerText.split('%')[0];

        // console.log(CalculateBill(tipAmount))
    }

});
resetButton.addEventListener('click', () => {
    // BillPrice.innerText='';
    input.value = ''
    peopleInputElement.value = ''
    billTipPrice.innerText = ''
    totalPrice.innerText = ''
    perPersonBill.innerText=''
    console.log('reset button')
});