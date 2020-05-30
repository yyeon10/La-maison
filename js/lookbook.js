$(function(){
//start
    var idx = 0,
        scrollTop = '',
        lastScroll = 0;
    
    $.ajax({
        url: 'js/lookbook.json'
        , dataType: 'json'
        , success: function (data) {
            lookbook($(data));
            
            
            $('.content_box > ul li').on('click', function(){
                $(this).find('.gallery').fadeIn();
            });

            $('.gallery ul li').on('click', function(){
                $('.gallery').fadeOut();
            });

            $('.gallery .prev').on('click', function(){
                idx--;
                gallery();
            })

            $('.gallery .next').on('click', function(){
                idx++;
                gallery();
            })

            gallery();
        }
    })
    
    //헤더 스크롤 이벤트
    
    
    
    $(window).on('scroll', function(e){
         
        headerMove();

    });
    
    //갤러리

    function lookbook(k){
        //console.log(k[0].foodlist[0].mainimg)
        for (var i = 0; i < k[0].lookbook.length; i++) {
            var key = k[0].lookbook[i],
                name = "<strong>"+key.name+"</strong>",
                season = "<small>"+key.season+"</small>",
                thum = "<img src="+key.thum+">",
                figure = "<figure>"+thum+"<figcaption>"+name+season+"</figcaption></figure>",
                img = "<li class='on'><img src="+key.img1+"></li>"+"<li><img src="+key.img2+"></li>"+"<li><img src="+key.img3+"></li>"+"<li><img src="+key.img4+"></li>"+"<li><img src="+key.img5+"></li>"+"<li><img src="+key.img6+"></li>"+"<li><img src="+key.img7+"></li>",
                gallery = "<div class='gallery'><ul>"+img+"</ul><span>위 사진의 저작권은 "+name+"에 있으며, 더 많은 사진은 <a href="+key.link+" target='_blank'>이 곳</a>에서 보실 수 있습니다.</span><span class='prev'><img src='img/icon_prev.png' alt='prev'></span><span class='next'><img src='img/icon_next.png' alt='next'></span></div>",
                li = "<li>"+figure+gallery+"</li>";
            
            $('.content_box > ul').append(li);
        }
    }
    
    function gallery(){
        var liLen = $('.gallery ul li').length/9;
        
        $('.gallery ul > li').eq(idx).show()
        .siblings().hide();
        if(idx == 0) {
            $('.gallery .prev').hide();
        } else {
            $('.gallery .prev').show();
        }
        if(idx == liLen-1){
            $('.gallery .next').hide();
        } else {
            $('.gallery .next').show();
        }
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