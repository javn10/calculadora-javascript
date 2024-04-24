$(document).ready(function(){
    let num1 = 0;
    let num2 = 0;
    let resultado = 0;


    $("#resultado").css("color","red");
    $("#resultado").css("font-size","1.2rem");
    $("#resultado").hide();
    
    
    //selector de etiqueta
    $("h1").click(function(){
        $("this").text("QUE MIRAI LONGI KLO");
    });

    $("#btnDividir").click(function(){
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        if($("#numero1").val() === ""){
            $("#error1").text("Agrege un numero");
            $("#error1").css("color","Red");
            return;
        }
        if($("#numero2").val() === ""){
            $("#error2").text("Agrege un numero");
            $("#error2").css("color","Red");
            return;
        }

        num1 = parseInt($("#numero1").val());
        num2 = parseInt($("#numero2").val());
        if($("#numero2").val() === "0"){
        $("#resultado").text("No se puede dividir por 0");
            resultado = num1 / num2;
        }
        $("#resultado").show();
        // $("#resultado").text(resultado);       
        console.log(resultado);
    });

});

// let idchile = document.getElementById("idchile");
//     idchile.addEventListener("click",function(){
//         idchile.innerHTML = "ehhh messiiii";
//     });