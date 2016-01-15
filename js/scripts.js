$(function() {
  $("button#alert").click(function(event) {
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

  $("button#searchengine").click(function() {
    var names = ["Izzy", "Simon", "Anna", "Tyler", "Jessica", "Tim", "Brooke", "Jordan", "Neil", "Will", "Kevin", "Cate", "Taylor", "Pablo"]
    var usersName = $("input#searchengine").val();
      for (var i = 0; i < 14; i++) {
        if (usersName == names[i]) {
          alert("Your name is on the list!");
        } else {
          alert("Sorry loser!");
        };
      };
  });

  $("button#beer").click(function() {
    var userAge = parseInt(prompt("Hold on! How old are you?"));
    if (userAge >= 21) {
      $(".yes").show();
    }
    else {
      $(".no").show();
    }

  });

});
