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
        fitSection: false,
        onLeave: function(){
            if($(".last-slide").hasClass("fp-completely")){
                $("#btn-reviews").stop(true,true).fadeOut(100, function(){
                    $("#btn-arrow-down").fadeIn(200).addClass("visible-lg");; 
                });
            }else{
                
            }
        },
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
        }
    });
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
        //$("#main").moveDown();
        $.fn.fullpage.moveSectionDown();
    });
    
    //   слайдер  -  МНЕНИЕ СПЕЦИАЛИСТА          
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
    slidingSpecialist(0);
    $("#slider-opinion").sliderOnPage(slidingSpecialist);
    slidingReviews(0);
    $("#slider-reviews").sliderOnPage(slidingSpecialist);
    
    // наведение на состав
    /*$(".composition img.composition-foto").hover(function(){
        var $this = $(this);
        var position = $this.offset();
        
        var $descrWind = $this.parent().find(".composition-description");
        var descrWidth = $descrWind.width();
        
        position.left -= descrWidth/2;
        if(position.left < 0){
            position.left = 15;
        }else{
            var docWidth = $( window ).width()
            if((position.left + descrWidth + 10) > docWidth )
                position.left =  position.left + (docWidth -  (position.left + descrWidth + 10));
        }
        
        if(position.top < (88+20)){
            position.top = (88+20);
        }
        
        if($descrWind.css('display') == 'none'){
            $descrWind.fadeIn(600).offset({ top : position.top, left : position.left });
        }
    });
    // клик по крестику, для закрытия окна описание состава
    $(".composition-description__close").click(function(){
        var $parent = $(this).parent();
        $parent.fadeOut(300);
    });*/
    
    /* появление описание при наведении */
    $( '.composition > .uc-container' ).each( function( i ){
        var $item = $(this);
        
        var height = $item.find('.composition-description').actual('height');
        $item.find('div.overlay-composition').height(height/2);
        $item.height(height/2);
        
    });
                                                 
    var opened = false;
    $( '.composition > .uc-container' ).each( function( i ) {

        var $item = $( this ), direction;
        
        direction = ['left','bottom'];

        var pfold = $item.pfold( {
            folddirection : direction,
            speed : 600,
            onEndFolding : function() { $item.fadeOut(300,function(){opened = false;});  },
        } );

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
    
});

