/// <reference path="jquery-3.1.1.js" />

$("#btn").click(function () {
    console.log("tıklandı");
    $("#lokantalar").empty();
    var apiıurl = "https://api.foursquare.com/v2/venues/search?client_id=EGOSDS4LL2KJLY20DPWMXRND3KL13DJVMVKVVJ0PLMJPJQPU&client_secret=N1351BVZ0YBSHWERNU3R04IJY0X5WEHRQRJHRFDOYFQBJ4D1&v=20160422&ll=41.0441105,29.0064989&radius=500&categoryId=4d4b7105d754a06374d81259";
    $.ajax({
        url: apiıurl,
        datatype: "json",
        type: "get"
    }).done(function (data) {
        $.each(data.response.venues,
            function (key, value) {
                firmalarigoster(value);
            });
    });
});

function firmalarigoster(firma) {
    var div = document.createElement("div");
    $(div).addClass("firmakarti");
    var h3 = document.createElement("h3");
    h3.innerText = firma.name;
    var spanadres = document.createElement("span");
    $(spanadres).addClass("adres");
    $(spanadres).html(firma.location.address);
    var spanburada = document.createElement("span");
    $(spanburada).addClass("burada");
    spanburada.innerHTML = firma.hereNow.summary;

    $(h3).appendTo(div);
    $(div).append(spanadres).append(spanburada).appendTo($("#lokantalar"));
}
//<div class="firmakarti">
//    <h3>Firma Adı</h3>
//    <span class="adres">caferağa bilmemne sk.</span>
//    <span class="burada">33 kişi burada</span>
//</div>