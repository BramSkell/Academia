$(document).ready(function () {

    (function () {
        // var content = "";
        ///*$.getJSON("js/products.json", function (data) {

        //     $.each(data, function (key, obj) {
        //         //console.log(obj.image+" "+obj.title+" "+obj.description);
        //         content+= '<figure class="productIMG"><a href="details.html?='+obj.id+'"><img src=\"'+obj.image+'\"></a>';
        //         content+= '<figcaption>'+obj.title+'</figcaption><br/><p>'+obj.description+'</p></figure>';
        //         //console.log(content);
        //     });
        //     $("#products").append(content);
        // });   */
        // $.each(myCatalog, function (key, obj) {
        //     content += '<figure class="productIMG"><a href="details.html?=' + obj.id + '"><img src=\"' + obj.image + '\"></a>';
        //     content += '<figcaption>' + obj.title + '</figcaption><br/><p>' + obj.description + '</p></figure>';
        // });
        // $("#products").append(content);
        $.ajax({
            type: "GET",
            url: "http://localhost:57259/api/products",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                console.log(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    })();

});