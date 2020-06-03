$(function(){
//start
    
    var sort;
    
    $('.con_nav a').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    })
    
    $('.con_nav a').eq(2).on('click', function(e){
        e.preventDefault();
        $('.content_box > ul').html('');
        $('.content_box .prize').show();
    })
    
    $('.content_box .prize ul li').on('click', function(){
        $(this).toggleClass('on');
        $('.content_box .prize ul li div').slideToggle();
    })
    
    $.ajax({
        url: 'js/event.json'
        , dataType: 'json'
        , success : function(data){
            event($(data))
            $('.con_nav a').not(':last').on('click', function(e){
                e.preventDefault();
                $('.content_box > ul').html('');
                $('.content_box .prize').hide();
                sort = $(this).data('sort');
                event($(data));
            })
        }
    })
    
    function event(k){
        for(var i=0; i<k[0].event.length; i++) {
            var key = k[0].event[i],
                type = key.type,
                title = "<strong>"+key.title+"</strong>",
                info = "<span>"+key.info+"</span>",
                date = "<small>"+key.date+"</small>",
                img = "<img src="+key.img+">",
                li;
            if(type == 'ing' && !sort){
                li = "<li><figure>"+img+"<figcaption>"+title+info+date+"</figcaption></figure></li>";
                $('.content_box > ul').append(li);
            }
            if(type == sort) {
                li = "<li><figure>"+img+"<figcaption>"+title+info+date+"</figcaption></figure></li>";
                $('.content_box > ul').append(li);
            }
        }
    }
    
//end
})