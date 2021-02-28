import Typed from "./typed.js";

let i = 0,
  a = 0,
  b = 0,
  c = 0;

$("document").ready(function () {

  $(".owl-carousel").owlCarousel({

    items: 3,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
    }

  });

  $(window).resize(function () {

    if (window.matchMedia("(max-width: 769px)").matches) {
      $(".afterWithScrolling").css('display', 'none')


    } else {
      $(".afterWithScrolling").css('display', 'block')


    }

  })


  var typed = new Typed("#typed", {
    strings: ["Designer", "Larry Daniels", "Developer"],
    backSpeed: 30,
    typeSpeed: 70,
    loop: true,
    autoInsertCss: false,
    backDelay: 2000,
  });

  $(".service").mouseenter(function () {
    $(this)
      .children(".service-icon")
      .css({ "background-color": "#000", color: "#fff" });
  });
  $(".service").mouseleave(function () {
    $(this)
      .children(".service-icon")
      .css({ "background-color": "#F8F9FA", color: "#000" });
  });

  $(window).scroll(function () {
    let headerScroll = $("header").offset().top;
    let aboutScroll = $("#about").offset().top;
    let clientsScroll = $("#clients").offset().top;
    let serviceScroll = $("#service").offset().top;
    let worksScroll = $("#works").offset().top;
    let blogScroll = $("#blog").offset().top;
    let contactScroll = $("#contact").offset().top;
    let wScroll = $(window).scrollTop();

    if (wScroll > aboutScroll - 150) {
      $(".navbar").css("background-color", "white");
      $(".navbar-light .navbar-nav .nav-link").css("color", "#000");
      $(".navbar .navbar-brand").css("color", "#000");
      $(".navbar").removeClass("py-4");
      $(".navbar").addClass("shadow");
      $(".skill-progress").eq(0).animate({ width: "95%" }, 2000);
      $(".skill-progress").eq(1).animate({ width: "80%" }, 2000);
      $(".skill-progress").eq(2).animate({ width: "90%" }, 2000);
    } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar-light .navbar-nav .nav-link").css("color", "#FFF");
      $(".navbar .navbar-brand").css("color", "#fff");
      $(".navbar").addClass("py-4");
      $(".navbar").removeClass("shadow");
    }

    if (wScroll > clientsScroll - 150) {
      setInterval(happyCustomersCount, 60);
      setInterval(completeProjectsCount, 200);
      setInterval(linesOfCodeCount, 5);
      setInterval(filesDownloadedCount, 60);
    }

    if (wScroll < aboutScroll) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(0)
        .css({ width: "60%", "background-color": "#fff" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(0)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    }
    if (wScroll > aboutScroll - 80 && wScroll < serviceScroll - 50) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(1)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(1)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    } else if (wScroll > serviceScroll - 80 && wScroll < worksScroll - 80) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(2)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(2)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    } else if (wScroll > worksScroll - 80 && wScroll < clientsScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(3)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(3)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    } else if (wScroll > clientsScroll - 100 && wScroll < blogScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(4)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(4)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    } else if (wScroll > blogScroll - 100 && wScroll < contactScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(5)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(5)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    } else if (wScroll > contactScroll - 100) {
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(6)
        .css({ width: "60%", "background-color": "#000" });
      $(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .eq(6)
        .parent()
        .parent()
        .siblings()
        .children()
        .children(".navbar-light .navbar-nav .nav-link .afterWithScrolling")
        .css({ width: "0%", "background-color": "transparent" });
    }
  });

  $(".navbar-light .navbar-nav .nav-link").click(function () {
    let id = $(this).attr('href');
    $("html,body").animate({ scrollTop: $(id).offset().top }, 1500);
  });
});
function happyCustomersCount() {
  if (i != 850) {
    i++;
    $(".counter").eq(0).html(i);
  }
}
function completeProjectsCount() {
  if (a != 230) {
    a++;
    $(".counter").eq(1).html(a);
  }
}
function linesOfCodeCount() {
  if (b != 9450) {
    b++;
    $(".counter").eq(2).html(b);
  }
}
function filesDownloadedCount() {
  if (c != 780) {
    c++;
    $(".counter").eq(3).html(c);
  }
}
