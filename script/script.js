console.log("hi")

var buttonleft = document.getElementById("buttonleft");
var buttonright = document.getElementById("buttonright");
var carcont = document.querySelector(".carouselbase ul")
var caractive = 1;
var carmargin = 0;

function movecarright() {
    if (caractive <= 4) {
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("carinactive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("caractive");
        caractive = caractive + 1;
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("caractive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("carinactive");
        carmargin = carmargin + -17.5;
        carcont.style.margin = "0 0 0 " + carmargin + "rem";
        buttonleft.classList.remove("disabled")
    }
    if (caractive >= 5) {
        buttonright.classList.add("disabled")
    }
};
function movecarleft() {
    if (caractive >= 2) {
        buttonright.classList.add("disabled")

        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("carinactive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("caractive");
        caractive = caractive - 1;
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.add("caractive");
        document.querySelector(".carouselbase ul li:nth-of-type(" + caractive + ") a").classList.remove("carinactive");
        carmargin = carmargin + 17.5;
        carcont.style.margin = "0 0 0 " + carmargin + "rem";
        buttonright.classList.remove("disabled")
    }
    if (caractive <= 1) {
        buttonleft.classList.add("disabled")
    }
};


buttonright.addEventListener("click", function () {
    movecarright();
}
);
buttonleft.addEventListener("click", function () {
    movecarleft();
}
);