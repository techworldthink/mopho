$(document).ready(function () {
    var imageFile = ["main.png", "main1.png", "main2.png"];
    var currentIndex = 0;

    setInterval(function () {
        if (currentIndex == imageFile.length) {
            currentIndex = 0;
        }
        $(".trans-image").css('background-image', 'url("assets/img/' + imageFile[currentIndex++] + '")')
            .css('background-position','top right')
            .css('background-size','cover');
       }, 3000);

});
console.log("fgfgfg");