$(document).ready(function () {
  $(".highlight-word").mouseenter(function () {
    $(".meaning").fadeIn().css("display", "block");
  });
  $(".highlight-word").mouseleave(function () {
    $(".meaning").fadeOut().css("display", "none");
  });
});
