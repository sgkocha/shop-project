let productsCount = document.getElementById("productsCount");
let addToCartBtns = document.querySelectorAll(".product__link_cart");


for(let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function(){
         let prevProductsCount = +productsCount.textContent;
         productsCount.textContent = prevProductsCount + 1;
         console.log(productsCount.textContent);
    });
}
let likeImgDivs = document.querySelectorAll(".like__image");
let likeImgs = document.querySelectorAll(".like__image img");

for(i = 0; i < likeImgDivs.length; i++) {
    let likeImgDiv = likeImgDivs[i];
    let likeImg = likeImgs[i];
    likeImgDivs[i].addEventListener("click", function(){
        let imgSrc = likeImg.getAttribute("src");
        if(imgSrc === "img/unlike.png"){
            likeImg.setAttribute("src", "img/like.png");
        }else{
            likeImg.setAttribute("src", "img/unlike.png"); 
        }
    });
}

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

function showModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal(){
    modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach(element => {
  element.addEventListener("click", showModal)
});

closeBtn.addEventListener("click",  closeModal);

let modalBlock = document.querySelector(".modal-block");
let modalForm = document.querySelector(".modal form");

modal.addEventListener("click", function(e){
 if(e.target === modal || e.target === modalBlock || e.target === modalForm)  {
    closeModal();
 }
});


let incrementBtns = document.querySelectorAll(".increment");
let decrementBtns = document.querySelectorAll(".decrement");
let productsQuantity = document.querySelectorAll(".product-quantity input");

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 5){
  this.domRefs = {
    incrementButton,
    decrementButton,
    inputField
  };
  
  this.toggleButtonState = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementButton.disabled = count <= minCount;
    this.domRefs.incrementButton.disabled = count >= maxCount;
  };
  
  this.toggleButtonState();
  
  this.increment = function(){
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  
  this.decrement = function(){
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };
  
  this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}

let counters = [];

for(let i = 0; i < incrementBtns.length; i++){
 counters[i] = new Counter(incrementBtns[i], decrementBtns[i], productsQuantity[i]);
}

$('.slider').slick({
    dots: true,
});
