$(function(){
//start
    
    $('.time_select li span').on('click', function(){
        if($(this).text()=='10 : 00' || $(this).text()=='11 : 00') {
           $('input[name=time]').val('AM '+$(this).text());
        } else {
            $('input[name=time]').val('PM '+$(this).text());
        }
        
    })
    
    $('[data-toggle="datepicker"]').datepicker();
    
    $('.time_select li span').on('click', function(){
        $('.time_select li span').removeClass('on')
        $(this).addClass('on');
    })
    
    $('#submit').on('click',function(e){
        e.preventDefault();
        reservation();
    })
    
    function reservation(){
        var $name = $('input[name=name]').val(),
            $tel = $('input[name=tel]').val(),
            $date = $('input[name=date]').val(),
            $time = $('input[name=time]').val();
        
        if($name == ''){
            alert('이름을 입력해주세요');
            $('input[name=name]').focus();
            return;
        }
        
        if($tel == ''){
            alert('연락처를 입력해주세요');
            $('input[name=tel]').focus();
            return;
        }
        
        if($date == ''){
            alert('방문 날짜를 선택해주세요');
            $('input[name=date]').focus();
            return;
        }
        
        if($time == ''){
            alert('방문 시간을 선택해주세요');
            $('input[name=time]').focus();
            return;
        }
        
        document.getElementById("reservation").reset();
        
        $.ajax({
            url:'data.php',
            type:'post',
            data :{
                mode:'insert',
                name:$name,
                tel:$tel,
                date:$date,
                time:$time
            },
            success:function(data){
                console.log(data);
                alert(data);
            }
        })
    }
    
//end
})