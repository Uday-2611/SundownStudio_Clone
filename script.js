// locomotive js is a library through  which we get smooth scrolling 
// locomotive cdn -> locomotive.js and locomotive.css
// locomotive js github -> smooth -> second box
function locoAnimation() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

// getAttribute -> helps in getting attributes of the element
function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-images");

    // to get the image div to show when we hover the mouse over tehe divs
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    // first we selected all the elems through querySelectorAll by giving .elem class in it, then it gave us a nodeList and we ran a forEach loop on it in which we added a event listener on all the elems and got its self made attribute data-image in which there is the url of the image. then from that we got the value of the attribute which is url of the image and added it into the background of the image div. 
    var elems = document.querySelectorAll(".elem");
    // querySelectorAll give results in the form of a nodeList
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    });
}

function page5Animation() {
    var rightCont = document.querySelector("#rightCont");
    var heads = document.querySelectorAll(".heads");
    var para = document.querySelector("#leftPara p")
    let currentActive = null;
    heads.forEach(function (e) {
        e.addEventListener("click", function () {
            if (currentActive) {
                currentActive.classList.remove('active')
            }
            e.classList.add('active')
            currentActive = e;
            var image = e.getAttribute("data-image");
            rightCont.style.backgroundImage = `url(${image})`
            var paragraph = e.getAttribute("data-para");
            para.textContent = paragraph
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
    });
}

function menuAnimation() {
    var full = document.querySelector("#full-scr")
    var menu = document.querySelector("nav h3");
    var navImg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navImg.style.opacity = 1;
            flag = 0;
        }

    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}



locoAnimation();
swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();
page5Animation();