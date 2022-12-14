
(function($) {
    // 'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    $(".countdown").countdown("2022/09/05", function (event) {
      $(".dday").html(event.strftime("%D") + "<span>Ngày</span>");
      $(".dhour").html(event.strftime("%H") + "<span>Giờ</span>");
      $(".dmin").html(event.strftime("%M") + "<span>Phút</span>");
      $(".dsec").html(event.strftime("%S") + "<span>Giây</span>");
    });

    // Load more events
    var $container      = $('.events-list');
    var $item           = $('.single-event');

    $item.slice(0, 6).addClass('visible');

    $('.load-more-btn a').on('click', function (e) {
        e.preventDefault();

        $('.single-event:hidden').slice(0, 6).addClass('visible');
        $container.masonry('layout');
    });

    // Events Page
    $container.masonry({
        itemSelector: '.single-event'
    });

    // Buy Tickets Form
    $(".increase-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-ticket")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        $n.val(Number($n.val())+1 );
    });

    $(".decrease-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-ticket")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });

    $(".clear-ticket-count").on( 'click', function() {
        var $count = $('.ticket-count');
        $count.val('1');
    });

    // Tabs
    $(function() {
        $('.tab-content:first-child').show();

        $('.tab-nav').bind('click', function(e) {
            $this = $(this);
            $tabs = $this.parent().parent().next();
            $target = $($this.data("target"));
            $this.siblings().removeClass('active');
            $target.siblings().css("display", "none");
            $this.addClass('active');
            $target.fadeIn("slow");
        });

        $('.tab-nav:first-child').trigger('click');
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

    // Circular Progress Bar
    $('#festivals').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 124,
        fill: {
            gradient: ["#581687", "#ab00ff"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
    });

    $('#concerts').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.83,
        size: 124,
        fill: {
            gradient: ["#581687", "#ab00ff"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(83 * progress) + '<i>%</i>');
    });

    $('#conference').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.25,
        size: 124,
        fill: {
            gradient: ["#581687", "#ab00ff"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(25 * progress) + '<i>%</i>');
    });

    $('#new_artists').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.82,
        size: 124,
        fill: {
            gradient: ["#581687", "#ab00ff"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(82 * progress) + '<i>%</i>');
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

    // Back to Top
    if ( $( '.back-to-top' ).length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });
    }

})(jQuery);