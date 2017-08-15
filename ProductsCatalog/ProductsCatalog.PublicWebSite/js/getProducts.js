$(document).ready(function () {
    
    (function () {
        console.log("Se ejecuto");
        var content = "";
       /*$.getJSON("js/products.json", function (data) {
            
            $.each(data, function (key, obj) {
                //console.log(obj.image+" "+obj.title+" "+obj.description);
                content+= '<figure class="productIMG"><a href="details.html?='+obj.id+'"><img src=\"'+obj.image+'\"></a>';
                content+= '<figcaption>'+obj.title+'</figcaption><br/><p>'+obj.description+'</p></figure>';
                //console.log(content);
            });
            $("#products").append(content);
        });   */
        $.each(myCatalog, function (key, obj) {
            content += '<figure class="productIMG"><a href="details.html?=' + obj.id + '"><img src=\"' + obj.image + '\"></a>';
            content += '<figcaption>' + obj.title + '</figcaption><br/><p>' + obj.description + '</p></figure>';
        });
        $("#products").append(content);
    })();

});