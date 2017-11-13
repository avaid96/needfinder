$('#change').on('click', function() { 
    $('div').each(function() { 
        if($(this).hasClass('active')) { 
            $(this).removeClass('active');
        } else { 
            $(this).addClass('active');
        }
    });
});