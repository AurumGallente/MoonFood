var costBootle = 400;

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

$(function(){
    // fullpagescroll plugin
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        continuousVertical:false,
        resize: true,
        animateAnchor:false,
        //scrollOverflow: true,
        autoScrolling:true,
        responsiveWidth: 992,
        fitSection: false,
        
        onLeave: function( i, next ){
            if(i == 1){
                $("#btn-arrow-down").fadeOut(300, function(){
                    $("#btn-arrow-up").fadeIn(300);
                    $("#fp-nav").append($(this));
                    $(this).fadeIn(300,function(){
                        if($("section.fp-section").size() == next){
                            $("#btn-arrow-down").fadeOut(300);
                        }
                    });
                });
            }
            if(next == 1){
                $("#btn-arrow-up").fadeOut(300);
                $("#btn-arrow-down").fadeOut(300, function(){
                    $("#footer-nav").append($(this));
                    $(this).fadeIn(300,function(){
                        //$(this).addClass("visible-lg");
                    });
                });
            }
            if($("section.fp-section").size() == next){
                $("#btn-arrow-down").fadeOut(300);
            }
            if($("section.fp-section").size() == i){
                $("#btn-arrow-down").fadeIn(300);//, function(){ $(this).addClass("visible-lg"); });
            }
        },
    });
    // добавляем стрелку вверх к пагинации
    var arrow = "<div id='btn-arrow-up' class='footer__arrow footer__arrow_anim_up-down' style='position: absolute; top: -45px; display: none;'><img src='images/arrow_up.png'></div>";
    $("#fp-nav").prepend(arrow);

    //formstyler
    $('.js-select').styler();
    $('.js-select-country').styler();

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
    // нажатие стрелки вверх
    $("#btn-arrow-up").on("click", function(){
        $.fn.fullpage.moveSectionUp();
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

        $("#slider-reviews #prew-slide span").empty().append($("#slider-reviews .slider-on-page__slide").eq(prewSlide).find('.name').html());
        $("#slider-reviews #next-slide span").empty().append($("#slider-reviews .slider-on-page__slide").eq(nextSlide).find('.name').html());
    };
    // слайдер "мнение специалиста
    slidingSpecialist(0);
    $("#slider-opinion").sliderOnPage(slidingSpecialist);
    // слайдер "отзывы"
    slidingReviews(0);
    $("#slider-reviews").sliderOnPage(slidingReviews);
    
    
    /* настройка высоты uc-container */
    var setHeightUcContainer = function(){
        $( '.uc-container' ).each( function( i ){
            var $item = $(this);
            var height = $item.find('.composition-description').actual('height');
            $item.find('div.overlay-composition').height(height/2);
            $item.height(height/2);

        });
    }
    setHeightUcContainer();
    
    $(window).resize(function() {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function(){
            setHeightUcContainer();            
        }, 500);
    });
                                             
    // описание состава на большом
    /*var pfold_list = new Array();
    $( '.composition > .uc-container' ).each( function( i ) {
        
        var openedlg = false;  
        
        var $item = $( this ), direction;
        
        var horizonal = $item.attr("data-direction-horizontal");
        
        if(horizonal){
            direction = [ horizonal, 'bottom'];
        }else{
            direction = [ 'left', 'bottom'];
        }
        
        

        var pfold = $item.pfold( {
            folddirection : direction,
            speed : 150,
            onEndFolding : function() { $item.fadeOut(300,function(){openedlg = false;});  },
        } );
        pfold_list.push(pfold);
        $item.parent().find( 'img.composition-foto' ).hover( function() {
            //$item.find('.composition-description');
            if( !openedlg ) {
                $item.fadeIn(300);
                openedlg = true;
                pfold.unfold();

                var $thisFoto = $(this);
                var position = $thisFoto.offset();
                if(position.top < (88+20)){
                    var offsetX = (88+20) - position.top;
                    $item.css("top", offsetX);
                }
            }
            for(i=0; i < pfold_list.length;i++){
                if(pfold_list[i] != pfold)
                    pfold_list[i].fold();
            }
        } ).end().find( '.composition-description__close' ).on( 'click', function() {

            pfold.fold();

        } );

    } );*/
    
    /* появление описание при наведении */
    $('.composition > .composition-foto, .composition-sm-md .composit__img').each( function(){
        var foto = $(this);
        var descr = foto.parent().find('.composition-description');
        var mouseEnter = false;
        foto.mouseenter(function(){ 
            mouseEnter = true; 
            descr.fadeIn(300);
        })
        foto.mouseleave(function(){ 
            mouseEnter = false; 
            descr.fadeOut(300);
        })
        foto.mousemove(function(event){
            if(mouseEnter == true){
                if(descr){
                    var offsetDescrX = 0;
                    var offsetDescrY = 0;
                    
                    // определение выхода подсказки за правый край окна
                    if( (event.pageX + descr.width() + 40) > $(document).width()){
                        offsetDescrX = - 10 - descr.width();
                    }
                    // определение выхода подсказки за нижний край окна
                    if( (event.pageY + descr.height() + 80) > $(document).height()){
                        offsetDescrY = - 10 - descr.height();
                    }
                    descr.offset({ top: event.pageY+10+offsetDescrY, left: event.pageX+10+offsetDescrX});
                }
            }
        });
    });

    // описание состава на среднем и маленьком
    
    /*var pfold_list2 = new Array();
    $( '.composition-sm-md .uc-container' ).each( function( i ) {
        
        var openedsmmd = false;
        
        var $item = $( this ), direction;
        
        direction = ['left','bottom'];

        var pfold = $item.pfold( {
            folddirection : direction,
            speed : 150,
            onEndFolding : function() { $item.fadeOut(300,function(){openedsmmd = false;});  },
        } );
        pfold_list2.push(pfold)
        $item.parent().find( 'img.composit__img' ).click( function() {
            console.log("click");
            //$item.find('.composition-description');
            if( !openedsmmd ) {
                $item.fadeIn(300);
                openedsmmd = true;
                pfold.unfold();
                
                var $thisFoto = $(this);
                var position = $thisFoto.offset();
                if(position.top < (88+20)){
                    var offsetX = (88+20) - position.top;
                    $item.css("top", offsetX);
                }
            }
            for(i=0; i < pfold_list2.length;i++){
                if(pfold_list2[i] != pfold)
                    pfold_list2[i].fold();
            }
        } ).end().find( '.composition-description__close' ).on( 'click', function() {

            pfold.fold();

        } );

    } );*/
    
    // описание состава на extra-small
    var pfold_list3 = new Array();
    $( '.composition-xs .uc-container' ).each( function( i ) {
        var openedxs = false;
        
        var $item = $( this ), direction;
        
        var horizonal = $item.attr("data-direction-horizontal");
        
        if(horizonal){
            direction = [ horizonal, 'bottom'];
        }else{
            direction = [ 'left', 'bottom'];
        }

        var pfold = $item.pfold( {
            folddirection : direction,
            speed : 150,
            onEndFolding : function() { $item.fadeOut(300,function(){openedxs = false;});  },
        } );
        pfold_list3.push(pfold)
        $item.parent().find( 'img' ).click( function() {
            //$item.find('.composition-description');
            if( !openedxs ) {
                $item.fadeIn(300);
                openedxs = true;
                pfold.unfold();
                
                var $thisFoto = $(this);
                var position = $thisFoto.offset();
                if(position.top < (88+20)){
                    var offsetX = (88+20) - position.top;
                    $item.css("top", offsetX);
                }
            }
            for(i=0; i < pfold_list3.length;i++){
                if(pfold_list3[i] != pfold)
                    pfold_list3[i].fold();
            }
        } ).end().find( '.composition-description__close' ).on( 'click', function() {

            pfold.fold();

        } );

    } );
    
    // отображение цены
    var showCostOrder = function(){
        var count = $("#sel1 option:selected").val();
        $("#order-value-cost").empty().html( count * costBootle);
        $("#order-value-cost2").empty().html( count * costBootle);
    }
    showCostOrder();
    
    // выбор количества
    $("#sel1").change(function(){
        var $this = $(this);
        
        /*$('#sel2 option').removeAttr("selected");
            
        
        $("#sel2").trigger('refresh');
        
        $("#sel2 [value="+$this.val()+"]").attr("selected", "selected");*/
        
        $("#sel2").val($this.val());
        $("#sel2").trigger('refresh');
        
        showCostOrder();
    })
    
    $("#sel2").change(function(){
        var $this = $(this);
        
        /*$('#sel1 option').removeAttr("selected");
        
        $("#sel1").trigger('refresh');
        
        $("#sel1 [value="+$this.val()+"]").attr("selected", "selected");*/
        
        $("#sel1").val($this.val());
        $("#sel1").trigger('refresh');
        
        showCostOrder();
    })
    
    // клик по кнопке заказа
    $("a.order-link").click(function(event){
        event.preventDefault();
        //console.log( $("#sel1").val() );
        var url = $(this).attr("href") + "?select=" + $("#sel1 option:selected").val();
        $(location).attr('href',url);
    });
    
    // определения параметра в строке
    var orderCount = $.urlParam('select');
    if(orderCount != null){
        $("#sel1").val(orderCount);
        $("#sel1").trigger('refresh');
        $("#sel1").change();
    }
    
});
