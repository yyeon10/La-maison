$(function(){
//start
    
    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
        
        var text = "<div class='explore'><div>이 사이트는 크롬 브라우저에 최적화되어있습니다.</div><div>크롬 브라우저로 실행하거나<a href='https://www.google.com/intl/ko/chrome/'>여기</a>에서 브라우저를 다운 받아주세요.</div></div>"
        $('.wrap').hide();
        $('body').html(text);

    }
    
    var idx = 0;
    
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
    
    //about us
    $('.con_about div ul li').on('click', function(){
        idx = $(this).index();
        $(this).addClass('on')
        .siblings().removeClass('on');
        $('.con_about .about_detail li').eq(idx).fadeIn()
        .siblings().fadeOut();
    })
    
    //하단메뉴
    $('.con_menu ul li').eq(4).on('click', function(e){
        e.preventDefault();
    })
    $('.con_menu ul li').eq(5).on('click', function(e){
        e.preventDefault();
    })
    
    //collection
    $('.img_box > span').eq(1).on('click', function(){
        idx++;
        if(idx==4){
            $('.img_slider ul').css('margin-left', '0')
            idx=1;
        }   
        $('.img_slider ul').animate({
            marginLeft:-722*idx+'px'
        });
        $('.img_number em').eq(0).text('0'+idx);
    })
    
     $('.img_box > span').eq(0).on('click', function(){
        idx--;
        if(idx<=0){
            $('.img_slider ul').css('margin-left', '-2888px')
            idx=3;
        }
         console.log(idx)
        $('.img_slider ul').animate({
            marginLeft:-722*idx+'px'
        });
        $('.img_number em').eq(0).text('0'+idx)
    })
    
     var move = 0
        , num = 0
        , bln = true;
    
    $('.con_indi span').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
        idx=$(this).index();
        var offset = $('.content_box section').eq(idx).offset();
        $('html').animate({scrollTop : offset.top}, 400);
        num=idx
    })
    
    $('.content_box section').on('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDelta;
        if (bln) {
            bln = false;
            if (delta < 0 && num < 3) {
                num++;
            }
            if (delta >= 0 && num > 0) {
                num--;
            }
            
            console.log(num)
            move = num * $(window).height();
            console.log(move)
            $('html').animate({
                scrollTop: move
            }, 1000, function () {
                bln = true
            });
        }
        $('.con_indi span').eq(num).addClass('on').siblings().removeClass('on');
    });

    function onClass(element) {
        $(element).toggleClass('on');
    }
    
      $('aside div').on('click', function(){
        $('html').animate({
            scrollTop:0
        },300)
        num = 0;
        $('.con_indi span').eq(0).addClass('on')
          .siblings().removeClass('on');
    })
    
    setTimeout(function(){
        $('html').animate({scrollTop:0},0);
    },50);
//end
})