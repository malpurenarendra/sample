$(document).ready(function () {
    // Retrieve data from local storage and display it in the list
    var userList = JSON.parse(localStorage.getItem('userList')) || [];
    var listElement = $('#userList');

    userList.forEach(function (user) {
        listElement.append('<li class="list-group-item">' + user.name + ' - ' + user.email + '</li>');
    });
});
