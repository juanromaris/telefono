

$("#teclado").on("mouseleave", function() {


  $("#display").delay(4000).fadeOut(1000);


});

$(".numeros").on("mouseover", function() {


  $("#display").fadeIn();


});





$("#uno").on("click", function() {
    console.log("apretaste 1");

    
    $("#display").append("<strong>1</strong>");

    // var numero1 = $("#uno").html();
    // var contenedorDisplay = $("#display");


    // contenedorDisplay = document.createElement("p");
    // contenedorDisplay.append(numero1);

});



$("#dos").on("click", function() {
    console.log("apretaste 2");

    $( "#display" ).append( "<strong>2</strong>" );




});


$("#tres").on("click", function() {
    console.log("apretaste 3");

     $( "#display" ).append( "<strong>3</strong>" );



});


$("#cuatro").on("click", function() {
    console.log("apretaste 4");

     $( "#display" ).append( "<strong>4</strong>" );




});


$("#cinco").on("click", function() {
    console.log("apretaste 5");


     $( "#display" ).append( "<strong>5</strong>" );

});


$("#seis").on("click", function() {
    console.log("apretaste 6");


     $( "#display" ).append( "<strong>6</strong>" );


});


$("#siete").on("click", function() {
    console.log("apretaste 7");

      $( "#display" ).append( "<strong>7</strong>" );



});


$("#ocho").on("click", function() {
    console.log("apretaste 8");

      $( "#display" ).append( "<strong>8</strong>" );
});



$("#nueve").on("click", function() {
    console.log("apretaste 9");


      $( "#display" ).append( "<strong>9</strong>" );
});



$("#cero").on("click", function() {
    console.log("apretaste 0");

      $( "#display" ).append( "<strong>0</strong>" );

});



$("#asterisco").on("click", function() {
    console.log("apretaste *");


      $( "#display" ).append( "<strong>*</strong>" );
});



$("#numeral").on("click", function() {
    console.log("apretaste #");

    $( "#display" ).append( "<strong>#</strong>" );

});