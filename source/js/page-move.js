var pageMove = (function () {
    var pageDown = $('.page-down'),
        pageUp = $('.go-up'),

        clickOnPageDown = function (e) {
            var go = $(this).data("link");
    		$("html, body").stop().animate({
    			scrollTop: $(go).offset().top
    		}, 700, "swing");
        },

        clickOnPageUP = function (e) {
            $("html, body").stop().animate({
    			scrollTop: 0
    		}, 700, "swing");
        },

        addListener = function () {
            pageDown.on('click', clickOnPageDown);
            pageUp.on('click', clickOnPageUP);
        }


    return {
        init: addListener
    }

})();

    pageMove.init();
