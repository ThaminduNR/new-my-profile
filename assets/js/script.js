//menu button toggle

$("#menu-btn").on("click", () => {
  $(".menu-view").css({ left: "0" });
  $(".menu-view").css({ transition: "0.4s" });
});
$("#close-menu-btn").on("click", () => {
  $(".menu-view").css({ left: "-100%" });
  $(".menu-view").css({ transition: "0.4s" });
});

/* Typing Animation */

var typing = new Typed(".develop", {
  strings: [
    "",
    "UI/UX Designer",
    "Freelancer",
    "Graphics Designer",
    "Web Designer",
    "Front-End Developer",
  ],
  typeSpeed: 150,
  backSpeed: 40,
  loop: true,
});

//change the color in header
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 150) {
    header.classList.add("scrolled");
    console.log("Scrlled");
  } else {
    header.classList.remove("scrolled");
  }
});

//back to top

document.addEventListener("scroll", () => {
  const toTop = document.querySelector(".back-to-btn");

  if (window.scrollY > 1000) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function animateText() {
  const thamiText = document.querySelector(".thami-name");

  thamiText.classList.add("animate__heartBeat");

  setTimeout(() => {
    thamiText.classList.remove("animate__heartBeat");
  }, 1000);

  console.log("Animate....");
}

setInterval(animateText, 8500);

//preloder animtion
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("preloder").style.display = "none";
  }, 6000);
});
