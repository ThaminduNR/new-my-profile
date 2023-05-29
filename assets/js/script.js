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

$(function () {
  $(document).on("click", "a.page-scroll", function (event) {
    var $anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 45,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    /*height in pixels when the navbar becomes non opaque*/
    $(".header").addClass("header");
  } else {
    $(".header").removeClass("header");
  }
});
