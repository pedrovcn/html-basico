$(document).ready(function() {
    
    $(document).on('contextmenu', function(e) {
        // return false;
        e.preventDefault();
    });

    $(document).on('mousedown', function(e) {
        if (event.which == 3) {
            console.log(event.pageY, event.pageX);

            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn();
            return false;
        }
        
        $('#context').fadeOut();
    });

    $('[data-trigger="dropdown"]').on('mouseenter', function() {
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave', function() {
            submenu.fadeOut(300);
        });
    });

    $('#append, #prepend, #replace').on('click', function(e) {
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if(action == 'prepend') {
            console.log('Prepend');
            $('#main').prepend(content);
        } else if (action == 'append') {
            console.log('Append');
            $('#main').append(content);
        } else if (action == 'replace') {
            console.log('Replace');
            $('#main').html(content)
        }

        $('.text').val('');
    });
});