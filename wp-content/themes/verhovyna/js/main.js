$(document).ready(function () {
    // Add counter to condition_box
    let regime_page = document.getElementsByClassName('regime_first');
    if (regime_page.length > 0) {
        let condition_box = document.getElementsByClassName('condition_box');
        for (let i = 0; i < condition_box.length; i++) {
            let span = condition_box[i].getElementsByTagName('span');
            span[0].innerText = `0${i+1}`;
        }
        let cond = document.getElementsByClassName('flex_container');
        let cond_last = cond[cond.length - 1].getElementsByClassName('condition_box');
        for (let i = 0; i < cond_last.length; i++) {
            let span = cond_last[i].getElementsByTagName('span');
            span[0].innerText = `0${i+1}`;
            span[0].classList.add("counter_span");
        }
    }

    let regime_page_two = document.getElementsByClassName('regime_second');
    if (regime_page_two.length > 0) {
        let condition_box = document.getElementsByClassName('condition_box');
        for (let i = 0; i < condition_box.length; i++) {
            let span = condition_box[i].getElementsByTagName('span');
            span[0].innerText = `0${i+1}`;
        }
    }

    // Accordeon
    let acc_head = document.getElementsByClassName('acc_head');
    for (i = 0; i < acc_head.length; i++) {
        acc_head[i].addEventListener('click', function (e) {
            // let acc_box = document.getElementsByClassName('accordeon_box');
            this.parentElement.classList.toggle('open')
        });
    }

    // Slider with documents
    $('.slider').slick({
        slidesToShow: 1,
        nextArrow: `<div class='next_slide'></div>`,
        prevArrow: `<div class='prev_slide'></div>`,
        arrows: false,
        dots: false
    });

    // Adaptive image
    function imgHeight(classPhotoWrap, correlation) {
        let imgList = document.getElementsByClassName(classPhotoWrap);
        let width = imgList[0].offsetWidth;
        let height = width * correlation;
        for (i = 0; i < imgList.length; i++) {
            imgList[i].style.height = `${height}px`;
        }
    }
    let flex = document.getElementsByClassName('flex_container');
    let img_box = document.getElementsByClassName('img_box');
    let square = document.getElementsByClassName('square');
    let doc = document.getElementsByClassName('document_img');

    if (window.innerWidth >= 360 && window.innerWidth <= 1024 && square.length > 0) {
        let imgList = document.getElementsByClassName('square');
        let width = imgList[3].offsetWidth;
        let height = width * 1
        for (i = 0; i < imgList.length; i++) {
            imgList[i].style.height = `${height}px`;
        }
    }
    if (doc.length > 0) {
        imgHeight('document_img', '1.22');
    }
    if (window.innerWidth <= 1024 && flex.length > 0) {
        imgHeight('img_flex_wrapper', '0.6');
    }
    if (window.innerWidth <= 1220 && img_box.length > 0) {
        imgHeight('img_box', '1.39');
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1024 && flex.length > 0) {
            imgHeight('img_flex_wrapper', '0.6');
        }
        if (window.innerWidth <= 1220 && img_box.length > 0) {
            imgHeight('img_box', '1.39');
        }
        if (square.length > 0 && window.innerWidth <= 1024) {
            let imgList = document.getElementsByClassName('square');
            let width = imgList[3].offsetWidth;
            let height = width * 1
            for (i = 0; i < imgList.length; i++) {
                imgList[i].style.height = `${height}px`;
            }
        }
        if (window.innerWidth <= 1024 && doc.length > 0) {
            imgHeight('document_img', '1.22');
        }
        if (doc.length > 0) {
            imgHeight('document_img', '1.22');
        }
    });

    // navigation scroll
    let about_us_page = document.querySelectorAll('.about_us_page')

    if (about_us_page.length > 0) {
        let list = document.querySelectorAll('.nav_sticky li');
        let sections = document.querySelectorAll('.about_us');
        list.forEach((item, index) => {});
        $(document).on('click', 'li[data-li-number]', function (event) {
            event.preventDefault();
            sectionNumber = this.getAttribute('data-li-number');
            let top = sections[sectionNumber].offsetTop;
            $('html, body').animate({
                scrollTop: top + window.innerHeight - 87
            }, 1500);
        });

        let trackers = document.querySelectorAll('.tracker');
        window.onscroll = (() => {
            trackers.forEach((item, index) => {
                let position = item.getBoundingClientRect();
                if (position.top >= 0 &&
                    position.left >= 0 &&
                    position.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                    position.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                    list.forEach((itemList) => {
                        itemList.classList.remove('active')
                    })
                    list[index].classList.add('active')
                }
            })
        })
    }


    // //  Map tabs
    if (about_us_page.length > 0) {
        const tab = function () {
            let tabNav = document.querySelectorAll('.choose_country'),
                tabContent = document.querySelectorAll('.location_body'),
                maps = document.querySelectorAll('.map_box');
            tabNav.forEach((item) => {
                item.addEventListener('click', selectTabNav)
            });

            function selectTabNav() {
                tabNav.forEach((choose) => {
                    choose.classList.remove('active');
                });
                tabNumber = this.getAttribute('data-tab-number');
                tabNav[tabNumber].classList.add('active');
                tabContent.forEach((item) => {
                    item.classList.remove('active')
                });
                tabContent[tabNumber].classList.add('active')
                maps.forEach((item) => {
                    item.classList.remove('active')
                });
                maps[tabNumber].classList.add('active')
            }
        };

        tab();
    }
    let contact_page = document.querySelectorAll('.contacts');
    if (contact_page.length > 0) {

        const tab = function () {
            let tabNav = document.querySelectorAll('.choose_country'),
                tabContent = document.querySelectorAll('.location_body'),
                maps = document.querySelectorAll('.map_box');
            tabNav.forEach((item) => {
                item.addEventListener('click', selectTabNav)
            });

            function selectTabNav() {
                tabNav.forEach((choose) => {
                    choose.classList.remove('active');
                });
                tabNumber = this.getAttribute('data-tab-number');
                tabNav[tabNumber].classList.add('active');
                tabContent.forEach((item) => {
                    item.classList.remove('active')
                });
                tabContent[tabNumber].classList.add('active')
                maps.forEach((item) => {
                    item.classList.remove('active')
                });
                maps[tabNumber].classList.add('active')
            }
        };

        tab();
    }
    // Lightbox
    // $('#light').slickLightbox({});


})



var ModalEffects = (function () {

    function init() {

        var overlay = document.querySelector('.md-overlay');

        [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {

            var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                close = modal.querySelector('.md-close');

            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-show');

                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
            }

            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }

            el.addEventListener('click', function (ev) {
                classie.add(modal, 'md-show');
                overlay.removeEventListener('click', removeModalHandler);
                overlay.addEventListener('click', removeModalHandler);

                if (classie.has(el, 'md-setperspective')) {
                    setTimeout(function () {
                        classie.add(document.documentElement, 'md-perspective');
                    }, 25);
                }
            });

            close.addEventListener('click', function (ev) {
                ev.stopPropagation();
                removeModalHandler();
            });
        });
    }

    init();

    $(document).ready(function () {
        $('[data-modal]').click(function (event) {
            event.stopPropagation();
            $('.modal').toggleClass('show');
            $('body').addClass('stop_scroll')
        })
        $('.close_modal').on('click', function () {
            $('.modal').toggleClass('show');
            $('body').removeClass('stop_scroll')
        })
        $('.document_img').on('click', function () {
            $('body').addClass('stop_scroll')

        })
        $('body').on('click', '.slick-lightbox-slick-item', function (e) {
            $('body').removeClass('stop_scroll')
        })
    });
    // AOS.init();

})();