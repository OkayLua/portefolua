console.log("hi");

var buttonleft = document.getElementById("buttonleft");
var buttonright = document.getElementById("buttonright");
var carcont = document.querySelector(".carouselbase ul");
var caractive = 1;
var carmargin = 0;
// Count the number of <li> items in the carousel
var carnumberOfItems = carcont.querySelectorAll("li").length;



function movecarright() {
    if (caractive <= carnumberOfItems - 1) {
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("carinactive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("caractive");
        caractive = caractive + 1;
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("caractive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("carinactive");
        carmargin = carmargin + -17.5;
        carcont.style.margin = "0 0 0 " + carmargin + "rem";
        buttonleft.classList.remove("disabled");
    }
    if (caractive >= carnumberOfItems) {
        buttonright.classList.add("disabled");
    }
    console.log(caractive)
};

function movecarleft() {
    if (caractive >= 2) {
        buttonright.classList.add("disabled");

        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("carinactive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("caractive");
        caractive = caractive - 1;
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("caractive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("carinactive");
        carmargin = carmargin + 17.5;
        carcont.style.margin = "0 0 0 " + carmargin + "rem";
        buttonright.classList.remove("disabled");
    }
    if (caractive <= 1) {
        buttonleft.classList.add("disabled");
    }
};

buttonright.addEventListener("click", function () {
    movecarright();
});
buttonleft.addEventListener("click", function () {
    movecarleft();
});

var awbuttonleft = document.getElementById("awbuttonleft");
var awbuttonright = document.getElementById("awbuttonright");
var awcont = document.querySelector("#mywork section:nth-of-type(4) ul");
var awactive = 1;
var awmargin = 0;
var awnumberOfItems = 3;

function moveawright() {
    if (awactive <= awnumberOfItems - 1) {
        awactive = awactive + 1;
        awmargin = awmargin + 188;
        awcont.style.padding = "0 " + awmargin + "vw 0 0 ";
        awbuttonleft.classList.remove("disabled");
    }
    if (awactive >= awnumberOfItems) {
        awbuttonright.classList.add("disabled");
    }
    console.log(awactive)
};

function moveawleft() {
    if (awactive >= 2) {
        awbuttonright.classList.add("disabled");
        awactive = awactive - 1;
        awmargin = awmargin - 188;
        awcont.style.padding = "0 " + awmargin + "vw 0 0 ";
        awbuttonright.classList.remove("disabled");
    }
    if (awactive <= 1) {
        awbuttonleft.classList.add("disabled");
    }
};

awbuttonright.addEventListener("click", function () {
    moveawright();
});
awbuttonleft.addEventListener("click", function () {
    moveawleft();
});