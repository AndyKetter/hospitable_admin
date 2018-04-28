$('#loginBtn').on('click', function () {
    var userName = $('#userName').val();
    var password = $('#password').val();
    var Json_data = {
        "account": userName,
        "password": password,
        "timestamp": 0,
        "version": "string",
        "operation": "string"
    };
    var Json_str = JSON.stringify(Json_data);
    $.ajax({
        type: "POST",
        url: "http://192.168.10.253:8089/admin/user/login",
        dataType: "json",
        data: Json_str,
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            var token = response.adminToken.token;
            alert(token);
        }
    });
});

