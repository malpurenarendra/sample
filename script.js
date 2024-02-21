function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var userData = {
        name: name,
        email: email,
        password: password
    };

    // Using AJAX POST method to send data to local storage
    $.ajax({
        type: "POST",
        url: "javascript:void(0)",
        data: JSON.stringify(userData),
        contentType: "application/json",
        success: function () {
            // Redirect to the new page with the data list
            window.location.href = 'list.html';
        }
    });
}
