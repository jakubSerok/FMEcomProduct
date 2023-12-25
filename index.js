const navCartBtn = document.querySelector(".navCart");
const navCartCointainer = document.querySelector(".cartCointainer");
const mq = window.matchMedia( "(min-width: 378px)" );

//price
const plusBtn = document.querySelector(".plusButton");
const minusBtn = document.querySelector(".minusButton");
const itemValue = document.querySelector("#itemValue");
let itValue = 0;

//big
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const imgCheck = document.querySelector(".imgCheck");
const bigImg = document.querySelector("#largeImg");
let imgIndex =0;

//check
const addBtn = document.querySelector(".cartButton");
const deleteBtn = document.querySelector("#delete");


//mobile
const mobileOpen = document.querySelector("#menu");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileClose = document.querySelector("#closeMobile");

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
if(mq.matches){
    bigImg.addEventListener("click",function(){
        imgCheck.style.display = "flex";
    })
}

navCartBtn.addEventListener("click",function(){
    navCartCointainer.classList.toggle("hidden");
})
//mobile
mobileOpen.addEventListener("click",function(){
    mobileMenu.style.display = "flex";
})
mobileClose.addEventListener("click",function(){
    mobileMenu.style.display = "none";
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

nextBtn.addEventListener("click",function(){
    imgIndex++;
    if(imgIndex>4){
        imgIndex=0;
    }
    var thumbnails = document.querySelectorAll('.thumbBig ul li img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    document.getElementById("largeImgBig").src = thumbnails[imgIndex].src;
    thumbnails[imgIndex].classList.add('active');
})
prevBtn.addEventListener("click",function(){
    imgIndex--;
    if(imgIndex<0){
        imgIndex=4;
    }
    var thumbnails = document.querySelectorAll('.thumbBig ul li img');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    document.getElementById("largeImgBig").src = thumbnails[imgIndex].src;
    thumbnails[imgIndex].classList.add('active');
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