$(document).ready(function () {

    $.ajax({
        url: `http://64.225.98.172/api/course/categories/`,
        method: 'GET',
        success: function (response) {
            let category_menu_list = document.querySelector('.menu-list');
            let mobile_menu_list = document.querySelector('.mobile-menu-list');
            let all_categoriess = document.querySelector('.all-categoriess');

            for (let data of response) {
                // ................. for desktop............................
                let menu_list_li = document.createElement('li');
                menu_list_li.classList.add('menu-list-li');
                category_menu_list.appendChild(menu_list_li);
                let menu_list_li_a = document.createElement('a');
                menu_list_li_a.classList.add('d-flex', 'justify-content-between');
                menu_list_li_a.setAttribute('href', 'category.html');
                menu_list_li.appendChild(menu_list_li_a);
                let category_list_name = document.createElement('div');
                category_list_name.innerText = data.name;
                menu_list_li_a.appendChild(category_list_name);
                let category_list_name_right_icon = document.createElement('div');
                category_list_name_right_icon.classList.add('flex-align-center');
                menu_list_li_a.appendChild(category_list_name_right_icon);
                let list_angle_right = document.createElement('i');
                list_angle_right.classList.add('header-arrow-right', 'fa', 'fa-angle-right');
                list_angle_right.style.fontSize = "14px";
                list_angle_right.setAttribute('aria-hidden', 'true');
                category_list_name_right_icon.appendChild(list_angle_right);
                if (data.subcategories) {
                    let second_menu_list = document.createElement('ul');
                    second_menu_list.classList.add('second-menu-list');
                    menu_list_li.appendChild(second_menu_list);
                    for (let sub_category of data.subcategories) {
                        let second_menu_list_li = document.createElement('li');
                        second_menu_list_li.classList.add('second-menu-list-li');
                        second_menu_list.appendChild(second_menu_list_li);
                        let second_menu_list_li_a = document.createElement('a');
                        second_menu_list_li_a.classList.add('d-flex', 'justify-content-between');
                        second_menu_list_li_a.setAttribute('href', 'category.html');
                        second_menu_list_li.appendChild(second_menu_list_li_a);
                        let second_menu_list_li_a_name = document.createElement('div');
                        second_menu_list_li_a_name.innerText = sub_category.name;
                        second_menu_list_li_a.appendChild(second_menu_list_li_a_name);
                        let second_menu_list_right_icon = document.createElement('div');
                        second_menu_list_right_icon.classList.add('flex-align-center');
                        second_menu_list_li_a.appendChild(second_menu_list_right_icon);
                        let second_menu_list_angle_right = document.createElement('i');
                        second_menu_list_angle_right.classList.add('header-arrow-right', 'fa', 'fa-angle-right');
                        second_menu_list_angle_right.style.fontSize = "14px";
                        second_menu_list_angle_right.setAttribute('aria-hidden', 'true');
                        second_menu_list_right_icon.appendChild(second_menu_list_angle_right);

                        $.ajax({
                            url: `http://64.225.98.172/api/course/courses/`,
                            method: 'GET',
                            success: function (response) {
                                for (let item of response) {

                                    if (item.subcategory.id == sub_category.id) {
                                        if (!second_menu_list.querySelector('ul')) {
                                            var third_menu_list = document.createElement('ul');
                                            third_menu_list.classList.add('third-menu-list');
                                            second_menu_list_li.appendChild(third_menu_list);
                                        }
                                        let third_menu_list_li = document.createElement('li');
                                        third_menu_list.appendChild(third_menu_list_li);
                                        let third_menu_list_li_a = document.createElement('a');
                                        third_menu_list_li_a.setAttribute('href', '');
                                        third_menu_list_li_a.innerText = item.topic.name;
                                        third_menu_list_li.appendChild(third_menu_list_li_a);
                                    }
                                    console.log(item.topic.name)
                                }
                            },
                            error: function (error_response) {
                                alert('Error bas verdi');
                            }
                        })


                    }



                }
                // ...............................end............................

                // ...................for mobile..................................
                let mobile_menu_list_li = document.createElement('li');
                mobile_menu_list_li.classList.add('w-100');
                mobile_menu_list.appendChild(mobile_menu_list_li);
                let mobile_menu_list_li_a = document.createElement('a');
                mobile_menu_list_li_a.classList.add('sub-category-detaill', 'w-100', 'd-flex', 'align-items-center', 'justify-content-between');
                mobile_menu_list_li_a.setAttribute('href', 'javascript:void(0)');
                mobile_menu_list_li.appendChild(mobile_menu_list_li_a);
                let mobile_menu_list_name = document.createElement('span');
                mobile_menu_list_name.innerText = data.name;
                mobile_menu_list_li_a.appendChild(mobile_menu_list_name);
                let mobile_menu_list_name_right_icon = document.createElement('span');
                mobile_menu_list_li_a.appendChild(mobile_menu_list_name_right_icon);
                let mobile_menu_list_angle_right = document.createElement('i');
                mobile_menu_list_angle_right.classList.add('header-arrow-right', 'fa', 'fa-angle-right');
                mobile_menu_list_angle_right.style.fontSize = "14px";
                mobile_menu_list_angle_right.setAttribute('aria-hidden', 'true');
                mobile_menu_list_name_right_icon.appendChild(mobile_menu_list_angle_right);
                let mobile_sub_menu = document.createElement('div');
                mobile_sub_menu.classList.add('mobile-sub-menu');
                mobile_menu_list_li.appendChild(mobile_sub_menu);
                let mobile_sub_menu_first_div = document.createElement('div');
                mobile_sub_menu_first_div.style.overflowY = 'scroll';
                mobile_sub_menu_first_div.style.height = '100%';
                mobile_sub_menu.appendChild(mobile_sub_menu_first_div);
                let back_mobile_profile_menu = document.createElement('div');
                back_mobile_profile_menu.classList.add('back-mobile-profile-menu');
                mobile_sub_menu_first_div.appendChild(back_mobile_profile_menu);
                let back_mobile_profile_menu_icon = document.createElement('i');
                back_mobile_profile_menu_icon.classList.add('fa', 'fa-angle-left');
                back_mobile_profile_menu_icon.style.fontSize = "14px";
                back_mobile_profile_menu_icon.setAttribute('aria-hidden', 'true');
                back_mobile_profile_menu.appendChild(back_mobile_profile_menu_icon);
                let back_menu_name = document.createElement('span');
                back_menu_name.classList.add('ml-4');
                back_menu_name.innerText = 'Menu';
                back_mobile_profile_menu.appendChild(back_menu_name);
                let items_sub_profile_menuu = document.createElement('div');
                items_sub_profile_menuu.classList.add('items-sub-profile-menuu');
                mobile_sub_menu_first_div.appendChild(items_sub_profile_menuu);
                let items_sub_profile_menuu_ul = document.createElement('ul');
                items_sub_profile_menuu_ul.classList.add('w-100');
                items_sub_profile_menuu.appendChild(items_sub_profile_menuu_ul);
                let all_data_name = document.createElement('h6');
                all_data_name.classList.add('m-0');
                all_data_name.style.color = '#3c3b37';
                all_data_name.style.fontWeight = 'bold';
                all_data_name.style.width = '100%';
                all_data_name.style.padding = '8px 16px';
                all_data_name.innerText = `All ${data.name}`;
                items_sub_profile_menuu_ul.appendChild(all_data_name);
                for (let sub_category of data.subcategories) {
                    let items_sub_profile_menuu_ul_li = document.createElement('li');
                    items_sub_profile_menuu_ul_li.classList.add('w-100');
                    items_sub_profile_menuu_ul.appendChild(items_sub_profile_menuu_ul_li);
                    let items_sub_profile_menuu_ul_li_a = document.createElement('a');
                    items_sub_profile_menuu_ul_li_a.classList.add('w-100', 'd-flex', 'align-items-center', 'justify-content-between');
                    items_sub_profile_menuu_ul_li_a.setAttribute('href', 'javascript:void(0)');
                    items_sub_profile_menuu_ul_li.appendChild(items_sub_profile_menuu_ul_li_a);
                    let sub_category_name = document.createElement('span');
                    sub_category_name.innerText = sub_category.name;
                    items_sub_profile_menuu_ul_li_a.appendChild(sub_category_name);
                }

                mobile_menu_list_li_a.addEventListener('click', function () {
                    mobile_menu_list_li_a.closest('li').querySelector('.mobile-sub-menu').style.visibility = "visible";
                    mobile_menu_list_li_a.closest('li').querySelector('.mobile-sub-menu').style.maxWidth = "270px";
                    mobile_menu_list_li_a.closest('li').querySelector('.mobile-sub-menu').style.opacity = "1";
                    mobile_menu_list_li_a.closest('li').querySelector('.mobile-sub-menu').style.left = "0";
                })
                back_mobile_profile_menu.addEventListener('click', function () {
                    mobile_sub_menu.style.visibility = "hidden";
                    mobile_sub_menu.style.opacity = "0";
                    mobile_sub_menu.style.maxWidth = "0px";
                    mobile_sub_menu.style.left = "270px";
                })


                // ........................................down header..........................................
                if (all_categoriess) {
                    let list_itemss = document.createElement('li');
                    list_itemss.classList.add('list-inline-item', 'list-items');
                    all_categoriess.appendChild(list_itemss);
                    let list_items_a = document.createElement('a');
                    list_items_a.classList.add('tn-selected-category', 'list-items-a');
                    list_items_a.setAttribute('href', 'javascript:void(0)');
                    list_items_a.innerText = data.name;
                    list_itemss.appendChild(list_items_a);
                    let subcategory_list = document.createElement('ul');
                    subcategory_list.classList.add('list-inline', 'subcategory-list');
                    list_itemss.appendChild(subcategory_list);
                    for (let sub_category of data.subcategories) {
                        let list_inline_itemm = document.createElement('li');
                        list_inline_itemm.classList.add('list-inline-item');
                        subcategory_list.appendChild(list_inline_itemm);
                        let list_inline_itemm_a = document.createElement('a');
                        list_inline_itemm_a.classList.add('tn-selected-category');
                        list_inline_itemm_a.setAttribute('href', 'category.html');
                        list_inline_itemm_a.innerText = sub_category.name;
                        list_inline_itemm.appendChild(list_inline_itemm_a);
                    }
                }




            }

        },
        error: function (error_response) {
            alert('Error bas verdi');
        }
    })

    if (localStorage.getItem('token')) {
        let token = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        $.ajax({
            url: "http://64.225.98.172/api/account/auth/users/me/",
            method: 'GET',
            headers: token,
            success: function (response) {
                console.log(response);
            },
            error: function (error_response) {
                console.log(error_response)
            }
        })
    }


    document.querySelectorAll('.owl-carousel-all').forEach(function (element) {
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

    document.querySelectorAll('.owl-carousel-tutor').forEach(function (element) {
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

    $('.owl-carousel-advice-topic .item').each(function (index) {
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
    var search_button_mobile = document.querySelector('.search-button-mobile');
    if (search_button_mobile) {
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
    }



    var hamburger_menu = document.querySelector('.hamburger-menu');
    if (hamburger_menu) {
        hamburger_menu.addEventListener('click', function () {
            document.querySelector('body').style.overflowY = "hidden";
            for_background_mobile.style.opacity = "1";
            for_background_mobile.style.visibility = "visible";
            document.querySelector('.header-navbar').style.zIndex = '0';
            document.querySelector('.mobile-profile-menuu').style.left = "0px"
        })
    }


    var exit_icon_profile_menu = document.querySelector('.exit-icon-profile-menuu');
    if (exit_icon_profile_menu) {
        exit_icon_profile_menu.addEventListener('click', function () {
            document.querySelector('.mobile-profile-menuu').style.left = "-330px"
            document.querySelector('.header-navbar').style.zIndex = '1010';
            document.querySelector('body').style.overflowY = "scroll";
            for_background_mobile.style.opacity = "0";
            for_background_mobile.style.visibility = "hidden";
        })
    }


    var popular_topic_category = document.querySelector('.popular-topic-category')
    if (popular_topic_category) {
        popular_topic_category.querySelectorAll('li').forEach(function (e) {
            e.addEventListener('click', function () {
                popular_topic_category.querySelectorAll('li').forEach(function (element) {
                    element.classList.remove('active-li-a')
                })
                e.classList.add('active-li-a')
            })
        })
    }

    var sign_up_instructor_student = document.querySelector('.sign-up-instructor-student')
    if (sign_up_instructor_student) {
        sign_up_instructor_student.querySelectorAll('li').forEach(function (e) {
            e.addEventListener('click', function () {
                sign_up_instructor_student.querySelectorAll('li').forEach(function (element) {
                    element.classList.remove('active-li-a')
                })
                e.classList.add('active-li-a')
            })
        })
    }

    document.querySelectorAll('.left-side-filter-list').forEach(function (e) {
        e.querySelector('.listt').addEventListener('click', function () {
            console.log('1')
            // e.querySelector('.left-side-filter-input').style.display="block";
            e.querySelector('.left-side-filter-input').style.display = e.querySelector('.left-side-filter-input').style.display === 'none' ? 'block' : 'none';
            e.querySelector('i').classList.toggle("fa-angle-down-transform");
        })
    })

    document.querySelectorAll('.left-side-filter-input').forEach(function (elem) {

    })

    var button_filter = document.querySelector('.button-filter');
    if (button_filter) {
        button_filter.addEventListener('click', function () {
            document.querySelector('.left-side-filter').classList.toggle("left-side-filter-none");
            document.querySelector('.right-side-filter').classList.toggle("right-side-filter-block");
        })
    }

    var button_filter_mobile = document.querySelector('.button-filter-mobile');
    if (button_filter_mobile) {
        button_filter_mobile.addEventListener('click', function () {
            document.querySelector('.left-side-filter').style.right = "0px";
            document.querySelector('.exit-icon-left-side-filter').style.right = "280px"
            document.querySelector('body').style.overflowY = "hidden";
            for_background_mobile.style.opacity = "1"
            for_background_mobile.style.visibility = "visible"
        })
        document.querySelector('.exit-icon-left-side-filter').addEventListener('click', function () {
            document.querySelector('.left-side-filter').style.right = "-330px";
            document.querySelector('.exit-icon-left-side-filter').style.right = "-45px"
            document.querySelector('body').style.overflowY = "scroll";
            for_background_mobile.style.opacity = "0"
            for_background_mobile.style.visibility = "hidden"
        })
    }

    document.querySelectorAll('.course-click').forEach(function (e) {
        e.addEventListener('click', function () {
            if (e.closest('.section--panel--1tqxC').querySelector('span').getAttribute('data-checked') != 'checked') {
                e.closest('.section--panel--1tqxC').querySelector('span').setAttribute('data-checked', 'checked');
            }
            else {
                e.closest('.section--panel--1tqxC').querySelector('span').setAttribute('data-checked', '');
            }

        })
    })

    var all_section_course = document.querySelector('.all-sections-course')
    if (all_section_course) {
        all_section_course.addEventListener('click', function () {
            if (all_section_course.querySelector('span').innerHTML != 'Collapse all sections') {
                document.querySelectorAll('.section--panel--1tqxC').forEach(function (elem) {
                    elem.querySelector('span').setAttribute('data-checked', 'checked');
                })
                all_section_course.querySelector('span').innerHTML = 'Tüm bölümleri daralt';
            }
            else {
                document.querySelectorAll('.section--panel--1tqxC').forEach(function (elem) {
                    elem.querySelector('span').setAttribute('data-checked', '');
                })
                all_section_course.querySelector('span').innerHTML = 'Expand all sections';
            }
        })
    }


    document.querySelectorAll('.teacher-or-student').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelectorAll('.teacher-or-student').forEach(function (elem) {
                elem.classList.remove('active-education-list');
            })
            e.classList.add('active-education-list')
        })
    })

    document.querySelectorAll('.items-profile-menuu').forEach(function (e) {
        e.querySelectorAll('.sub-category-detaill').forEach(function (list) {
            list.addEventListener('click', function () {
                console.log('2')
                list.closest('li').querySelector('.mobile-sub-menu').style.visibility = "visible";
                list.closest('li').querySelector('.mobile-sub-menu').style.maxWidth = "270px";
                list.closest('li').querySelector('.mobile-sub-menu').style.opacity = "1";

                list.closest('li').querySelector('.mobile-sub-menu').style.left = "0";


            })
        })
    })

    document.querySelectorAll('.back-mobile-profile-menu').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelectorAll('.mobile-sub-menu').forEach(function (list) {
                list.style.visibility = "hidden";
                list.style.opacity = "0";
                list.style.maxWidth = "0px";
                list.style.left = "270px";

            })
        })
    })

    var main_section_profile_menu = document.querySelector('.main-section-profile-menuu')
    if (main_section_profile_menu) {
        main_section_profile_menu.querySelector('.sub-category-detaill').addEventListener('click', function () {
            this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.visibility = "visible";
            this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.left = "0";
            this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.maxWidth = "270px";
            this.closest('.main-section-profile-menuu').querySelector('.mobile-sub-menu').style.opacity = "1";
        })
    }



});


document.querySelectorAll('.sign-outt').forEach(function (e) {
    e.addEventListener('click', function () {
        event.preventDefault()
        localStorage.removeItem('token');
        window.location = 'index-unregister.html';
    })
})


document.querySelectorAll('.main-unregister').forEach(function (e) {
    e.addEventListener('click', function () {
        if (localStorage.getItem('token')) {
            event.preventDefault()
            window.location = 'index.html';
        }
        else {
            window.location = 'index-unregister.html';
            event.preventDefault()
        }
    })
})



/*add wishlist */
function addItemWishlist() {
    const item = "<div class='item mt-2'><a href='course-detail.html' class='row'><div class='course-card-image col-4'><img src='img/la.jpeg'></div><div class='course-card-main col-8'><div class='course-card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex!</div></div></a><div class='course-card-instructor'>LA Orujova</div><div class='course-card-price'><h2>10,99 $</h2> <del>129,99 $</del></div><div data-purpose='add-to-cart'><button type='button' class='udlite-btn udlite-btn-medium udlite-btn-secondary udlite-heading-sm add-to-cart' style='width:100%'>Add to cart</button></div></div>";
    $(".wishlist-item").append(item);
    $('.wishlist-none').css('display', 'none');
}
function addtocard(e) {
    const item = "<div class='item mt-2'><a href='course-detail.html' class='row'><div class='course-card-image col-4'><img src='img/la.jpeg'></div><div class='course-card-main col-8'><div class='course-card-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ex!</div></div></a><div class='course-card-instructor'>LA Orujova</div><div class='course-card-price'><h2>10,99 $</h2> <del>129,99 $</del></div><div data-purpose='add-to-cart'><button type='button' class='udlite-btn udlite-btn-medium udlite-btn-secondary udlite-heading-sm add-to-cart' style='width:100%'>Add to cart</button></div></div>";
    $(".wishlist-item").append(item);
}