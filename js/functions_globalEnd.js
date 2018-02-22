/**
 * Created by albertacedosanchez on 17/2/17.
 */



function startAll() {
    startMapComponents();
    areasLoading();
    translator.applyPreviousLanguage(function () {
        // Nothing yet to do
    });

    $('#finishBtn').click(function () {

        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var mail = $("#mail_user").val();
        var testtwitter = /^@(\w){1,15}$/;
        var twitter = $("#twitter_name").val();
        // var id = util.getFromLocalStorage(util.interPageDataKey);

        if (mail != "" || twitter != "") {
            if (mail != "" & testEmail.test(mail)) {
                if (twitter != "" & testtwitter.test(twitter)) {
                    var data = {
                        mailUser: mail,
                        twitterName: twitter
                    };
                    app.finishA(id, data, function (response) {
                        if (response === false) {
                            //alert("There is a connection problem; please, try again later");
                            alert(translator.getKeyLanguageValue("general1"));
                        }
                        else {
                            // alert("Thanks");
                            alert(translator.getKeyLanguageValue("general13"));
                            //$('#myModalsatisfaction').modal('show');
                        }
                    });
                    $("#mailtwitter").removeClass().addClass("hidden");
                }

                else if (twitter == "") {

                    var data = {
                        mailUser: mail,
                    };
                    app.finishA(id, data, function (response) {
                        if (response === false) {
                            //alert("There is a connection problem; please, try again later");
                            alert(translator.getKeyLanguageValue("general1"));
                        }
                        else {
                            // alert("Thanks");
                            alert(translator.getKeyLanguageValue("general13"));
                            //$('#myModalsatisfaction').modal('show');
                        }
                    });
                    $("#mailtwitter").removeClass().addClass("hidden");
                }
                else {
                    alert(translator.getKeyLanguageValue("general14"));
                }

            }
            else if (twitter != "" & testtwitter.test(twitter)) {
                if ((mail != "" & testEmail.test(mail))) {
                    var data = {
                        mailUser: mail,
                        twitterName: twitter
                    };
                    app.finishA(id, data, function (response) {
                        if (response === false) {
                            //alert("There is a connection problem; please, try again later");
                            alert(translator.getKeyLanguageValue("general1"));
                        }
                        else {
                            // alert("Thanks");
                            alert(translator.getKeyLanguageValue("general13"));
                            //$('#myModalsatisfaction').modal('show');
                        }
                    });
                    $("#mailtwitter").removeClass().addClass("hidden");

                }
                else if (mail =="") {

                    var data = {
                        twitterName: twitter
                    };
                    app.finishA(id, data, function (response) {
                        if (response === false) {
                            //alert("There is a connection problem; please, try again later");
                            alert(translator.getKeyLanguageValue("general1"));
                        }
                        else {
                            // alert("Thanks");
                            alert(translator.getKeyLanguageValue("general13"));
                            //$('#myModalsatisfaction').modal('show');
                        }
                    });
                    $("#mailtwitter").removeClass().addClass("hidden");

                }
                else{
                    alert(translator.getKeyLanguageValue("general14"));
                }

            }

            else {
                // alert("Please introduce a mail and/or twitter username valid structure");
                alert(translator.getKeyLanguageValue("general14"));
            }
        }



    });

    $('#finishglobalend').click(function () {
        // var id = util.getFromLocalStorage(util.interPageDataKey);

        var finalComments = {
            di1: parseInt($("input[name=di1]:checked").val()),
            dm1: parseInt($("input[name=dm1]:checked").val()),
            comment: $("#comment").val()
        };
        app.comments(id, finalComments, function (response) {
            if (response === false) {
                alert(translator.getKeyLanguageValue("general1"));
            }
            else {
                alert(translator.getKeyLanguageValue("general13"));
            }
        });
    });


}

function startMapComponents() {

    function createAll(rmap) {
        map = rmap;
        // add an OpenStreetMap tile layer
        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
            // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return !((rect.top == 0) && (rect.left == 0) && (rect.bottom == 0) && (rect.right == 0));
    }


    $('#d-ajuda').click(function () {
        map.setView([38.711402, -9.199039], 15);
    });

    $('#d-alcantara').click(function () {
        map.setView([38.710676, -9.182990], 15);
    });

    $('#d-alvalade').click(function () {
        map.setView([38.753182, -9.151691], 15);
    });

    $('#d-areeiro').click(function () {
        map.setView([38.742261, -9.133480], 15);
    });

    $('#d-arroios').click(function () {
        map.setView([38.727819, -9.140717], 15);
    });

    $('#d-avenidas').click(function () {
        map.setView([38.739568, -9.149152], 15);
    });

    $('#d-beato').click(function () {
        map.setView([38.733268, -9.113798], 15);
    });

    $('#d-belem').click(function () {
        map.setView([38.702305, -9.215116], 15);
    });

    $('#d-benfica').click(function () {
        map.setView([38.737770, -9.196060], 15);
    });


    $('#d-campo').click(function () {
        map.setView([38.719247, -9.166428], 15);
    });

    $('#d-campolide').click(function () {
        map.setView([38.731470, -9.165880], 15);
    });

    $('#d-carnide').click(function () {
        map.setView([38.763229, -9.188106], 15);
    });
    $('#d-estrela').click(function () {
        map.setView([38.710837, -9.153887], 15);
    });

    $('#d-lumiar').click(function () {
        map.setView([38.770204, -9.160321], 15);
    });

    $('#d-marvila').click(function () {
        map.setView([38.750852, -9.116730], 15);
    });

    $('#d-misericordia').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais').click(function () {
        map.setView([38.772473, -9.126950], 15);
    });

    $('#d-parque').click(function () {
        map.setView([38.765502, -9.099971], 15);
    });

    $('#d-penha').click(function () {
        map.setView([38.725873, -9.124024], 15);
    });

    $('#d-santa').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria').click(function () {
        map.setView([38.711168, -9.137130], 15);
    });

    $('#d-santo').click(function () {
        map.setView([38.718769, -9.149313], 15);
    });

    $('#d-sao').click(function () {
        map.setView([38.752111, -9.177416], 15);
    });

    $('#d-saovicente').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });

    try {

        var map1 = L.map('map', {
            scrollWheelZoom: false,
        });
        map1.on('load', function (e) {
            if (isElementInViewport($('#map'))) {
                createAll(map1);
            }
        });
        map1.setView([38.7500, -9.1500], 12);

        var mapxs = L.map('map2');
        mapxs.on('load', function (e) {
            if (isElementInViewport($('#map2'))) {
                createAll(mapxs);
            }
        });
        mapxs.setView([38.7500, -9.1500], 12);
    }


    catch (err) {
        console.error(err.message)
    }
}


function areasLoading() {
    try {
        //var id = util.getFromLocalStorage(util.interPageDataKey);
        //var id = "589888c01c0856701818e512";
        var SOPLayers, SCLayers, CELayers;

        var count = 0;
        var SOPStyle = function (feature) {
            return {color: "#ff0000", weight: 1};
        };
        var SCStyle = function (feature) {
            return {color: "#4080ff", weight: 1};
            /*if (count++ >=   2){
             return {color: "#6000ff"};
             }
             else{
             return {color: "#4080ff"};
             }*/
        };
        var CEStyle = function (feature) {
            return {color: "#00ff00", weight: 1};
        };

        // var group = new L.featureGroup();

        app.getSOPA(function (SOPLayersGeoJson) {
            if ((SOPLayersGeoJson.geoJson) && (SOPLayersGeoJson.geoJson !== "")) {
                //var geoJson = JSON.parse(SOPLayersGeoJson.geoJson);
                var sopLayer = L.geoJson(SOPLayersGeoJson.geoJson, {style: SOPStyle});
                sopLayer.addTo(map);
                // group.addLayer(sopLayer);

                app.getSCA(function (SCLayersGeoJson) {
                    if ((SCLayersGeoJson.geoJson) && (SCLayersGeoJson.geoJson !== "")) {
                        //var geoJson = JSON.parse(SCLayersGeoJson.geoJson);
                        var scLayer = L.geoJson(SCLayersGeoJson.geoJson, {style: SCStyle});
                        scLayer.addTo(map);
                        // group.addLayer(scLayer);

                        app.getCEA(function (CELayersGeoJson) {
                            if ((CELayersGeoJson.geoJson) && (CELayersGeoJson.geoJson !== "")) {
                                //var geoJson = JSON.parse(CELayersGeoJson.geoJson);
                                var ceLayer = L.geoJson(CELayersGeoJson.geoJson, {style: CEStyle});
                                ceLayer.addTo(map);
                                // group.addLayer(ceLayer);
                            }

                            // map.fitBounds(group.getBounds(), null);
                        });
                    }
                });
            }
        });
    }
    catch (err) {
        console.error(err.message)
    }
}
