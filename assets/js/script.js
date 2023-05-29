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

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    console.log("Scrlled");
  } else {
    header.classList.remove("scrolled");
  }
});
