var blur = (function () {
    function set_bg(){
    		var section = $(".reviews"),
    			form = section.find(".contact-form"),
    			form_bg = form.find(".contact-form__bg"),
    			bg_offset = section.offset().top - form_bg.offset().top;

    		form_bg.css({
    			"background-position" : "center " + bg_offset + "px"
    		});

    	}

    	if($(".reviews").length){
    		$(window).on("load", function() {
    			set_bg();
    		});

    		$(window).resize(function() {
    			set_bg();
    		});
    	}
}());
