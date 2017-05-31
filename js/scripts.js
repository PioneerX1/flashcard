$(document).ready(function() {
  $(".click-js-hidden").click(function() {
    $("#showing-javascript").toggle();
    $("#hidden-javascript").toggle();
  });
  $(".click-js-showing").click(function() {
    $("#showing-javascript").toggle();
    $("#hidden-javascript").toggle();
  });
  $(".click-op-hidden").click(function() {
    $("#showing-operators").toggle();
    $("#hidden-operators").toggle();
  });
  $(".click-op-showing").click(function() {
    $("#showing-operators").toggle();
    $("#hidden-operators").toggle();
  });
  $(".click-variables-hidden").click(function() {
    $("#showing-variables").toggle();
    $("#hidden-variables").toggle();
  });
  $(".click-variables-showing").click(function() {
    $("#showing-variables").toggle();
    $("#hidden-variables").toggle();
  });
});
