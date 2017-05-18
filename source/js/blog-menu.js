var blogMenu = (function () {



    var article = $('.article'),

        navMenu = $('.aside-nav'),
        menuLink = $('.aside-nav__item'),
        phonesMenuButton = $('.blog-navigation'),
        body = document.body,
        isPositionArticle = [],
        offsetHeight = 200,

        positionArticle = function (element) {
          var leng = element.length;
          for (let i = 0; i < leng; i++) {
            isPositionArticle[i] = {};
            isPositionArticle[i].top = element
              .eq(i)
              .offset()
              .top - offsetHeight;
            isPositionArticle[i].bottom = isPositionArticle[i].top + element
              .eq(i)
              .innerHeight();
          }
        },

        scrollPageFixMenu = function (e) {
          var scroll = window.pageYOffset;

            if (scroll < article.offset().top - 80) {
                navMenu.removeClass('fixed');
            }  else {
                navMenu.addClass('fixed');
            }


        },

        scrollPage = function (e) {
          var scroll = window.pageYOffset;
          for (let i = 0; i < isPositionArticle.length; i++) {
            if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
              menuLink
                .eq(i)
                .addClass('active')
                .siblings()
                .removeClass('active');
            }
          }
        },

        clickOnMenu = function (e) {
          var index = $(e.currentTarget).index();
          var sectionOffset = article
            .eq(index)
            .offset()
            .top;
          $(document).off('scroll', scrollPage);
          $('body, html').animate({
            'scrollTop': sectionOffset
          }, function () {
            $(e.currentTarget)
              .addClass('active')
              .siblings()
              .removeClass('active');
            $(document).on('scroll', scrollPage);
          });
        },

        clickOnPhoneButton = function (e) {
            navMenu.toggleClass('active');
        },

        addListener = function () {

                menuLink.on('click', clickOnMenu);

                phonesMenuButton.on('click', clickOnPhoneButton);

                $(document).on('scroll', scrollPage);


                $(document).on('scroll', scrollPageFixMenu);



                $(window).on('load', function (e) {
                    positionArticle(article);
                })

                $(window).on('resize', function (e) {
                    positionArticle(article);
                })

        }


    return {
        init: addListener
    }

})();

if($('.section').hasClass('blog')) {
    blogMenu.init();
}
