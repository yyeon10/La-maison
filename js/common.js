$(function(){
//start
    
    $('header nav').hide();
    
    //top 버튼
    $('aside div').on('click', function(){
        $('html').animate({
            scrollTop:0
        },300)
    })
        
    //버거 메뉴 열기
    $('.burger_menu div').on('click', function(){
        $('header nav').show();
        $('aside').hide();
        onClass('header nav');
        setTimeout(function(){
            onClass('header nav > div');
        }, 10)
    })
    
    //버거 메뉴 닫기
    $('.sub_menu div').on('click', function(){
        onClass('header nav > div');
        onClass('header nav');
        $('aside').show();
        setTimeout(function(){
            $('header nav').hide();
        },700)
    })
    
    //aside
    $(window).on('scroll', function(){
        var footTop = $('footer').offset().top - $(window).innerHeight();
        if(footTop < $(window).scrollTop()){
            $('aside').addClass('active');
        } else {
            $('aside').removeClass('active');
        }
    })
    
    
    //네비 고정
    $('a').on('click', function(){
        localStorage.page = $(this).data('num');
    })
    
    $('.content_tit a').eq(localStorage.page).addClass('on')
    .siblings().removeClass('on');

    //헤더 스크롤 이벤트
    
    var scrollTop = '';
    var lastScroll = 0;
    
    $(window).on('scroll', function(e){
         
        headerMove();

    });
    
    function onClass(element){
        $(element).toggleClass('on');
    }
    
    function headerMove(){
        scrollTop = $(window).scrollTop()
             if(scrollTop > lastScroll){
                $('header').addClass('up');
                $('header .burger_menu ').addClass('up');
             } else {
                $('header').removeClass('up');
                $('header .burger_menu ').removeClass('up');
             }

        lastScroll = scrollTop
    }
    
//end
})