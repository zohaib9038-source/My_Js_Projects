
let bagItem = localStorage.getItem('Counter') ? JSON.parse(localStorage.getItem("Counter")) : [];


let AddToCart = (itemId) => {
    bagItem.push(itemId);
    localStorage.setItem('Counter', JSON.stringify(bagItem));
    displayBagIcon();

}

let displayBagIcon = () => {
    let bagCounter = document.querySelector('header .action_container .bag-item-count');
    if (bagItem.length > 0) {
        bagCounter.innerText = bagItem.length;
        bagCounter.style.visibility = "visible";
    } else {
        bagCounter.style.visibility = "hidden";
    }

}

let displayDataOnPage = () => {
    let itemContainerElement = document.querySelector('main .items-container');
    let innerhtml = '';
    if(itemContainerElement==null){
            return;
        }
        // console.log(itemContainerElement);
    items.forEach((item) => {
        innerhtml += `
        <div class="item-container">
        <img src=${item.image} alt="not found">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="current-price">${item.current_price}</span>
                <span class="orignal-price">${item.original_price}</span>
                <span class="discount">${item.discount_percentage}</span>
            </div>
            <button class="btn-add-bag" onclick=AddToCart(${item.id}) >Add to cart </button>
    </div>`;

    });

    // console.log(innerHtml);
    itemContainerElement.innerHTML = innerhtml;
}


function onLoad() {
    displayDataOnPage();
    displayBagIcon();
  
}
onLoad();



