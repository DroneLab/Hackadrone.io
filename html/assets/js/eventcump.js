// JavaScript Document

(function ($) {
    "use strict";

/* ==================================================================
 Preloader
 ================================================================== */
$(window).load(function () {
    $(".loader").fadeOut("slow");
});


/////////////////////////////////////////////////////////////////
// Map/Form Switcher
/////////////////////////////////////////////////////////////////

$(".map-form-switcher .switcher-toggle").on('click', function (e) {
    e.preventDefault();
    $('.maingoo-map .quick-con-form').fadeToggle("300", "linear");
    $('.maingoo-map').toggleClass("map-active");
});


/* ==================================================================
 Counter
 ================================================================== */
$('.counter-section').waypoint(function (direction) {
    $('.count').countTo({
        speed: 3500
    });
    this.destroy()
}, {
    offset: 'bottom-in-view'
});

// Resize
$(function () {


    var appendthis = ("<div class='modal-overlay js-modal-close'></div>");

    $('a[data-modal-id]').click(function (e) {
        e.preventDefault();
        $("body").append(appendthis);
        $(".modal-overlay").fadeTo(1200, 0.9);
        //$(".js-modalbox").fadeIn(500);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());
    });


    $(".js-modal-close, .modal-overlay").click(function () {
        $(".modal-box, .modal-overlay").fadeOut(500, function () {
            $(".modal-overlay").remove();
        });

    });

    $(window).resize(function () {
        $(".modal-box").css({
            top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
            left: ($(window).width() - $(".modal-box").outerWidth()) / 2
        });
    });

    $(window).resize();


    var status1 = $("#callback-page1");
    var status2 = $("#callback-page2");
    var status3 = $("#callback-page3");

    $("#MyModal").modal();


    function callback1(event) {

        var items = event.item.count;
        var item = event.item.index + 1;
        updateResult1(".currentItem", item);
        updateResult1(".owlItems", items);
    }

    function callback2(event) {

        var items = event.item.count;
        var item = event.item.index + 1;
        updateResult2(".currentItem", item);
        updateResult2(".owlItems", items);
    }

    function callback3(event) {

        var items = event.item.count;
        var item = event.item.index + 1;


        updateResult3(".currentItem", item);
        updateResult3(".owlItems", items);


    }

    function updateResult1(pos, value) {
        status1.find(pos).find(".result").text(value);
    }

    function updateResult2(pos, value) {
        status2.find(pos).find(".result").text(value);
    }

    function updateResult3(pos, value) {
        status3.find(pos).find(".result").text(value);
    }


    $(".cms-rtl .owl-carousel").each(function (index, el) {
        var config = $(this).data();
        config.navText = ['', ''];
        config.smartSpeed = "800";
        config.rtl = "true";

        if ($(this).hasClass('dotsData')) {
            config.dotsData = "true";
        }
        if ($(this).hasClass('callback-page1')) {
            config.onChanged = callback1;
        }
        if ($(this).hasClass('callback-page2')) {
            config.onChanged = callback2;
        }
        if ($(this).hasClass('callback-page3')) {
            config.onChanged = callback3;
        }
        $(this).owlCarousel(config);

    });

    $(".owl-carousel").each(function (index, el) {
        var config = $(this).data();
        config.navText = ['', ''];
        config.smartSpeed = "800";

        if ($(this).hasClass('dotsData')) {
            config.dotsData = "true";
        }
        if ($(this).hasClass('callback-page1')) {
            config.onChanged = callback1;
        }
        if ($(this).hasClass('callback-page2')) {
            config.onChanged = callback2;
        }
        if ($(this).hasClass('callback-page3')) {
            config.onChanged = callback3;
        }

        $(this).owlCarousel(config);

    });

	//testimonial-slider

    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        autoPlay: false
    });


    //portfolio popup
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            // options for image content type
            titleSrc: 'title'
        }
    });


    $(window).on("resize.showContent", function () {
        var windowsize = $(window).width();
        if (windowsize <= 767) {

            $('.counter-section').waypoint(function (direction) {
                $('.count').countTo({
                    speed: 3500
                });
                this.destroy()
            }, {
                offset: '25%'
            });

        }
    }).trigger("resize.showContent")
});


$('#myModal').on('show.bs.modal', function (e) {
    if (!data) return e.preventDefault() // stops modal from being shown
})


/* Program Section */
$('.program-section').each(function () {
    var $this = $(this);
    var myVal = $(this).data("value");

    $this.appear(function () {
        $('.program-section > .section-header').addClass('animated fadeInRight');
        $('.program-section .container .program').addClass('animated fadeInLeft');
    });
});


//Tabs
$('.schedule-box .tab-btn').on('click', function () {
    var target = $($(this).attr('data-id'));
    $('.schedule-box .tab-btn').removeClass('active');
    $(this).addClass('active');
    $('.schedule-box .tab').fadeOut(0);
    $('.schedule-box .tab').removeClass('current');
    $(target).fadeIn(300);
    $(target).addClass('current');
    var windowWidth = $(window).width();
    if (windowWidth <= 700) {
        $('html, body').animate({
            scrollTop: $('.tabs-box').offset().top
        }, 1000);
    }
});

//Accordion
$('.schedule-box .hour-box .toggle-btn').on('click', function () {
    var target = $($(this).next('.content-box'));
    $(this).toggleClass('active');
    $(target).slideToggle(300);
    $(target).parents('.hour-box').toggleClass('active-box');
});


var sections = $(".section");
var navigation_links = $("#scrollnav a.scroll");

sections.waypoint({
    handler: function (event, direction) {

        var active_section;
        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();

        var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
        navigation_links.removeClass("selected");
        active_link.addClass("selected");

    },
    offset: '25%'
})


navigation_links.on('click', function (event) {

    $.scrollTo(
        $(this).attr("href"),
        {
            duration: 1200,
            offset: {'left': 0, 'top': -40}
        }
    );
    return false;
});


})(jQuery);	
	