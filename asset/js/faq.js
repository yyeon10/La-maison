$(function(){
//start
    
    var sort = '';
    
    $('.con_nav a').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    })
    
    $('.con_nav a').eq(2).on('click', function(e){
        e.preventDefault();
        $('.content_box > ul').html('');
        $('.content_box .prize').show();
    })
    
    
    
    $.ajax({
        url: 'asset/js/faq.json'
        , dataType: 'json'
        , success : function(data){
            faq($(data))
            $('.con_nav a').eq(0).on('click', function(e){
                sort='';
                e.preventDefault();
                $('.content_box ul').html('');
                faq($(data))
            })
            $('.con_nav a').not(':first').on('click', function(e){
                e.preventDefault();
                $('.content_box ul').html('');
                sort = $(this).data('sort');
                faq($(data));
            })
        }
    })
    
    function faq(k){
        for(var i=0; i<k[0].faq.length; i++) {
            var key = k[0].faq[i],
                type = key.type,
                question = "<strong>Q</strong>"+key.question,
                answer = "<div><em>A</em><p>"+key.answer+"</p></div>",
                li;
            if(type == sort) {
                li = "<li>"+question+answer+"</li>";
                $('.content_box > ul').append(li);
            }
            if(!sort){
                li = "<li>"+question+answer+"</li>";
                $('.content_box > ul').append(li);
            }
        }
        $('.content_box ul li').on('click', function(){
            $('.content_box ul li div').slideUp();
            $(this).toggleClass('on')
            .siblings().removeClass('on');
            if(!$(this).hasClass('on')){
                return;
            } else {
                $(this).find('div').slideToggle();
            }
        })
    }
    
//end
})