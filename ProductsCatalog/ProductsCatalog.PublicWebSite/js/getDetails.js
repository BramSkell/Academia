$(document).ready(function () {
    (function getID() {
        var id = location.search.substr(1);
        var res = {};
        id.split("&").forEach(function (part) {
            var item = part.split("=");
            ShowDetails(item[1]);
        });
    })();

    function ShowDetails(item) {
        var id = parseInt(item);
        var deta = "",desc = "";
        $.getJSON("js/products.json", function (data) {
            $.each(data, function (key, obj) {
                if (obj.id == id) {
                    var prodDeta = obj;
                    deta = '<figure><img src="' + prodDeta.image + '"><figcaption>' + prodDeta.title + '</figcaption>' +
                        '<img src="img/"><img src="img/"><img src="img/"></figure>' +
                        '<p>Modelo ' + prodDeta.model + '</p><p>Precio ' + prodDeta.price + '</p>';
                    desc = '<p>' + prodDeta.description + '</p>';
                }
            });
            $("#details").append(deta);
            $("#description").append(desc);
        });
    }
});