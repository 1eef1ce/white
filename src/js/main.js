$( document ).ready(function() {
    $('.info-block').on('show.bs.collapse', function () {
        $(this).addClass('active');
    })
    $('.info-block').on('hide.bs.collapse', function () {
        $(this).removeClass('active');
    });

    $(window).resize(function () {
        var marginLeft = $('section:nth-of-type(2) .container').css('margin-left');
        var marginRow = $('section:nth-of-type(2) .container .row').css('margin-left');
        var containerLeft = {
            'margin-left': marginLeft,
            'margin-right': '0',
        };
        var containerRight = {
            'margin-right': marginLeft,
            'margin-left': '0',
        };
        var containerLeftRight = {
            'margin-left': marginLeft,
            'margin-right': marginLeft,
        };
        var containerLeftVar = {
            'margin-left': marginLeft,
            'max-width': 'calc(100% - '+marginLeft+')'
        };
        var containerLeftVar1 = {
            'margin-left': marginLeft,
            'max-width': 'calc(100% - '+marginLeft+' + 2*'+marginRow+')'
        };

        $('.section-specialists .container').css(containerLeftVar1);

        if ($(window).width() > 999) {
            $('.section-info .container').css(containerLeftVar);
            $('.section-online .container-inner').css(containerLeft);
            $('.section-online .container-inner-left').css(containerLeft);
            $('.section-online .container-inner-right').css(containerRight);
            $('.case-services .container-inner-left').css(containerLeft);
            $('.case-services .container-inner-right').css(containerRight);
        }
        else if ($(window).width() > 639) {
            $('.section-info .container').removeAttr('style');
            $('.section-online .container-inner').css(containerLeftRight);
            $('.section-online .container-inner-left').css(containerLeft);
            $('.section-online .container-inner-right').css(containerRight);
            $('.case-services .container-inner-left').css(containerLeftRight);
            $('.case-services .container-inner-right').css(containerLeftRight);
        }
        else {
            $('.section-online .container-inner').css(containerLeftRight);
            $('.section-online .container-inner-left').css(containerLeftRight);
            $('.section-online .container-inner-right').css(containerLeftRight);
            $('.case-services .container-inner-left').css(containerLeftRight);
            $('.case-services .container-inner-right').css(containerLeftRight);
        }
    }).resize();

    swiperFeedback = new Swiper ('.swiper-feedback', {
        navigation: {
            nextEl: '.feedback-nav-next',
            prevEl: '.feedback-nav-prev',
        },
        pagination: {
            el: '.feedback-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<span>' + ('0' + current).slice(-2) + '</span>' + ' / ' + ('0' + total).slice(-2);
            },
        }
    });

    swiperImgMain = new Swiper ('.swiper-img-main',{

    });
    swiperImgTech = new Swiper ('.swiper-img-tech',{

    });
    swiperImgReview = new Swiper ('.swiper-img-review',{
        slidesPerView: 2,
        centeredSlides: true,
    });

    swiperText = new Swiper ('.swiper-text', {
        navigation: {
            nextEl: '.text-nav-next',
            prevEl: '.text-nav-prev',
        },
        pagination: {
            el: '.text-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<span>' + ('0' + current).slice(-2) + '</span>' + ('0' + total).slice(-2);
            },
        },
        autoplay: {
            delay: 5000,
        },
    });

    var autoplay = 5000;
    swiperText.on('progress', function () {
        var elem = document.getElementById("progress");
        var width = 1;
        var autoplayTime = autoplay / 100;
        var id = setInterval(frame, autoplayTime);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    });

    if((swiperImgMain.width > 0)&&(swiperText.width > 0)) {
        swiperImgMain.controller.control = swiperText;
        swiperText.controller.control =swiperImgMain;
    }
    if((swiperImgTech.width > 0)&&(swiperText.width > 0)) {
        swiperImgTech.controller.control = swiperText;
        swiperText.controller.control =swiperImgTech;
    }
    if((swiperImgReview.width > 0)&&(swiperFeedback.width > 0)) {
        swiperImgReview.controller.control = swiperFeedback;
        swiperFeedback.controller.control =swiperImgReview;
    }

    $(window).resize(function () {

        var firstColumn = $('.price-table tr td:first-of-type');
        var lastColumn = $('.price-table tr td:last-of-type');
        var firstColumnA = $('.price-table tr td:first-of-type a');
        var lastColumnA = $('.price-table tr td:last-of-type a');

        if($(window).width() < 640) {
            lastColumnA.each(function (i) {
                firstColumn.eq(i).append($(this));
            });
        }
        else {
            firstColumnA.each(function (i) {
                lastColumn.eq(i).append($(this));
            });
        }
    }).resize();

});