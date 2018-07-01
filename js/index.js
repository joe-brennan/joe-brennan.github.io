$(document).ready(() => {
  $(".music").hover(() => {
    $("body").css("background", "#DB3340");
    $(".music").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".music").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });

  $(".code").hover(() => {
    $("body").css("background", "#28ABE3");
    $(".code").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".code").css("color", "#28ABE3");
    $("h1").css("color", "#000000");
  });

  $(".blog").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".blog").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".blog").css("color", "#1FDA9A");
    $("h1").css("color", "#000000");
  });

  $(".instagram").hover(() => {
    $("body").css("background", "#ff9400");
    $(".instagram").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".instagram").css("color", "#ff9400");
    $("h1").css("color", "#000000");
  });
});
