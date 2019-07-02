(function(window) {
    var bye = new Object();
    var showme = "Good Bye";
    bye.speak = function speak(name) {
        console.log(showme + " " + name);
    };
    window.bye = bye;
})(window);
