
$(document).ready(function(){

    $("button").eq(0).click(function(){
        $("p").eq(1).text("Estou estudando JQuery!");
    });

    $("button").eq(1).click(function(){
        $("#nome").toggle();
    });

});




