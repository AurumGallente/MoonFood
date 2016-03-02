$(function(){
    // скролы странцы
    //$("#main").onepage_scroll();
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        continuousVertical:true,
        resize: false,
        animateAnchor:false,
        scrollOverflow: false,
        autoScrolling:true,
        responsive: 900,
        fitSection: false
    });
    
    if($('#fp-nav ul li').size() <= 1){
        $('#fp-nav').hide();
    }
    
    // обработка нажатия кнопок верхнего меню
    /*$(".navigation-list__button").on("click", function(btn){
        $(".navigation-list__button").removeClass("active");
        $(this).addClass("active");
    })*/
    
    // нажатие стрелки кнопки 
    $("#btn-arrow-down").on("click", function(){
        //$("#main").moveDown();
        $.fn.fullpage.moveSectionDown();
    });
    
    var resizeHeaderFooter = function(){
        var width = $(window).width();
        //console.log(width);
        $("header").width( width );
        $("footer").width( width );
    };
    //resizeHeaderFooter();
    //$( window ).resize( resizeHeaderFooter );
});

