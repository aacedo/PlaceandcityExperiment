var map;
var testGeoJson;
var overPassOPs;
var profession_new;

function startAll(){

    $('#profession').change(function () {
        if ($("#profession").val() == "6") {
            $("#other_profession").removeClass().addClass("show");
        }
        else{
            $("#other_profession").removeClass().addClass("hidden");
        }

    });


    startMapComponents();
    areasLoading();
    startOthers();

    translator.applyPreviousLanguage(function () {
        // Nothing yet to do
    });

    // startOverpassComponents();
    // gatherAndShowOverpassData();
}


function startOthers() {
    try {
        $('#finishBtn').click(function () {

            if (($("#study").val() == "0")) {
                alert(translator.getKeyLanguageValue("general10"));
                return;
            }

            if (($("#profession").val() == "0")) {
                alert(translator.getKeyLanguageValue("general11"));
                return;
            }
            if (($("#income").val() == "0")) {
                alert(translator.getKeyLanguageValue("general12"));
                return;
            }


            if ($("#profession").val() == "6") {
                if (!$("#other_prof").val()) {
                    //alert("Please, introduce a profession.")
                    alert(translator.getKeyLanguageValue("general11"));


                }
                else {
                    profession_new = parseInt($("#other_prof").val())


                    // var id = util.getFromLocalStorage(util.interPageDataKey);

                    var data = {
                        gender: parseInt($("input[name=gender]:checked").val()),
                        age: parseInt($("#age").val()),
                        country: $("#country").val(),
                        study: parseInt($("#study").val()),
                        profession: profession_new,
                        income: parseInt($("#income").val())
                    };

                    app.finish(id, data, function (response) {
                        if (response === false) {
                            // alert("There is a connection problem; please, try again later.");
                            alert(translator.getKeyLanguageValue("general1"));
                        }
                        else {
                            util.redirectToPage({
                                url: "globalEnd.html",
                                payload: {id:response.id}
                            });
                        }
                    })
                }
            }
            if ($("#profession").val() != "6") {

                profession_new = parseInt($("#profession").val())


                // var id = util.getFromLocalStorage(util.interPageDataKey);

                var data = {
                    gender: parseInt($("input[name=gender]:checked").val()),
                    age: parseInt($("#age").val()),
                    country: $("#country").val(),
                    study: parseInt($("#study").val()),
                    profession: profession_new,
                    income: parseInt($("#income").val())
                };

                app.finish(id, data, function (response) {
                    if (response === false) {
                        // alert("There is a connection problem; please, try again later.");
                        alert(translator.getKeyLanguageValue("general1"));
                    }
                    else {
                        util.redirectToPage({
                            url: "globalEnd.html",
                            payload: {id:response.id}
                        });
                    }
                })
            }


        });
    }
    catch (err){
        console.error(err.message);
    }
}

function startMapComponents(){
    try {
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
    catch (err){
        console.error(err.message);
    }
}

function startOverpassComponents() {
    testGeoJson = JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-9.151139259338379,38.76171336595827],[-9.158520698547363,38.7591700932071],[-9.154229164123535,38.7508703622086],[-9.149336814880371,38.749732420636896],[-9.14212703704834,38.750134049145224],[-9.13912296295166,38.754886481591335],[-9.142298698425293,38.76198107360679],[-9.151139259338379,38.76171336595827]]]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-9.156460762023926,38.74558212707837],[-9.161438941955566,38.73888759683804],[-9.153971672058105,38.7372138662156],[-9.15311336517334,38.74343994568533],[-9.156460762023926,38.74558212707837]]]}}]}');
    overPassOPs = {
        opInterpreterUrl: "http://overpass-api.de/api/interpreter",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        queryInitString: "data=[out:json];",
        queryEndString: "out body;",
        wildcardRegExp: new RegExp("zzzzzzzz", "g"),
        query: "(node[natural][name](zzzzzzzz);" +
        "node[amenity=place_of_worship][name](zzzzzzzz);node[historic][name](zzzzzzzz);node[tourism][tourism!=hotel][name](zzzzzzzz);" +
        "node[amenity=bar][name](zzzzzzzz);node[amenity=cafe][name](zzzzzzzz);node[amenity=pub][name](zzzzzzzz);" +
        "node[amenity=arts_centre][name](zzzzzzzz);node[amenity=community_centre][name](zzzzzzzz);node[amenity=social_centre][name](zzzzzzzz);node[amenity=social_facility][name](zzzzzzzz);" +
        "node[leisure][name](zzzzzzzz);node[amenity=theatre][name](zzzzzzzz);node[amenity=cinema][name](zzzzzzzz);" +
        "node[landuse=commercial][name](zzzzzzzz);node[shop][name](zzzzzzzz);" +
        "node[highway=bus_stop][name](zzzzzzzz);node[railway=subway_entrance][name](zzzzzzzz);node[station=subway_entrance][name](zzzzzzzz););"
        ,
        postRequest: function (url, contentType, data, callback) {
            return $.ajax({
                contentType: contentType,
                url: url,
                data: data,
                cache: false,
                method: 'POST',
                success: function (response) {
                    callback(response);
                }.bind(this),
                error: function (response) {
                    callback(false);
                    return false;
                }.bind(this)
            });
        },
        queryOverPass: function (geoJsonPolygons, callback) {
            var currentObject = this;
            var opData = [];
            var promises = [];
            $.each(geoJsonPolygons.features, function (indexG, feature) {
                var polygonString = 'poly:"';
                $.each(feature.geometry.coordinates[0], function (indexC, coordinate) {
                    var lat = coordinate[1];
                    var lon = coordinate[0];
                    polygonString += " " + lat + " " + lon;
                });
                polygonString += '"';
                var finalQuery = currentObject.queryInitString + currentObject.query.replace(currentObject.wildcardRegExp, polygonString) + currentObject.queryEndString;
                var requestPromise = currentObject.postRequest(currentObject.opInterpreterUrl, currentObject.contentType, finalQuery, function (response) {
                    var polyData = {
                        naturals: [],
                        cultural: [],
                        social: [],
                        urban: [],
                        leisure: [],
                        commercial: [],
                        transport: []
                    };
                    $.each(response.elements, function (indexE, element) {
                        var toPush;
                        if (element.tags.natural) {
                            toPush = polyData.naturals;
                        }
                        else if ((element.tags.tourism) || (element.tags.historic) || (element.tags.amenity == "place_of_worship")) {
                            toPush = polyData.cultural;
                        }
                        else if ((element.tags.amenity == "bar") || (element.tags.amenity == "cafe") || (element.tags.amenity == "pub")) {
                            toPush = polyData.social;
                        }
                        else if ((element.tags.amenity == "arts_centre") || (element.tags.amenity == "community_centre") || (element.tags.amenity == "social_centre") || (element.tags.amenity == "social_facility")) {
                            toPush = polyData.urban;
                        }
                        else if ((element.tags.leisure) || (element.tags.amenity == "theatre") || (element.tags.amenity == "cinema")) {
                            toPush = polyData.leisure;
                        }
                        else if ((element.tags.landuse) || (element.tags.shop)) {
                            toPush = polyData.commercial;
                        }
                        else if ((element.tags.highway) || (element.tags.railway) || (element.tags.station)) {
                            toPush = polyData.transport;
                        }
                        else {
                            //alert("PANIC")
                        }
                        toPush.push(element);
                    });
                    opData.push(polyData);
                });
                promises.push(requestPromise);
            });
            $.when.apply(null, promises).done(function () {
                callback(opData);
            }).fail(function () {
                callback(false);
            });
        }
    };
    gatherAndShowOverpassData = function () {
        overPassOPs.queryOverPass(testGeoJson, function (overPassData) {
            if (overPassData === false) {
                alert("SHIT!");
            }
            else {
                alert("GOOD!");
                var html = '<ul class="media-list" style="list-style:none; padding:0px"> <li class="media"> <input type="checkbox" id="all" class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xs-offset-3" name="all" value="1"><p class="tematic-freguesia col-lg-8 col-md-8 col-sm-8 col-xs-6"> All </p></li>';
                for (var i = 0; i < overPassData.length; i++) {

                    for (var prop in overPassData[i]) {

                        html = html + ' <li class="media"> <input type="checkbox" class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xs-offset-3" id="prop" name="prop" value="' + prop + '"><p class="tematic-freguesia col-lg-8 col-md-8 col-sm-8 col-xs-6">' + prop + '</p></li>';

                        /*   for (var j = 0; j < overPassData[i][prop].length; j++) {
                         var lat = overPassData[i][prop][j]["lat"];
                         var lon = overPassData[i][prop][j]["lon"];

                         L.marker([lat, lon]).addTo(map);
                         }
                         */

                    }

                    break;


                }
                html = html + "</ul>";
                document.getElementById("table").innerHTML = html;
                definefunctions(overPassData);
            }
        });
//});

        var markers = [];

        function definefunctions(overPassData) {
            $('#all').change(function () {
                if ($("input[name=all]").prop("checked")) {
                    $("input[name=prop]").prop("checked", true);

                } else {
                    $("input[name=prop]").prop("checked", false);

                }
                $('input[name=prop]').trigger("change");
            });

            $('input[name=prop]').change(function () {

                for (var i = 0; i < markers.length; i++) {
                    map.removeLayer(markers[i]);
                }
                markers = [];
                for (var i = 0; i < overPassData.length; i++) {

                    for (var prop in overPassData[i]) {

                        if ($("input[value=" + prop + "]").prop("checked")) {
                            for (var j = 0; j < overPassData[i][prop].length; j++) {

                                var lat = overPassData[i][prop][j]["lat"];
                                var lon = overPassData[i][prop][j]["lon"];

                                var m = L.marker([lat, lon]).addTo(map);
                                markers.push(m);
                            }
                        }
                    }
                }
            });
        };
    };
}

function areasLoading() {
    try {
        // var id = util.getFromLocalStorage(util.interPageDataKey);
        //var id = "589888c01c0856701818e512";
        var SOPLayers, SCLayers, CELayers;

        var count = 0;
        var SOPStyle = function (feature) {
            return {color: "#ff0000"};
        };
        var SCStyle = function (feature) {
            return {color: "#4080ff"};
            /*if (count++ >=   2){
             return {color: "#6000ff"};
             }
             else{
             return {color: "#4080ff"};
             }*/
        };
        var CEStyle = function (feature) {
            return {color: "#00ff00"};
        };

        var group = new L.featureGroup();

        app.getSOP(id, function (SOPLayersGeoJson) {
            var geoJson = /*JSON.parse(*/SOPLayersGeoJson.geoJson/*)*/;
            var sopLayer = L.geoJson(geoJson, {style: SOPStyle});
            sopLayer.addTo(map);
            group.addLayer(sopLayer);

            app.getSC(id, function (SCLayersGeoJson) {
                var geoJson = /*JSON.parse(*/SCLayersGeoJson.geoJson/*)*/;
                var scLayer = L.geoJson(geoJson, {style: SCStyle});
                scLayer.addTo(map);
                group.addLayer(scLayer);

                app.getCE(id, function (CELayersGeoJson) {
                    var geoJson = /*JSON.parse(*/CELayersGeoJson.geoJson/*)*/;
                    var ceLayer = L.geoJson(geoJson, {style: CEStyle});
                    ceLayer.addTo(map);
                    group.addLayer(ceLayer);

                    map.fitBounds(group.getBounds(), null);
                });
            });
        });

    }
    catch (err){
        console.error(err.message);
    }





}

