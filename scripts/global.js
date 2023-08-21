
$(document).ready(function(){

    //Exercicio 1
    $("button").eq(0).click(function(){
        $("p").eq(1).text("Estou estudando JQuery!");
    });

    //Exercicio 2
    $("button").eq(1).click(function(){
        $("#nome").toggle();
    });

    //Exercicio 3
    $("#liPrincipal1").click(function(){
        $("#subLi1").slideToggle();
    });
    $("#liPrincipal2").click(function(){
        $("#subLi2").slideToggle();
    });
    $("#liPrincipal3").click(function(){
        $("#subLi3").slideToggle();
    });

    //Exercicio 4
    $("#btnForm").click(function(){
        event.preventDefault();

        var nome = $("#nome2").val();
        var endereco = $("#endereco").val();

        if (nome.length < 5 || nome.length > 40){
            $("#pr1").text("Inválido");
            $("#pr2").text("O nome deve ter no mínimo 5 caracteres e no máximo 40");
        }

        
        console.log(nome);
        console.log(endereco);
        
    });

    //Exercicio 5
    var images = [];

    $("#btnAnterior").click(function(){

    });
    $("#btnProxima").click(function(){

    });

});




