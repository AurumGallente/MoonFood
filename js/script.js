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
                $("#btn-reviews").fadeOut(300, function(){
                    $("#btn-arrow-down").fadeIn(300).addClass("visible-lg");; 
                });
            }else{
                
            }
        },
        afterLoad: function(){
            if($(".last-slide").hasClass("active")){
                if($(window).width() >= 1200){
                    $("#btn-arrow-down").removeClass("visible-lg").fadeOut(300, function(){
                        $("#btn-reviews").fadeIn(300);
                    });
                }else{
                    $("#btn-reviews").fadeIn(300);
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
    $(".composition").hover(function(){
        var $this = $(this);
        var position = $this.position();
        var parentHeight = $this.height();
        var $descrWind = $this.find(".composition-description");
        var descrWidth = $descrWind.width();
        //console.log(position);
        if($descrWind.css('display') == 'none'){
            //$descrWind.fadeIn(600).offset({top:position.top+parentHeight/2, left:position.left-descrWidth/4});
            $descrWind.fadeIn(600).css({ "top" : position.top });
        }
    });
    // клик по крестику, для закрытия окна описание состава
    $(".composition-description__close").click(function(){
        var $parent = $(this).parent();
        $parent.fadeOut(600);
    });
});

