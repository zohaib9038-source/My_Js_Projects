//Meme Api link:  https://meme-api.com/gimme 
let Meme_Generator = document.querySelector('.Meme_Generator');
let title = document.querySelector('.Meme_Generator h2');
let img = document.querySelector('.Meme_Generator img')
let author = document.querySelector('.Meme_Generator .author p');
let button = document.querySelector('button');
author.innerHTML = ''

async function getData() {
    const response = await fetch(' https://meme-api.com/gimme ');
    const data = await response.json();
    console.log(data)
    title.innerHTML = data.title;
    img.src = data.preview[3];
    author.innerHTML = 'Meme by: ' + data.author;
    // console.log(data.title)
    // console.log(data.author);
    // console.log(data.preview[2])
}

button.addEventListener('click', () => {
    getData()
});

