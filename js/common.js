$(function(){
//start
    //top 버튼
    $('aside div').on('click', function(){
        $('html').animate({
            scrollTop:0
        },300)
    })
    
    $('header nav').hide();
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
    
    function onClass(element){
        $(element).toggleClass('on');
    }
    
    //네비 고정
    $('a').on('click', function(){
        localStorage.page = $(this).data('num');
    })
    
    $('.content_tit a').eq(localStorage.page).addClass('on')
    .siblings().removeClass('on');

    
//end
})