window.onscroll = function() { navcolor(); };

let navbar = document.getElementsByClassName("navbar")[0];
let sticky = navbar.offsetHeight;
let logo = document.getElementById("logo");

function navcolor() {
  if (window.scrollY >= sticky) {
       navbar.classList.add("sticky");
       logo.src = "img/logo-complete.png"
  } else {
       navbar.classList.remove("sticky");
       logo.src = "img/logo-simple.png"
  }
}

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = Math.ceil(firstImg.clientWidth);
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = Math.ceil(carousel.scrollLeft) >= scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon =>{
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
})

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX)  - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);



const showTab = () => {

  let mountainTabsSelected = document.querySelector(".mountaintabs input[type='radio']:checked");
  let SectionActive = document.querySelector("#Section" + mountainTabsSelected.id);
  let SectionMountain = document.querySelectorAll(".sectionMountain")

  SectionMountain.forEach(section => {
    section.classList.remove("d-flex")
    section.classList.add("d-none")
  })

  SectionActive.classList.remove("d-none")
  SectionActive.classList.add("d-flex")
}

showTab();

const NavMovile = () => {
  let menu = document.querySelector("header nav ul");

  menu.classList.toggle("open")
}