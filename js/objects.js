//declaring and setting properties and methods
/*var car = {};
car.make = "Toyota";
car.model = "Tundra";
car.honk = function() {
    console.log("Honk Honk")
};*/

//declare and set properties





(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;
        var person = new Object();



    // TODO: Create firstName and lastName properties in your person object; assign your name to them
        person.firstName = "Luke";
        person.lastName = "Skywalker";

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

            person.sayHello = function () {
                console.log("Hello " + person.firstName + person.lastName + "!")
            };

    // Say hello from the person object.
     person.sayHello();
})();
