(function( $ ){
    $.fn.sliderOnPage = function(callbackAfterSlide){
        var _slideSpeed = 900;
        var _slider = this;
        var _curSlide = 0;
        var _countSlide = this.find(".slider-on-page__slide").size();
        
        var animSlide = function(arrow){
            //clearTimeout(slideTime);
            _slider.find(".slider-on-page__slide").eq(_curSlide).fadeOut(_slideSpeed);
            if(arrow == "next")
            {
                if(_curSlide == (_countSlide-1))
                {
                    _curSlide=0;
                }
                else
                {
                    _curSlide++;
                }
            }
            else if(arrow == "prew")
            {
                if(_curSlide == 0)
                {
                    _curSlide=_countSlide-1;
                }
                else
                {
                    _curSlide-=1;
                }
            }
            _slider.find(".slider-on-page__slide").eq(_curSlide).fadeIn(_slideSpeed, function(){
                if(callbackAfterSlide) 
                    callbackAfterSlide(_curSlide);
            });
        }
        
        if( _countSlide > 1){
            var maxHeight = 0;
            
            _slider.find(".slider-on-page__slide").css({
                "position" : "absolute",
                "top" : "0",
                "left" : "0"
            })
            .hide()
            .eq(0)
            .show();
            
            _slider.height(_slider.find(".slider-on-page__slide").height());
            $( window ).resize(function(){
                _slider.height(_slider.find(".slider-on-page__slide").height());
            });
            
            _slider.find("#prew-slide").click(function(){
                animSlide("prew");
            });
            _slider.find("#next-slide").click(function(){
                animSlide("next");
            });
            
            $("#small-slider-btn").find("#prew-small-btn").click(function(){
                _slider.find("#prew-slide").click();
            });
            $("#small-slider-btn").find("#next-small-btn").click(function(){
                _slider.find("#next-slide").click();
            });
        }else{
            console.log("no have slids");
        }
        
        return this;
    };
 })(jQuery);