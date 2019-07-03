(function() {
    var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim","Ashish", "Poja", "John", "Junu", "Aashu", "Bishal", "Mandip", "Jolly", "Jeshika", "Patel","Rupam"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();
