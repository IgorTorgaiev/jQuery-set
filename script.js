// Set Content

$(document).ready(function(){
    $("#text").click(function(){
        $("#first").text("The first sentence has been changed!");
    });
    $("#html").click(function(){
        $("#second").html("<b>This one is also changed</b>");
    });
    $("#value").click(function(){
        $("#input").val("Igor Torgaiev");
    });
});

// Callback

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#one").text(function (i, initText){
            return "Initial text: " + initText + " New text: It's nice to study jQuery! (index: " +  i + ")";
        });
    });
    $("#btn2").click(function(){
        $("#two").html(function (i, initText){
            return "Initial html: " + initText + " New html: see the html (index: " + i + ")";
        });
    });
});

// Attributes

$(document).ready(function(){
    $("#push").click(function(){
        $("#attr").attr({
            "href" : "https://www.facebook.com/igor.torgaiev",
            "title" : "Here you can visit my FB account"
        });
    });
});