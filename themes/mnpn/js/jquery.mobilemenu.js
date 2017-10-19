(function($) {
    $.fn.mobileMenu = function(options) {
        $("#show-menu").click(function() {
            $("#block-system-main-menu ul.menu").slideToggle();
        });
    };
})(jQuery);
