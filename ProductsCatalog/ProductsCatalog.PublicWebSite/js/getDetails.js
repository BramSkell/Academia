$(document).ready(function () {
    (function () {
        for (var i = 0; i < localStorage.length; i++) {
            console.log(localStorage);
        }
        
    })();

    (function () {
        var id = location.search.substr(1);        
        id.split("&").forEach(function (part) {
            var item = part.split("=");
            ShowDetails(item[1]);
            
        });
        
    })();

    function ShowDetails(item) {
        var id = parseInt(item);
        var deta = "", desc = "",thumb ="";
       /* $.getJSON("js/details.json", function (data) {
            $.each(data, function (key, obj) {
                if (obj.id == id) {
                    $.each(obj.minImg, function (key,img) {
                        thumb += '<img class="thumb" src="' + img + '">';
                    });
                    //for (var i = 0; i < obj.minImg.length; i++) {
                    //    thumb += '<img class="thumb" src="' + obj.minImg[i] + '">';
                    //}                  
                    deta = '<figure><img src="' + obj.image + '"><figcaption>' + obj.title + '</figcaption>' +
                        thumb+' </figure>'+
                        '<p>Modelo ' + obj.model + '</p><p>Precio ' + obj.price + '</p>';
                    desc = '<p>' + obj.description + '</p>';
                }
            });
            $("#details").append(deta);
            $("#description").append(desc);
        }); */
        $.each(myDetaCata, function (key, obj) {
            if (obj.id == id) {
                $.each(obj.minImg, function (key, img) {
                    thumb += '<img class="thumb" src="' + img + '">';
                });
                deta = '<figure><img class="detaIMG" src="' + obj.image + '"><figcaption>' + obj.title + '</figcaption>' +
                        thumb + ' </figure>' +
                    '<p>Modelo ' + obj.model + '</p><p>Precio ' + obj.price + '</p></br></br><aside><p>Productos similares</p><img class="similar" src="img/download%20(1).jpg"> <img class="similar" src="img/download%20(1).jpg"> <img class="similar" src="img/download%20(1).jpg"></aside>';
                desc = '<p>' + obj.description + '</p>';
            }
        });
        $("#details").append(deta);
        $("#description").append(desc);
        
    }
});