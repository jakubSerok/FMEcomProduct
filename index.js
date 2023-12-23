const navCartBtn = document.querySelector(".navCart");
const navCartCointainer = document.querySelector(".cartCointainer");

//price
const plusBtn = document.querySelector(".plusButton");
const minusBtn = document.querySelector(".minusButton");
const itemValue = document.querySelector("#itemValue");
let itValue = 0;

//big
const closeBtn = document.querySelector(".close");
const imgCheck = document.querySelector(".imgCheck");
const bigImg = document.querySelector("#largeImg");


//check
const addBtn = document.querySelector(".cartButton");
const deleteBtn = document.querySelector("#delete");


plusBtn.addEventListener("click",function(){    
    itValue++;
    itemValue.innerText = itValue;
})
minusBtn.addEventListener("click",function(){    
    itValue--;
    if(itValue<0){
        itValue=0;
    }
    itemValue.innerText = itValue;
})

closeBtn.addEventListener("click",function(){
    imgCheck.style.display = "none";
})
bigImg.addEventListener("click",function(){
    imgCheck.style.display = "flex";
})

navCartBtn.addEventListener("click",function(){
    navCartCointainer.classList.toggle("hidden");
})

addBtn.addEventListener("click",function(){
    if(itValue>0){
        document.querySelector(".emptyBox").style.display ="none";
        document.querySelector("#fValue").innerText = itValue;
        document.querySelector("#fPrice").innerText = "$ "+(itValue*125).toFixed(2);
        document.querySelector(".fullBox").style.display ="flex";
    }
})

deleteBtn.addEventListener("click",function(){
    document.querySelector(".emptyBox").style.display ="flex";
    document.querySelector(".fullBox").style.display ="none";
})
function myGallery(img){
    var thumbnails = document.querySelectorAll('.thumb ul li img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    var a = img.src;
    document.getElementById("largeImg").src = a;
    img.classList.add('active');
}
function myGalleryBig(img){
    var thumbnails = document.querySelectorAll('.thumbBig ul li img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    var a = img.src;
    document.getElementById("largeImgBig").src = a;
    img.classList.add('active');
}