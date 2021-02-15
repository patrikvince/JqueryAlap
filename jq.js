//$(document).ready(function(){
//    
//});

$(function () {
    init();
    $("#kezd").click(init);
});

function init() {
//    $('div').eq(0).text("Ez a text szovege");
//    $('div').eq(0).html("Ez a <b>div</b> szovege");
//    $('div').eq(0).append("Ez egy masik <b>div</b>");
//    $('div').eq(0).prepend("Ez egy masik <b>div</b>");
//    $('div').eq(0).before("Ez egy masik <b>div</b>");
//    console.log($('div').eq(0).text());

//torles, urites
    $("#jatekter").empty();

    for (var i = 0; i < 5; i++) {
        $('#jatekter').append("<div>");
        $('#jatekter div').eq(i).append("<img>");
//        $('#jatekter div img').eq(i).attr('src', 'kepek/pepe.jpg');
//        $('#jatekter div img').eq(i).attr('alt', 'pepe');
        $('#jatekter div img').eq(i).attr({"src": "kepek/pepe.jpg", "alt": "pepe"});
    }

    $("#jatekter div").addClass("kartya");
    $("#jatekter div").css({"background-color": "pink", "padding": "2%"});

    //esemenyek
//    $("#jatekter div").mouseenter(function () {
//        $(this).css({"background-color": "red", "padding": "2%"});
//    });
//    $("#jatekter div").mouseleave(function () {
//        $(this).css({"background-color": "blue", "padding": "2%"});
//    });

    $("#jatekter div").hover(
            function () {
                $(this).css({"background-color": "red", "padding": "2%"})
            },
            function () {
                $(this).css({"background-color": "blue", "padding": "2%"});
            }
    );
    
    $('#jatekter div').click(function(){
        $(this).hide(1000);
        $(this).show(1000);
    });






}

