$('#check-up').click(function(){
    if ($(this).is(':checked')){
        $('.flight-up').show(100);
    } else {
        $('.flight-up').hide(100);
    }
});

$('#check-in').click(function(){
    if ($(this).is(':checked')){
        $('.flight-in').show(100);
    } else {
        $('.flight-in').hide(100);
    }
});

$('#check-delay').click(function(){
    if ($(this).is(':checked')){
        $('.flight-delay').show(100);
    } else {
        $('.flight-delay').hide(100);
    }
});
