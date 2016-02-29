var hwSlideSpeed = 900;
var hwTimeOut = 3000;
var hwNeedLinks = true;
 
$(document).ready(function(e) {
    $('.opinion').css(
        {
            "position" : "absolute",
            "top":'0', 
            "left": '0'
        })
        .hide()
        .eq(0)
        .show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider-opinion .opinion").size();
    
    var setBtnText = function(){
        var prewSlide = 0;
        if(slideNum == 0){
            prewSlide = slideCount - 1;
        }else{
            prewSlide = slideNum - 1;
        }
        
        var nextSlide = 0;
        if(slideNum == (slideCount-1)){
            nextSlide=0;
        }else{
            nextSlide = slideNum + 1;
        }
        
        $('#prev-opinion span').empty().append($('.opinion').eq(prewSlide).find('span').html());
        $('#next-opinion span').empty().append($('.opinion').eq(nextSlide).find('span').html());
    }
    
    setBtnText();
    
    var animSlide = function(arrow){
            clearTimeout(slideTime);
            $('.opinion').eq(slideNum).fadeOut(hwSlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount-1)){slideNum=0;}
                else{slideNum++}
                }
            else if(arrow == "prew")
            {
                if(slideNum == 0){slideNum=slideCount-1;}
                else{slideNum-=1}
            }
            else{
                slideNum = arrow;
                }
            $('.opinion').eq(slideNum).fadeIn(hwSlideSpeed);
            setBtnText();
            //$(".control-slide.active").removeClass("active");
            //$('.control-slide').eq(slideNum).addClass('active');
        }
    if(hwNeedLinks){
    /*var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
        .prependTo('#slider-opinion');*/      
        $('#next-opinion').click(function(){
                animSlide("next");
            });
        $('#prev-opinion').click(function(){
                animSlide("prew");
            });
    }
    /*var $adderSpan = '';
    $('.opinion').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");
     
    $('.control-slide').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });*/
    var pause = false;
    var rotator = function(){
            if(!pause){
                slideTime = setTimeout(function(){
                    animSlide('next')
                }, hwTimeOut);
            }
        }
    $('#slider-wrap').hover(    
        function(){
            clearTimeout(slideTime); pause = true;
        },
        function(){
            pause = false; 
            rotator();
        });
    //rotator();
});