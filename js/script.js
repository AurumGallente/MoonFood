$(function(){
    $("#main").onepage_scroll();
    
    $(".navigation-list__button").on("click", function(btn){
        $(".navigation-list__button").removeClass("active");
        $(this).addClass("active");
    })
});

