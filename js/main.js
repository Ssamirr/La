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

    document.querySelectorAll('.owl-carousel-tutor').forEach(function(element){
        $(element).owlCarousel({
            loop: false,
            margin: 11,
            nav: true,
            items: 5,
            autoplay: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                888: {
                    items: 3,
                },
                1200: {
                    items: 4,
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
        document.querySelector('body').style.overflowY = "scroll";
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

    var sign_up_instructor_student = document.querySelector('.sign-up-instructor-student')
    if(sign_up_instructor_student){
        sign_up_instructor_student.querySelectorAll('li').forEach(function(e){
        e.addEventListener('click',function(){
            sign_up_instructor_student.querySelectorAll('li').forEach(function(element){
                element.classList.remove('active-li-a')
            })
            e.classList.add('active-li-a')
        })
    })
    }

    document.querySelectorAll('.left-side-filter-list').forEach(function(e){
        e.querySelector('.listt').addEventListener('click',function(){
            console.log('1')
            // e.querySelector('.left-side-filter-input').style.display="block";
            e.querySelector('.left-side-filter-input').style.display = e.querySelector('.left-side-filter-input').style.display === 'none' ? 'block' : 'none';
            e.querySelector('i').classList.toggle("fa-angle-down-transform");
        })
    })

    document.querySelectorAll('.left-side-filter-input').forEach(function(elem){

    })

    var button_filter = document.querySelector('.button-filter');
    if (button_filter){
        button_filter.addEventListener('click',function(){
            document.querySelector('.left-side-filter').classList.toggle("left-side-filter-none");
            document.querySelector('.right-side-filter').classList.toggle("right-side-filter-block");
        })
    }

    var button_filter_mobile = document.querySelector('.button-filter-mobile');
    if(button_filter_mobile){
        button_filter_mobile.addEventListener('click',function(){
            document.querySelector('.left-side-filter').style.right="0px";
            document.querySelector('.exit-icon-left-side-filter').style.right="280px"
            document.querySelector('body').style.overflowY = "hidden";
            for_background_mobile.style.opacity = "1"
            for_background_mobile.style.visibility = "visible"
        })
        document.querySelector('.exit-icon-left-side-filter').addEventListener('click',function(){
            document.querySelector('.left-side-filter').style.right="-330px";
            document.querySelector('.exit-icon-left-side-filter').style.right="-45px"
            document.querySelector('body').style.overflowY = "scroll";
            for_background_mobile.style.opacity = "0"
            for_background_mobile.style.visibility = "hidden"
        })
    }

    document.querySelectorAll('.course-click').forEach(function(e){
        e.addEventListener('click',function(){
            if (e.closest('.section--panel--1tqxC').querySelector('span').getAttribute('data-checked')!='checked'){
                e.closest('.section--panel--1tqxC').querySelector('span').setAttribute('data-checked','checked');
            }
            else{
                e.closest('.section--panel--1tqxC').querySelector('span').setAttribute('data-checked','');
            }
            
        })
    })

    var all_section_course = document.querySelector('.all-sections-course')
    if(all_section_course){
        all_section_course.addEventListener('click',function(){
            if(all_section_course.querySelector('span').innerHTML!='Tüm bölümleri daralt'){
                document.querySelectorAll('.section--panel--1tqxC').forEach(function(elem){
                    elem.querySelector('span').setAttribute('data-checked','checked');
                })
                all_section_course.querySelector('span').innerHTML='Tüm bölümleri daralt';
            }
            else{
                document.querySelectorAll('.section--panel--1tqxC').forEach(function(elem){
                    elem.querySelector('span').setAttribute('data-checked','');
                })
                all_section_course.querySelector('span').innerHTML='Tüm bölümleri genişlet';
            }
    })
    }
    

    document.querySelectorAll('.teacher-or-student').forEach(function(e){
        e.addEventListener('click',function(){
            document.querySelectorAll('.teacher-or-student').forEach(function(elem){
                elem.classList.remove('active-education-list');
            })
        e.classList.add('active-education-list')
        })
    })

    document.querySelectorAll('.items-profile-menuu').forEach(function(e){
        e.querySelectorAll('.sub-category-detaill').forEach(function(list){
            list.addEventListener('click',function(){
                    list.closest('li').querySelector('.mobile-sub-menu').style.visibility="visible";
                    list.closest('li').querySelector('.mobile-sub-menu').style.maxWidth="270px";
                    list.closest('li').querySelector('.mobile-sub-menu').style.opacity="1";

                    list.closest('li').querySelector('.mobile-sub-menu').style.left="0";
                
                
            })
        })
    })

    document.querySelectorAll('.back-mobile-profile-menu').forEach(function(e){
        e.addEventListener('click',function(){
            document.querySelectorAll('.mobile-sub-menu').forEach(function(list){
                list.style.visibility="hidden";
                list.style.opacity="0";
                list.style.maxWidth="0px";
                list.style.left="270px";

            })
        })
    })

    document.querySelector('.main-section-profile-menuu').querySelector('.sub-category-detaill').addEventListener('click',function(){
        this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.visibility="visible";
        this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.left="0";
        this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.maxWidth="270px";
        this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.opacity="1";
    })


});


/*add wishlist */
function addItemWishlist(){
    const item = "<div class='item mt-2'><a href='course-detail.html' class='row'><div class='course-card-image col-4'><img src='img/la.jpeg'></div><div class='course-card-main col-8'><div class='course-card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex!</div></div></a><div class='course-card-instructor'>LA Orujova</div><div class='course-card-price'><h2>10,99 $</h2> <del>129,99 $</del></div><div data-purpose='add-to-cart'><button type='button' class='udlite-btn udlite-btn-medium udlite-btn-secondary udlite-heading-sm add-to-cart' style='width:100%'>Add to cart</button></div></div>";
    $( ".wishlist-item" ).append( item );
}
function addtocard(){
    alert($(this).val());
}