$(document).ready(function () {

    const svg_rightt = `<svg width="18" height="45" viewBox="0 0 16 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5L17 27.7432L1 56.5" stroke="#DCDACB" /></svg>`

    var url_string = "http://64.225.98.172/api/course/category/1"; //window.location.href
    // var url = new URL(url_string);
    // var c = url.searchParams.get("c");
    url_string = url_string.split('/')
    url_string_id = url_string.slice(-1)[0]
    console.log(url_string);
    console.log(url_string_id);

    $.ajax({

        url: `http://64.225.98.172/api/course/category/${url_string_id}`,
        method: 'GET',
        success: function (response) {
            let categories_name_ul = document.querySelector('.categories-name-ul');
            let main_name_category = document.querySelector('.main-name-category');
            let div_categories_name_ul = document.querySelector('.div-categories-name-ul');
            main_name_category.innerHTML = response.name + svg_rightt;
            document.querySelector('.courses-namee').innerText = response.name + ' Courses';

            // let div_categories_name_ul = document.createElement('div');
            // div_categories_name_ul.classList.add('h-100', 'align-items-center', 'd-flex', 'div-categories-name-ul');


            if (response.subcategories.length > 5) {
                var more_categories = document.createElement('div');
                more_categories.classList.add('more-categories');
                categories_name_ul.appendChild(more_categories);
                var more_categories_ellipsis = document.createElement('i');
                more_categories_ellipsis.classList.add('fa', 'fa-ellipsis-v');
                more_categories.appendChild(more_categories_ellipsis);
                var more_categories_info = document.createElement('div');
                more_categories_info.classList.add('more-categories-info');
                more_categories.appendChild(more_categories_info);
                var more_categories_info_ul = document.createElement('ul');
                more_categories_info.appendChild(more_categories_info_ul);

                categories_name_ul.classList.add('justify-content-between');
            }
            else {
                categories_name_ul.classList.remove('justify-content-between')
            }

            for (let i in response.subcategories) {
                if (i <= 4) {
                    let categories_li = document.createElement('li');
                    div_categories_name_ul.appendChild(categories_li);
                    let categories_li_a = document.createElement('a');
                    categories_li_a.setAttribute('href', '');
                    categories_li_a.innerText = response.subcategories[i].name
                    categories_li.appendChild(categories_li_a);
                }
                else {
                    let more_categories_li = document.createElement('li');
                    more_categories_info_ul.appendChild(more_categories_li);
                    let more_categories_li_a = document.createElement('a');
                    more_categories_li_a.setAttribute('href', '');
                    more_categories_li_a.innerText = response.subcategories[i].name;
                    more_categories_li.appendChild(more_categories_li_a);
                }


            }
        },
        error: function (error_response) {
            alert('Error bas verdi');
        }
    })


    $.ajax({

        url: `http://64.225.98.172/api/course/courses/`,
        method: 'GET',
        success: function (response) {
            let count_course = 0;
            for (let item of response) {
                if (item.category.id == url_string_id) {
                    count_course += 1;
                    $.ajax({
                        url: `http://64.225.98.172/api/course/${item.id}`,
                        method: 'GET',
                        success: function (response) {
                            console.log(response)
                            let right_side_course = document.createElement('div');
                            right_side_course.classList.add('right-side-courses', 'd-md-flex');
                            document.querySelector('.right-side-filter').appendChild(right_side_course);
                            let right_side_course_a = document.createElement('a');
                            right_side_course_a.classList.add('d-md-flex', 'w-100');
                            right_side_course_a.setAttribute('href', '');
                            right_side_course.appendChild(right_side_course_a);
                            let course_card_img = document.createElement('div');
                            course_card_img.classList.add('col-md-4', 'p-0', 'course-card-image');
                            right_side_course_a.appendChild(course_card_img);
                            let in_course_card_img = document.createElement('img');
                            in_course_card_img.classList.add('h-100');
                            in_course_card_img.setAttribute('src', response.preview_image);
                            course_card_img.appendChild(in_course_card_img);
                            let course_card_main = document.createElement('div');
                            course_card_main.classList.add('col-md-8', 'course-card-main');
                            right_side_course_a.appendChild(course_card_main);
                            let course_card_title = document.createElement('div');
                            course_card_title.classList.add('course-card-title');
                            course_card_title.innerText = response.subtitle;
                            course_card_main.appendChild(course_card_title);
                            let course_advice = document.createElement('div');
                            course_advice.classList.add('course-advice');
                            course_advice.innerText = response.description;
                            course_card_main.appendChild(course_advice);
                            let course_card_instructor = document.createElement('div');
                            course_card_instructor.classList.add('course-card-instructor');
                            course_card_instructor.innerText = `By ${response.author.first_name} ${response.author.last_name}`;
                            course_card_main.appendChild(course_card_instructor);
                            let course_other_details = document.createElement('div');
                            course_card_main.appendChild(course_other_details);
                            course_other_details.innerHTML = `<span style="color: #2d8643;font-size:12px">Updated</span> <strong style="color: #2d8643;font-size:12px;">January 2021</strong> <span class="text-style">6,5 total hours </span> <span class="text-style">· 127 lessons</span> <span class="text-style">· Beginner</span>`;
                            let course_card_stars = document.createElement('div');
                            course_card_stars.classList.add('course-card-stars');
                            course_card_main.appendChild(course_card_stars);
                            course_card_stars.innerHTML = `
                            <span class="course-card-points">5,0</span>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <span class="course-card-students">(245)</span>`;
                            let course_card_price = document.createElement('div');
                            course_card_price.classList.add('course-card-price');
                            course_card_price.style.bottom = "0px";
                            course_card_main.appendChild(course_card_price);
                            course_card_price.innerHTML = `<h2 class="m-0">100 $</h2> <del>200 $</del>`;



                        },
                        error: function (error_response) {
                            alert('Error bas verdi');
                        }
                    })


                }
            }
            document.querySelector('.count-coursee').querySelector('span').innerText = count_course + ' results';
            document.querySelector('.count-coursee-mobile').querySelector('span').innerText = count_course + ' results';
        },
        error: function (error_response) {
            alert('Error bas verdi');
        }

    })



})