let input = document.querySelector('.input input');
let capital = document.querySelector('.transform_Output #capitalization');
let LowerCaseWord = document.querySelector('.transform_Output #LowerCaseWord');
let CamelCaseWord = document.querySelector('.transform_Output #CamelCaseWord');
let TrimWord = document.querySelector('.transform_Output #TrimWord');
let snake_case = document.querySelector('.transform_Output #snake_case');
let kabab_case = document.querySelector('.transform_Output #kabab_case');
let pascal_case = document.querySelector('.transform_Output #pascal_case');

function Capital(word) {
    return word.toUpperCase();
}
function lowerCase(word) {
    return word.toLowerCase();
}
function Trim(word) {
    // return (word.trim().split(' ').join(''));
    return (word.replaceAll(' ',''));
}
function capitalizeWord(string){
    return (string.charAt(0).toUpperCase() + string.slice(1));
}
function shortCamel(string) {
    // let stringToArr = string.split(' ');
    // let Completestr='';
    // stringToArr.map((word, i) => {
    //     if (i == 0) {
    //        Completestr+= stringToArr[i].charAt(0).toLowerCase() + stringToArr[i].slice(1);
    //     } else {
    //         Completestr+= stringToArr[i].charAt(0).toUpperCase() + stringToArr[i].slice(1);
    //     }
        
    // });
  
    //  return Completestr;

    /* Second method */
   const lowerCaseString= string.toLowerCase().split(' ');
  const finalArr=lowerCaseString.map((words,i)=>{
        if(i===0) return words;
        return capitalizeWord(words);
   });
   return finalArr;

}
function snake_Case(word) {
    // return word.split(' ').join('_');
    return word.replaceAll(' ','_');
}
function Kabab_Case(word) {
    // return word.split(' ').join('-');
     return word.replaceAll(' ','-');
}
function pascalCase(words) {
    let res = words.split(' ').map((word) => {
        let CapitalPart = word.charAt(0).toUpperCase();
        if (word.length > 1) {
            CapitalPart = CapitalPart + word.slice(1);
        }
        return CapitalPart
    });
    return res.join('');

}


input.addEventListener('input', (e) => {
    capital.innerHTML = Capital((input.value).trim());
    LowerCaseWord.innerHTML = lowerCase((input.value).trim());
    TrimWord.innerHTML = Trim((input.value).trim());
    snake_case.innerHTML = snake_Case((input.value).trim())
    kabab_case.innerHTML = Kabab_Case((input.value).trim())
    pascal_case.innerHTML = pascalCase((input.value).trim());
    CamelCaseWord.innerHTML = shortCamel((input.value).trim());

});
