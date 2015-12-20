window.loading_screen = window.pleaseWait({
    logo: "../Source/Images/logo1.svg",
    backgroundColor: '#0BA0F0',
    loadingHtml: "<p class='loading-message'><div class='sk-double-bounce'><div class='sk-child sk-double-bounce1'></div><div class='sk-child sk-double-bounce2'></div></div></p>"
});
window.loading_screen.finish();
$(document).ready(function() {

    $("#slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        navigationText : [">","<"],
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        autoPlay: true
        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

});