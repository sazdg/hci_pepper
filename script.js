$(document).ready(function(){
    //hello
    alert("hello");
    keyPressed();
    
    
});

function keyPressed(){
    $("#app").keydown(function (e) {
        console.log("handler for .keypress() called");

        if (e.keyCode = 37) { //left
            var testo = "ciaociao";
            $("#introduzione").text(testo);

        }
    });
};