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

  $("button#beer").click(function() {
    var userAge = parseInt(prompt("Hold on! How old are you?"));
    if (userAge >= 21) {
      $(".yes").show();
    }
    else if (userAge < 21) {
      $(".no").show();
    }
    else {
      $('.nope').show();
    }
  });

  $("button#searchengine").click(function() {
    var matchName;
    var names = ["Izzy", "Simon", "Anna", "Tyler", "Jessica", "Tim", "Brooke", "Jordan", "Neil", "Will", "Kevin", "Cate", "Taylor", "Pablo"]
    var usersName = $("input#userName").val();
      for (var i = 0; i < 14; i++) {
        if (i == usersName) {
          var matchName = 1;
        };
      };

      if (1 == matchName) {
        alert("Your name is on the list!");
      } else {
        alert("Sorry loser!");
      };
  });
});
