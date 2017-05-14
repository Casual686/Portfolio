var preloader = (function () {
    var percentTotal = 0,
        preloader = $('.preloader');

    var circleFirstth = $('.circle__first'),
    	circleSecond = $('.circle__second'),
    	circleThird = $('circle__third'),
    	lengthFirst = Math.PI*(circleFirstth.attr("r") * 2),
    	lengthSecond = Math.PI*(circleSecond.attr("r") * 2),
    	lengthThird = Math.PI*(circleThird.attr("r") * 2);

    var imgPath = $('*').map(function(ndx, element) {
        var background = $(element).css('background-image'),
            img = $(element).is('img'),
            path = '';

            if (background != 'none') {
                path = background.replace('url("', '').replace('")', '');
            }

            if (img) {
                path = $(element).attr('src');
            }

            if (path) return path

    });

    var setPercent = function (total, current) {
        var percents = Math.ceil(current / total * 100);

        $('.preloader__percents').text(percents + '%');

        if (percents >= 100) {
            preloader.fadeOut();
        }
    }

    var loadImages = function (images) {

        if (!images.length) preloader.fadeOut();

        images.forEach(function (img, i, images) {
            var fakeImage = $('<img>', {
                attr : {
                    src : img
                }
            });

            fakeImage.on('load error', function() {
                percentTotal++;
                setPercent(images.length, percentTotal);

            });
        });
    }

        return {
            init : function () {
                var imgs = imgPath.toArray();

                loadImages(imgs);
            }
        }
})();

$(function () {
    preloader.init();
});
