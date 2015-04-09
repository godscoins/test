        $(function(){
         
            $('#show_more').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        btn_more.val('Подождите...');

 $('.imgt').hide();


/* $('.conblack').click(function(){
 $('.back').hide();
$('.text-service').hide();
$('.parts').hide();
$('#wrap').hide();
$('.formimg').hide();
$('.contactplace').hide();
 $('.imgt').show();
$('.prices').show();
$('.call').show();
btn_more.attr('count_show', (0));
});

$('.back:eq(2)').hide();
$('.back:eq(1)').show();
$('.back:eq(0)').hide();
 */
$('#wrap').slideUp();
$('.formimg').slideUp();
$('.call').hide();
$('.prices').hide();

$('.contactplace').hide();
$('.text').show();
   $('.text-service').show();              
        $.ajax({
                    url: "ajax.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){

                $('.text').append(data.html);
                $('.back').show();

                    btn_more.attr('count_show', (count_show+99));



$('.parts:eq(4)').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');

        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){
$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});


$('.parts:eq(3)').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show-1,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){

$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});


$('i').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show+1,
                        "count_add":   count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){

$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});



$('.parts:eq(2)').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show-2,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){

$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});

$('.parts:eq(1)').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show-3,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){
 
$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});



$('.parts:eq(0)').click(function(){
        var btn_more = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        $.ajax({
                    url: "1.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show-4,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){

$('.text-service').empty();
                $('.text-service').append(data.html);
            }else{
                btn_more.val('Больше не показывать');
            }
}
});
});



            }else{
                btn_more.val('Больше не показывать');
            }
}


});

            });





 $('.contact').click(function(){
        var contact = $(this);
        var count_show = parseInt($(this).attr('count_show'));
        var count_add  = $(this).attr('count_add');
        contact.val('Подождите...');
 $('.imgt').hide();

/* -$('.conblack').click(function(){
$('.back').hide();
$('.contactplace').hide();
$('.formimg').hide();
 $('.imgt').show();
$('.prices').show();
$('.call').slideDown();
btn_more.attr('count_show', (0));
});
$('.back:eq(2)').show(); */

$('.contactplace').show();

$('.text-service').empty();
$('.prices').hide();
$('.call').slideUp();
$('#wrap').slideUp();
$('.formimg').slideUp();
$('.text').slideUp();
        $.ajax({
                    url: "site.php", // аКбаДаА аОбаПбаАаВаЛбаЕаМ
                    type: "post", // аМаЕбаОаД аПаЕбаЕаДаАбаИ
                    dataType: "json", // баИаП аПаЕбаЕаДаАбаИ аДаАаНаНбб
                    data: { // ббаО аОбаПбаАаВаЛбаЕаМ
                        "count_show":   count_show,
                        "count_add":    count_add
                    },
                    // аПаОбаЛаЕ аПаОаЛббаЕаНаИб аОбаВаЕбаА баЕбаВаЕбаА
                    success: function(data){
            if(data.result == "success"){


                $('.contactplace').append(data.html);
                    contact.attr('count_show', (99));
            }else{
                contact.val('Больше не показывать');
            }
                    }
                });
            });


 $('.order').click(function(){
$('.back').hide();
 $('.imgt').hide();
/*
$('.conblack').click(function(){
$('.back').hide();
$('.parts').hide();
$('#wrap').hide();
$('.formimg').hide();
$('.contactplace').hide();
 $('.imgt').show();
$('.prices').show();

$('.call').show();
btn_more.attr('count_show', (0));
});

$('.back:eq(0)').show();
  */
        $('#wrap').show();
$('.text-service').empty();
$('.formimg').show();
$('.prices').hide();
$('.call').hide();
$('.contactplace').slideUp();
$('.text').slideUp();
            });


});
