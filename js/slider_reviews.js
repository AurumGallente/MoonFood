var hwSlideSpeed = 900;
var hwTimeOut = 3000;
var hwNeedLinks = true;
 
$(document).ready(function(e) {
    $("#slider-reviews .comment").css(
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
    slideCount = $("#slider-reviews .comment").size();
    
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
        
        $('#prev-comment span').empty().append($("#slider-reviews .comment").eq(prewSlide).find('span').html());
        $('#next-comment span').empty().append($("#slider-reviews .comment").eq(nextSlide).find('span').html());
    }
    
    setBtnText();
    
    var animSlide = function(arrow){
            clearTimeout(slideTime);
            $("#slider-reviews .comment").eq(slideNum).fadeOut(hwSlideSpeed);
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
            $("#slider-reviews .comment").eq(slideNum).fadeIn(hwSlideSpeed);
            setBtnText();
            //$(".control-slide.active").removeClass("active");
            //$('.control-slide').eq(slideNum).addClass('active');
        }
    if(hwNeedLinks){
    /*var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
        .prependTo('#slider-opinion');*/      
        $('#next-comment').click(function(){
                animSlide("next");
            });
        $('#prev-comment').click(function(){
                animSlide("prew");
            });
        
        $("#prev-sml-comment").click(function(){
            $('#next-comment').click();
        });
        $("#next-sml-comment").click(function(){
            $('#prev-comment').click();
        });
    }
});