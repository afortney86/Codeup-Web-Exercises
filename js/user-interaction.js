"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
        var userName;
        do {
            userName = prompt("Welcome! what is your name?");
        }while (userName == null || userName.trim() == "");

// TODO: Show an alert message that welcomes the user based on their input.

    alert ("Hi " + userName + " my name is HAL");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

        var likePizza = prompt("Do you like pizza?");
        switch (likePizza) {
            case "yes":
                alert("Awesome! Me too!");
                break;
            case "no":
                alert("Who Doesn't like pizza?")
        }




