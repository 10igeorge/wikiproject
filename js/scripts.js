$(function() {
  $("button#alert").click(function() {
    alert("I'm in alert!")
  });

  $("button#userinput").click(function() {
    var userInput = parseInt(prompt("We will add any number by 5!"));
    var myNumber = userInput + 5;
    $("#number").after("Your number plus 5 is " + myNumber);
  });

  $("button#yelling").click(function() {
    var userText = prompt("Type anything here to change it to uppercase");
    var userCaps = (userText).toUpperCase();
    $(".caps").after(userCaps);
  });


});
