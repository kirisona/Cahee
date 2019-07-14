;(function($) {

    $(document).ready(function() {
        
        $('#gallery img').on('click', function(e) {
            var $imgSrc = $(this).attr('src');
            var $modalimage = $('<img>');
            $modalimage.attr('src', $imgSrc);

            $modalimage.appendTo('.modal-content');
            openModal();
        })
    })

    var openModal = function(){
        $('.modal').css('display', 'block');
    }

    var closeModal = function(){
        $('.modal').css('display', 'none').find('img').remove();

    }

    $('.modal-close').on('click', closeModal);
    $('.modal').on('click', function(e){
        if ( !$(e.target).is('.modal-content') || !$(e.target).closest('.modal-content').length){
            closeModal();
        }
    });



})(jQuery);