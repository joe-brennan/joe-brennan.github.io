$(document).ready(() => {
  $(".one").hover(() => {
    $("body").css("background", "#DB3340");
    $(".one").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".one").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });

  $(".two").hover(() => {
    $("body").css("background", "#28ABE3");
    $(".two").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".two").css("color", "#28ABE3");
    $("h1").css("color", "#000000");
  });

  $(".three").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".three").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".three").css("color", "#1FDA9A");
    $("h1").css("color", "#000000");
  });

  $(".four").hover(() => {
    $("body").css("background", "#ff9400");
    $(".four").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".four").css("color", "#ff9400");
    $("h1").css("color", "#000000");
  });
});
