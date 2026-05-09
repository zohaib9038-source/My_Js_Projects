let bagItemContainer = document.querySelector('.bag-items-container');
console.log(bagItemContainer);

function bagCart() {
    let bagcartHtml = '';

    bagItem.forEach(index => {
        bagcartHtml += `
    <div class="item-container">
                    <div class="leftSide">
                        <img src=../${items[index - 1].image} alt="not found">
                    </div>
                    <div class="rightSide">
                        <div class="companyName">${items[index - 1].company}</div>
                        <div class="item-name">"${items[index - 1].item_name}"</div>
                        <div class="price">
                            <span class="current-price">${items[index - 1].current_price}</span>
                            <span class="orignal-price">${items[index - 1].original_price}</span>
                            <span class="discount">${items[index - 1].discount_percentage}</span>
                        </div>
                        <div class="return-period-days">
                            ${items[index - 1].return_period}
                        </div>
                        <div class="">
                            Delivered <span class="delivery-details-days">${items[index - 1].delivery_date}</span> </div>
                    </div>
                    <div class='removeItem'><span data-index=${index} class="cross">X</span></div> 
                </div>
                `;   

    });
    bagItemContainer.innerHTML = bagcartHtml;

}
   let totalAmount;
let Calculation = () => {
    totalAmount= 0;
    bagItem.forEach((index) => {
        totalAmount += items[index - 1].current_price;
    });
    return totalAmount;
}

let summaryShow = () => {
    let bagSummary = document.querySelector('.bag-summary');
    let summary = '';
    summary += ` <div class="total-price-Summary">
                    <div class="Total-Item">
                        price detail(${bagItem.length} items)
                    </div>
                    <div class="total-Amount">
                        <h3>Total Amount</h3>
                        <h3>${(Calculation())}</h3>
                    </div>
                    <button>Place Order</button>
                </div>`;
                if(totalAmount>0){
                    bagSummary.innerHTML = summary;
                }else{
                    bagSummary.style.visibility='hidden';
                }
   
}

function load() {
    bagCart();
    summaryShow();
}
load();


//remove item
function removeItem(itemId){
   bagItem= bagItem.filter(itemsId=>itemsId!=itemId);
    localStorage.setItem('Counter', JSON.stringify(bagItem));
            bagCart();
            summaryShow();
            displayBagIcon();

}

let Item = document.querySelector('.bag-items-container');

Item.addEventListener('click',(e)=>{
    if(e.target.classList.contains('cross')){
        let customeAttribute=e.target.dataset.index;
        removeItem(customeAttribute);
        // i can also used below code except by using removeItem()
   /*    bagItem.forEach((element,index) => {
        console.log(element,index);
        if(element==customeAttribute){
            console.log('Before Deleting',bagItem);
            bagItem.splice((index),1);
            console.log("After remove",bagItem);
            localStorage.setItem('Counter', JSON.stringify(bagItem));
            bagCart();
            summaryShow();
            displayBagIcon();
        }
       });
       */

    }
    
});

