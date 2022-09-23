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