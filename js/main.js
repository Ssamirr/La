$(document).ready(function () {

    document.querySelectorAll('.owl-carousel-all').forEach(function(element){
        $(element).owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            items: 5,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            }
        });
    })

    $('.owl-carousel-most-view ').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: false,
    })

      $('.owl-carousel-advice-topic .item').each(function(index) {
    if (index % 2 == 0) { // wrap by 2 items
      $(this).add($(this).next('.item')).wrapAll('<div class="item__col" />');
    }
  });
    $('.owl-carousel-advice-topic').owlCarousel({
        loop: false,
        margin: 11,
        nav: true,
        items: 4,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    })


    var for_background_mobile = document.querySelector('.for-background-mobile');
    document.querySelector('.search-button-mobile').addEventListener('click', function () {
        let header_navbar = document.querySelector('.header-navbar');
        let search_in_mobile = document.querySelector('.search-in-mobile');
        document.querySelector('body').style.overflowY = "hidden";
        header_navbar.classList.add('d-none');
        search_in_mobile.classList.add('d-block');
        for_background_mobile.style.opacity = "1"
        for_background_mobile.style.visibility = "visible"
    })
    document.querySelector('.exit-icon-mobile ').addEventListener('click', function () {
        let header_navbar = document.querySelector('.header-navbar');
        let search_in_mobile = document.querySelector('.search-in-mobile');
        document.querySelector('body').style.overflowY = "scroll";
        header_navbar.classList.remove('d-none');
        search_in_mobile.classList.remove('d-block');
        for_background_mobile.style.opacity = "0"
        for_background_mobile.style.visibility = "hidden"
        for_background_mobile.style.transition = "opacity 0.3s"
    })


    var hamburger_menu = document.querySelector('.hamburger-menu');
    hamburger_menu.addEventListener('click',function(){
        document.querySelector('body').style.overflowY = "hidden";
        for_background_mobile.style.opacity = "1";
        for_background_mobile.style.visibility = "visible";
        document.querySelector('.header-navbar').style.zIndex='0';
        document.querySelector('.mobile-profile-menuu').style.left="0px"
    })

    var exit_icon_profile_menu  = document.querySelector('.exit-icon-profile-menuu');
    exit_icon_profile_menu.addEventListener('click',function(){
        document.querySelector('.mobile-profile-menuu').style.left="-330px"
        document.querySelector('.header-navbar').style.zIndex='1010';
        for_background_mobile.style.opacity = "0";
        for_background_mobile.style.visibility = "hidden";
    })

    var popular_topic_category = document.querySelector('.popular-topic-category')
    if(popular_topic_category){
        popular_topic_category.querySelectorAll('li').forEach(function(e){
        e.addEventListener('click',function(){
            popular_topic_category.querySelectorAll('li').forEach(function(element){
                element.classList.remove('active-li-a')
            })
            e.classList.add('active-li-a')
        })
    })
    }


});
