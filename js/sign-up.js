$(document).ready(function () {

// for-student-registration
    document.querySelector('#sign-up-student').addEventListener('submit', function (event) {
        event.preventDefault();
        let data_form = {};
        this.querySelectorAll('.form-inputs').forEach(element => {
            data_form[element.getAttribute('name')] = element.value;
        });
        document.querySelectorAll('#sign-up-student small').forEach((small_tag) => {
            small_tag.innerHTML = '';
          })

        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: `http://64.225.98.172/api/account/student/register/`,
            method: 'POST',
            data: JSON.stringify(data_form),

            success: function (response) {
                alert('You have successfully registered');
                console.log(response);
                window.location = 'login.html';
            },
            error: function (error_response) {
                alert('Try again');
                console.log(error_response);
                let error_messages = error_response.responseJSON;
                  for (let message_name in error_messages) {
                      console.log(message_name)
                    let input = document.querySelector(`#sign-up-student [name="${message_name}"`);
                    if (input) {
                      let small_tag = input.parentElement.querySelector('small');
                      small_tag.innerText = error_messages[message_name];
                    }
                  }

            }


        })


    })

// for-instructor-registration
document.querySelector('#sign-up-instructor').addEventListener('submit', function (event) {
    event.preventDefault();
    let data_form = {};
    this.querySelectorAll('.form-inputs').forEach(element => {
        data_form[element.getAttribute('name')] = element.value;
    });
    document.querySelectorAll('#sign-up-instructor small').forEach((small_tag) => {
        small_tag.innerHTML = '';
      })

    $.ajax({
        contentType: "application/json",
        dataType: "json",
        url: `http://64.225.98.172/api/account/teacher/register/`,
        method: 'POST',
        data: JSON.stringify(data_form),

        success: function (response) {
            alert('You have successfully registered');
            console.log(response);
            window.location = 'login.html'
        },
        error: function (error_response) {
            alert('Try again');
            console.log(error_response);
            let error_messages = error_response.responseJSON;
              for (let message_name in error_messages) {
                  console.log(message_name)
                let input = document.querySelector(`#sign-up-instructor [name="${message_name}"`);
                if (input) {
                  let small_tag = input.parentElement.querySelector('small');
                  small_tag.innerText = error_messages[message_name];
                }
              }

        }


    })


})


})