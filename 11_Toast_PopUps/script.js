// Script Working

let showMsg = document.querySelector('.Show_msg');
let btn = document.querySelector('.button button');

let dropDown = document.querySelector('.success_Warning select');
let topBottomDropdown = document.querySelector('.top_Bottom select');
let leftRightDropdown = document.querySelector('.left_Right select');

let range = document.querySelector('.range input');
let rangeValue = document.querySelector('.range span');


// Update range value
range.addEventListener('input', () => {

    if (range.value < 3) {
        range.value = 3;
    } else {
        rangeValue.textContent = range.value;
    }


});


// Close Toast Function
function closeToast() {
    showMsg.style.opacity = '0';
}


// Toast Data
const toastData = {
    Success: {
        color: 'green',
        icon: 'check'
    },

    Warning: {
        color: 'orange',
        icon: 'warning'
    },

    Error: {
        color: 'red',
        icon: 'error'
    }
};


// Show Toast
btn.addEventListener('click', () => {

    let userSelection = dropDown.value;
    let topOrBottom = topBottomDropdown.value.toLowerCase();
    let leftRight = leftRightDropdown.value.toLowerCase();

    // Get current toast info
    let currentToast = toastData[userSelection];

    // Toast HTML
    showMsg.innerHTML = `
        <span class="material-symbols-outlined">
            ${currentToast.icon}
        </span>

        <span>
            This is a toast message
        </span>

        <span class="material-symbols-outlined closeBtn">
            close_small
        </span>
    `;

    // Dynamic Styles
    showMsg.style.cssText = `
        opacity: 1;
        background-color: ${currentToast.color};
        position: fixed;
        padding: 0.5rem 0.8rem;
        border-radius: 6px;
        color: white;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        transition: all 0.4s ease;

        ${topOrBottom}: 10px;
        ${leftRight}: 10px;
    `;

    // Close button event
    let closeBtn = document.querySelector('.closeBtn');

    closeBtn.addEventListener('click', closeToast);

    // Auto Hide Toast
    setTimeout(() => {
        closeToast();
    }, rangeValue.textContent * 1000);

});