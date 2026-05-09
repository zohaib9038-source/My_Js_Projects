let input = document.querySelector('input');

let firstFm = '';
input.addEventListener('input', () => {
    let length = input.value.length;
    // if (input.value.length > 3 && input.value.length <= 4) {
    //     let specificFirstFormate = input.value.slice(0, 3);
    //     firstFm = '+' + '(' + specificFirstFormate + ')' + '-';
    //     console.log(firstFm)
    // }

    // if (length > 4) {
    //     let SecondFormate = input.value.slice(3, length);
    //     let finalFormate = firstFm + SecondFormate;
    //     console.log(finalFormate)
    //     input.value = finalFormate;
    // }
if(input.value.length===4){
    let substr=input.value.slice(0,3);
    input.value=`+(${substr}) - ${input.value[(input.value).length-1]}`;
}


});