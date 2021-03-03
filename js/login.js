$(document).ready(function () {
    document.querySelector('#login-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let data_form = {};
        this.querySelectorAll('.form-inputs').forEach(element => {
            data_form[element.getAttribute('name')] = element.value;
        });
        document.querySelectorAll('#login-form small').forEach((small_tag) => {
            small_tag.innerHTML = '';
          })
        document.querySelector('.error-detail').innerText = '';
    
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: `http://64.225.98.172/api/account/auth/token/`,
            method: 'POST',
            data: JSON.stringify(data_form),
    
            success: function (response) {
                alert('Welcome');
                console.log(response);
                localStorage.setItem('token', response.access);
                window.location = 'index.html';
                
            },
            error: function (error_response) {
                alert('Try again');
                console.log(error_response);
                let error_messages = error_response.responseJSON;
                  for (let message_name in error_messages) {
                      console.log(message_name)
                    let input = document.querySelector(`#login-form [name="${message_name}"`);
                    if (input) {
                      let small_tag = input.parentElement.querySelector('small');
                      small_tag.innerText = error_messages[message_name];
                    }
                    else{
                        document.querySelector('.error-detail').innerText = error_messages[message_name];
                    }
                  }
    
            }
    
    
        })
    
    
    })


})