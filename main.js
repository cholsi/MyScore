$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('.verx').fadeIn();
        } else {
        $('.verx').fadeOut();
        } 
    });
    $('.verx').click(function() { 
        $('body,html').animate({scrollTop:0},800);
    });
});
$(function(){
    var a=$('#button1');
    a.click(function(){
        var b=('.img img');
        $(b).attr("src","images/3.jpg");
    });
});
$(function(){
    var a=$('#button2');
    a.click(function(){
        var b=('.img img');
        $(b).attr("src","images/5.jpg");
    });
});
$(function(){
    var a=$('#button3');
    a.click(function(){
        var b=('.img img');
        $(b).attr("src","images/6.jpg");
    });
});
$(function(){
    var a=$('#art img');
    a.hover(function(){
        var b=$('.text1');
        $(b).css('width','220px').css('background','rgb(15, 186, 192)').css('display','block').css('word-spacing','0' );
    },
    function(){
        var z=$('.text1');
        $(z).css('display','none');
    });

});
$(function(){
    var a=$('#xamid img');
    a.hover(function(){
        var b=$('.text');
        $(b).css('width','220px').css('background','rgb(15, 186, 192)').css('display','block').css('word-spacing','0' );
    },
    function(){
        var z=$('.text');
        $(z).css('display','none');
    });

});
$(function(){
    var a=$('#zan img');
    a.hover(function(){
        var b=$('.text2');
        $(b).css('width','220px').css('background','rgb(15, 186, 192)').css('display','block').css('word-spacing','0' );
    },
    function(){
        var z=$('.text2');
        $(z).css('display','none');
    });

});
$(function(){
    var a=$('#next');
    a.click(function(){
        var b=$('.col1');
        var c=$('.button1').val();
        if(c=="Смотреть все..."){
            $(b).css('height','450px');
            $(".button1").val("Свернуть");
        }
        else{
            $(".button1").val("Смотреть все...");
            $(b).css('height','175px');
        }
    });
});
