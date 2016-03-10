$(function(){
    // fullpagescroll plugin
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        continuousVertical:false,
        resize: false,
        animateAnchor:false,
        scrollOverflow: false,
        autoScrolling:true,
        responsive: 900,
        fitSection: false,
        onLeave: function( i, next ){
            if(i == 1){
                $("#btn-arrow-down").removeClass("visible-lg").fadeOut(300, function(){
                    $("#fp-nav").append($(this));
                    $(this).fadeIn(300,function(){
                        $(this).addClass("visible-lg");
                    });
                });
            }
            if(next == 1){                
                $("#btn-arrow-down").removeClass("visible-lg").fadeOut(300, function(){
                    $("#footer-nav").append($(this));
                    $(this).fadeIn(300,function(){
                        $(this).addClass("visible-lg");
                    });
                });
            }
        },
        /*
        afterLoad: function(){
            if($(".last-slide").hasClass("active")){
                if($(window).width() >= 1200){
                    $("#btn-arrow-down").stop(true,true).removeClass("visible-lg").fadeOut(100, function(){
                        $("#btn-reviews").fadeIn(200);
                    });
                }else{
                    $("#btn-reviews").fadeIn(200);
                }
            }else{

            }
        }*/
    });

    //formstyler
    $('.js-select').styler();

    //скрытие боковой навигации
    var hiderFpNav = function(){
        if($('#fp-nav ul li').size() <= 1){
            $('#fp-nav').hide();
        }
    }
    hiderFpNav();
    $( window ).resize(hiderFpNav);

    // нажатие стрелки вниз
    $("#btn-arrow-down").on("click", function(){
        $.fn.fullpage.moveSectionDown();
    });

    //   обработчик перемены слайдов "МНЕНИЕ СПЕЦИАЛИСТА"
    var slidingSpecialist = function(curSlide){
        var prewSlide = 0;
        var countSlide = $("#slider-opinion .slider-on-page__slide").size();
        if(curSlide == 0){
            prewSlide = countSlide - 1;
        }else{
            prewSlide = curSlide - 1;
        }

        var nextSlide = 0;
        if(curSlide == (countSlide-1)){
            nextSlide=0;
        }else{
            nextSlide = curSlide + 1;
        }

        $("#slider-opinion #prew-slide span").empty().append($("#slider-opinion .slider-on-page__slide").eq(prewSlide).find('span.profession').html());
        $("#slider-opinion #next-slide span").empty().append($("#slider-opinion .slider-on-page__slide").eq(nextSlide).find('span.profession').html());
    };
    //   обработчик перемены слайдов "ОТЗЫВЫ"
    var slidingReviews = function(curSlide){
        var prewSlide = 0;
        var countSlide = $("#slider-reviews .slider-on-page__slide").size();
        if(curSlide == 0){
            prewSlide = countSlide - 1;
        }else{
            prewSlide = curSlide - 1;
        }

        var nextSlide = 0;
        if(curSlide == (countSlide-1)){
            nextSlide=0;
        }else{
            nextSlide = curSlide + 1;
        }

        $("#slider-reviews #prew-slide span").empty().append($("#slider-reviews .slider-on-page__slide").eq(prewSlide).find('span.name').html());
        $("#slider-reviews #next-slide span").empty().append($("#slider-reviews .slider-on-page__slide").eq(nextSlide).find('span.name').html());
    };
    // слайдер "мнение специалиста
    slidingSpecialist(0);
    $("#slider-opinion").sliderOnPage(slidingSpecialist);
    // слайдер "отзывы"
    slidingReviews(0);
    $("#slider-reviews").sliderOnPage(slidingReviews);
    
        
    /* появление описание при наведении */
    $( '.uc-container' ).each( function( i ){
        var $item = $(this);

        var height = $item.find('.composition-description').actual('height');
        $item.find('div.overlay-composition').height(height/2);
        $item.height(height/2);

    });
                                                 
    // описание состава на большом
    $( '.composition > .uc-container' ).each( function( i ) {

        var $item = $( this ), direction;

        direction = ['left','bottom'];

        var pfold = $item.pfold( {
            folddirection : direction,
            speed : 150,
            onEndFolding : function() { $item.fadeOut(300,function(){opened = false;});  },
        } );
        var opened = false;
        $item.parent().find( 'img.composition-foto' ).hover( function() {
            //$item.find('.composition-description');
            if( !opened ) {
                $item.fadeIn(300);
                opened = true;
                pfold.unfold();
                
                var $thisFoto = $(this);
                var position = $thisFoto.offset();
                if(position.top < (88+20)){
                    var offsetX = (88+20) - position.top;
                    $item.css("top", offsetX);
                }
            }
        } ).end().find( '.composition-description__close' ).on( 'click', function() {

            pfold.fold();

        } );

    } );
    // описание состава на среднем и маленьком
    $( '.composition-sm-md .uc-container' ).each( function( i ) {
        console.log(i);
        var $item = $( this ), direction;
        
        direction = ['left','bottom'];

        var pfold2 = $item.pfold( {
            folddirection : direction,
            speed : 150,
            onEndFolding : function() { $item.fadeOut(300,function(){opened = false;});  },
        } );
        var opened = false;
        $item.parent().find( 'img.composit__img' ).click( function() {
            console.log("click");
            //$item.find('.composition-description');
            if( !opened ) {
                $item.fadeIn(300);
                opened = true;
                pfold2.unfold();

                var $thisFoto = $(this);
                var position = $thisFoto.offset();
                if(position.top < (88+20)){
                    var offsetX = (88+20) - position.top;
                    $item.css("top", offsetX);
                }
            }
        } ).end().find( '.composition-description__close' ).on( 'click', function() {

            pfold2.fold();

        } );

    } );
    
    
});

});
