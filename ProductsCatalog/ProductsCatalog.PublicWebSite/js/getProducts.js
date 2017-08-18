$(document).ready(function () {

    (function () {
        var content = "";
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
                var cont = 1;
                $.each(data, function (key, obj) {
                    content += '<figure class="productIMG"><a class="imgDetails" href="details.html?=' + obj.ID + '"><img  src=\"' + obj.ImageURL + '\"></a>';
                    content += '<figcaption>' + obj.Name + '</figcaption><br/><p>' + obj.ProdDescripion + '</p></figure>';
                    localStorage.setItem("ID" + cont, obj.ID);
                    localStorage.setItem("Img" + cont, obj.ImageURL);
                    localStorage.setItem("Name"+cont, obj.Name);
                    localStorage.setItem("Model" + cont, obj.Model);
                    localStorage.setItem("Price" + cont, obj.Price);
                    localStorage.setItem("Desc" + cont, obj.ProdDescripion);

                    cont++;
                    localStorage.setItem("Ident",obj.ID);
                });
                $("#products").append(content);
               // console.log(content);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });        
    })();
    
});