(function(window) {
    var hello = new Object();
    var showme = "Hello";
    hello.speak = function(name) {
        console.log(showme + " " + name);
    };
    window.hello= hello;
})(window);
