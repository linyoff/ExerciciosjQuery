
$(document).ready(function () {

    //Exercicio 1
    $("button").eq(0).click(function () {
        $("p").eq(1).text("Estou estudando JQuery!");
    });

    //Exercicio 2
    $("button").eq(1).click(function () {
        $("#nome1").toggle();
    });

    //Exercicio 3
    $("#liPrincipal1").click(function () {
        $("#subLi1").slideToggle();
    });
    $("#liPrincipal2").click(function () {
        $("#subLi2").slideToggle();
    });
    $("#liPrincipal3").click(function () {
        $("#subLi3").slideToggle();
    });

    //Exercicio 4
    $("#btnForm").click(function () {
        event.preventDefault();

        let nome = $("#nome2").val();
        let endereco = $("#endereco").val();
        let curso = $("#curso").val();

        let aux = 0;

        if (nome.length < 5 || nome.length > 40) {
            $("#pr2").text("Mínimo 5 caracteres e no máximo 40");
        } else {
            $("#pr1").text("Enviado");
            $("#pr2").hide();
            aux++;
        }

        if (endereco.length == 0 || endereco.indexOf(' ') === -1) {
            $("#pr3").text("Mínimo 2 palavras");
        } else {
            $("#pr1").text("Enviado");
            $("#pr3").hide();
            aux++;
        }

        if (curso.length == 0) {
            $("#pr4").text("Insira o curso");
        } else {
            $("#pr1").text("Enviado");
            $("#pr4").hide();
            aux++;
        }

        if (aux === 3) {
            $("#prNome").append(nome);
            $("#prEndereco").append(endereco);
            $("#prCurso").append(curso);
        }

    });


    //Exercicio 5
    
    const imagem = [
        'images/gato1.png', 
        'images/gato2.png',  
        'images/gato3.png', 
        'images/gato4.png', 
        'images/gato5.png'
    ];

    
    let i=0;

    $("#btnAnterior").click(function () {
        if (i == 0) {
            i = 4;
            $('img').fadeOut(function () {
                $(this).attr('src', imagem[i]).fadeIn();
            });

        } else{
            i--;
            $('img').fadeOut(function () {
                $(this).attr('src', imagem[i]).fadeIn();
            });
            
        }
    });

    $("#btnProxima").click(function () {
        if (i == 4) {
            i = 0;
            $('img').fadeOut(function () {
                $(this).attr('src', imagem[i]).fadeIn();
            });

        } else{
            i++;
            $('img').fadeOut(function () {
                $(this).attr('src', imagem[i]).fadeIn();
            });
            
        }
    });


    //Estilização
    $('body').css({
        'font-family': 'Arial, sans-serif',
        'font-size': '26px',
        'margin': '8% 15% 15%',
        'padding': '0'
    });

    $('section').css({
        'background-color': 'rgb(129, 129, 129)',
        'margin': '20px 0',
        'padding': '20px',
        'border': '1px solid #ddd'
    });

    $('ul').css({
        'list-style': 'none',
        'padding': '0',
        'margin': '0'
    });

    $('ul li').css('margin-bottom', '10px');

    $('a').css({
        'text-decoration': 'none',
        'color': '#333',
        'cursor': 'pointer'
    });

    $('a').hover(function () {
        $(this).css('color', '#666');
    }, function () {
        $(this).css('color', '#333');
    });

    $('button').css({
        'background-color': '#333',
        'color': 'white',
        'border': 'none',
        'padding': '10px 20px',
        'border-radius': '5px',
        'cursor': 'pointer',
        'transition': 'background-color 0.3s ease'
    });

    $('button').hover(function () {
        $(this).css('background-color', '#555');
    }, function () {
        $(this).css('background-color', '#333');
    });

    $('#ulExc3').css({
        'align-items': 'center',
        'background-color': '#ffffff',
        'padding': '15px',
        'margin': '5%'
    });

    $('#subLi1, #subLi2, #subLi3').css({
        'display': 'none',
        'background-color': '#b3b3b3',
        'padding': '15px'
    });

    $('#nome1').css({
        'background-color': 'rgb(49, 49, 48)',
        'color': 'rgb(255, 255, 255)',
        'text-align': 'center'
    });

    $('label').css({
        'display': 'block'
    });

    $('input').css({
        'padding': '6.5px',
        'border-radius': '6.5px',
    });

    $('#btnForm').css({
        'display': 'block',
        'margin': '1% 4.2%',
    });

    $('form').css({
        'display': 'inline-block',
        'vertical-align': 'top',
    });

    $('div').css({
        'display': 'inline-block',
        'vertical-align': 'center',
        'padding': '5%'
    });

    $('#pr1, #pr2, #pr3, #pr4').css({
        'font-size': '15px',
        'color': 'rgb(128, 15, 15)'
    });

    $('#indice li').css({
        'display': 'inline',
        'padding': '25px',
        'margin': '10px'
    });

    $('#image').css({
        'max-width': '500px',
        'display': 'block',
        'margin': '2%'
    });


});






