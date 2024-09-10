// Start Nav Menu
let menuBtn = document.querySelector(".menu-btn");
let navbarMenu = document.querySelector(".navbar-menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("change");
    navbarMenu.style.display = "block";
    navbarMenu.style.position = "absolute";
    navbarMenu.style.left = "50%";
    navbarMenu.style.top = "180px";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("change");
    navbarMenu.style.display = "none";
    navbarMenu.style.position = "absolute";
    navbarMenu.style.left = "-100%";
    navbarMenu.style.top = "180px";
    menuOpen = false;
  }
});
// End Nav Menu
//  Start fixed nav
// let navbar = document.getElementById("main-nav");

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   if (scrollPosition > navbar.offsetHeight) {
//     navbar.classList.add("scrolled");
//     navbar.style.position = "fixed";
//     navbar.style.top = "0px";
//   } else {
//     navbar.classList.remove("scrolled");
//     navbar.style.position = "fixed";
//     navbar.style.top = "100px";
//   }
// });
//  End fixed nav

// Start Slider
let slideimgs = Array.from(document.querySelectorAll(".imgs img"));
let slidecount = slideimgs.length;
let currentSlide = 0;

let indicatorsElemnt = document.createElement("ul");
indicatorsElemnt.setAttribute("id", "indicators-ul");
for (let i = 0; i < slidecount; i++) {
  let indicatorsItems = document.createElement("li");
  indicatorsItems.setAttribute("data", i);
  indicatorsElemnt.appendChild(indicatorsItems);
}
document.getElementById("indicators").appendChild(indicatorsElemnt);

let newUl = document.getElementById("indicators-ul");
let bullets = Array.from(document.querySelectorAll("#indicators-ul li"));
for (let i = 0; i < bullets.length; i++) {
  bullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data"));
    theChecker();
  };
}

theChecker();
function theChecker() {
  removeAllactive();
  slideimgs[currentSlide].classList.add("active");
  newUl.children[currentSlide].classList.add("active");
}

function removeAllactive() {
  slideimgs.forEach(function (imgs) {
    imgs.classList.remove("active");
  });

  bullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}

// End Slider
// Start pass

function togglePassword() {
  let passInput = document.getElementById("pass");
  let eye = document.getElementById("eye");
  if (passInput.type === "password") {
    passInput.type = "text";
    eye.classList.add("fa-eye");
  } else {
    passInput.type = "password";
    eye.classList.remove("fa-eye");
  }
}

// End pass
// Start Scroll btn
window.addEventListener("scroll", () => {
  let button = document.querySelector(".go-up");
  if (window.pageYOffset > 500) {
    button.classList.add("active");
  } else {
    button.classList.remove("active");
  }
});

document.querySelector(".go-up").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});
// End Scroll btn

// Start Testimonails
let btn = document.getElementsByClassName("btn");
let slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(800px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(1600px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
// End Testimonails





