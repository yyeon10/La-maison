$(function(){
//start
    var idx = 0;
    
    //about us
    $('.con_about div ul li').on('click', function(){
        idx = $(this).index();
        $(this).addClass('on')
        .siblings().removeClass('on');
        $('.con_about .about_detail li').eq(idx).fadeIn()
        .siblings().fadeOut();
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
    
    $('.con_indi span').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
        idx=$(this).index();
        var offset = $('.content_box section').eq(idx).offset();
        $('html').animate({scrollTop : offset.top}, 400);
    })
    
     var move = 0
        , num = 0
        , bln = true;
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
            $('html,body').animate({
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
//end
})