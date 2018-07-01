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
    $("body").css("background", "#E8B71A");
    $(".code").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".code").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });

  $(".blog").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".blog").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".blog").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });

  $(".instagram").hover(() => {
    $("body").css("background", "#28ABE3");
    $(".instagram").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".instagram").css("color", "#DB3340");
    $("h1").css("color", "#000000");
  });
