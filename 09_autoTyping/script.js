let arr = ['Developer', 'Designer', 'writer'];
let title = document.querySelector('.title');
// let str = '';
let random = Math.floor((Math.random() * arr.length));
let previousRandom = random;
let index = 0;
let isWriting = true;//true means muje write karna he
let word = arr[random];

setInterval(() => {
    if (isWriting) {
        if (index === word.length) {
            // title.innerHTML = str;
            isWriting = false;
            // str = '';
        } else {
            // str += word.charAt(index);
            index++;
            title.innerHTML = word.slice(0, index);


        }
    }
    else {
        if (index === 0) {
            do {
                random = Math.floor((Math.random() * arr.length));
            } while (previousRandom === random);
            previousRandom = random;
            word = arr[random];
            index = 0;
            isWriting = true;

        } else {
            title.innerHTML = word.slice(0, index);
            index--;
        }

    }

}, 300);