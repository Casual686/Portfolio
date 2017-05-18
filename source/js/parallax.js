var parallax = (function () {

    var parallaxContainer = document.getElementById('parallax');
    if (parallaxContainer) {


        layers = parallaxContainer.children;

        var mouseLayers = function (e) {

                var initialX = (window.innerWidth / 2) -  e.pageX,
                    initialY = (window.innerHeight / 2) - e.pageY;


                [].slice.call(layers).forEach(function (layer, i) {
                    var
                        divider = i / 100,
                        positionX = initialX * divider,
                        positionY = initialY * divider,
                        bottomPosition = (window.innerHeight / 2) * divider,
                        layerStyle = layer.style,
                        transformString = 'translate3d(' + positionX + 'px ,' + positionY + 'px , 0)';


                    layerStyle.transform = transformString;
                    layerStyle.bottom = '-' + bottomPosition + 'px';

                });
        }


    window.addEventListener('mousemove', mouseLayers)
}

}());


var verticalParallax = (function () {
    var bg = document.querySelector('.hero__bg');
    var user = document.querySelector('.user');
    var sectionText = document.querySelector('.hero__pic');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)';

            var style = block.style;

            style.transform = transformString;
            style.webkiTransform = transformString;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 30);
            this.move(sectionText, wScroll, 20);
            this.move(user, wScroll, 3);

        }
    }

}());

window.onscroll = function () {
    var wScroll =window.pageYOffset;

       verticalParallax.init(wScroll);



}
