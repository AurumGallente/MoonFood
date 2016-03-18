var hwTimeOutBgTitle = 5000;

$(document).ready(function(e) {
    $("#content-slide__title_slider p")
        .hide()
        .eq(0)
        .show();
    //$("#bg-title img")
    //    .hide()
    //    .eq(0)
    //    .show();
    /*$("#bg-title .bg-title__slide")
        .hide()
        .eq(0)
        .show();*/
    
    var curTitle = 0;
    //var curBgTitle = 0;
    countTitle = $("#content-slide__title_slider p").size();
    //countBgTitle = $("#bg-title img").size();
    //countBgTitle = $("#bg-title .bg-title__slide").size();
    
    var aminateBG = function(){
            clearTimeout(bgslide);
            
            $("#content-slide__title_slider p").eq(curTitle).fadeOut(900);
            //$("#bg-title img").eq(curBgTitle).fadeOut(900);
            //$("#bg-title .bg-title__slide").eq(curBgTitle).fadeOut(900);

            if(curTitle == (countTitle-1)){
                curTitle = 0;
            }else{
                curTitle++;
            }

            /*if(curBgTitle == (countBgTitle-1)){
                curBgTitle = 0;
            }else{
                curBgTitle++;
            }*/

            $("#content-slide__title_slider p").eq(curTitle).fadeIn(900);
            //$("#bg-title img").eq(curBgTitle).fadeIn(900, rotatorbg);
            //$("#bg-title .bg-title__slide").eq(curBgTitle).fadeIn(900, rotatorbg);
        };
    
    var rotatorbg = function(){
        bgslide = setTimeout(function(){
                aminateBG();
            },
            hwTimeOutBgTitle);             
    }
    
    rotatorbg();
});