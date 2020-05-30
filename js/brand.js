$(function(){
//start
    //헤더 스크롤 이벤트
    
    var scrollTop = '';
    var lastScroll = 0;
    
    $(window).on('scroll', function(e){
         
        headerMove();

    });
    
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