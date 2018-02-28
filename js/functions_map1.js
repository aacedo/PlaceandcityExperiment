// JavaScript Document "map1"

// Modal when load page


var number = 0;
var name_places = [];
var SOP = [];
var current_name = [];
var contador = 0;


function startAll() {

// POPOVER

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

// MODAL prev and next

    $("div[id^='myModal']").each(function () {

        var currentModal = $(this);

        //click next
        currentModal.find('.btn-next').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
        });

        //click prev
        currentModal.find('.btn-prev').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
        });

    });

    // NAMES PLACES


    $("#name_actual_place").select2({
        tags: [],
        tokenSeparators: [","]
    });

    //

    $('#plus_name').click(function () {
        if (!$('#actual_place').val() && (name_places.length === 0)) {
            alert(translator.getKeyLanguageValue("general4"));
        }
        else if (!$('#actual_place').val() && (name_places.length > 0)) {
            $("#continuar").removeClass("hidden").addClass("show");
        }
        else {
            name_places.push($('#actual_place').val());
            $('#actual_place').val("");
            names();
            contador = 0;
        }
    });


    function names() {
        if (name_places.length > 0) {
            var text_names = "";
            for (i = 0; i < name_places.length; i++) {
                current_name[i] = name_places[i];
                text_names = text_names + '<br>' + translator.getKeyLanguageValue("general18") + ": " + current_name[i];
            }
            $("#words").html(text_names);
            $("#continuar").removeClass("hidden").addClass("show");

        }

    }


    $("#actual_place").keypress(function (event) {

        if (!$('#actual_place').val()) {
            if (contador === 0) {
                $("#continuar").removeClass("show").addClass("hidden");
            }
            else {
                $("#continuar").removeClass("hidden").addClass("show");
            }
        }
        else {
            $("#continuar").removeClass("show").addClass("hidden");
        }
    });


    $('#submit_name_places').click(function () {
        //name_places = $('#name_actual_place').val();
        if (name_places.length > 0) {
            $("#let_draw").toggleClass("hidden show");
            $("#title_done").toggleClass("hidden show");
            nameplace();

            $("#group_name_place").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
            $('#myModal3').modal('show');
            $("#pepe").toggleClass("hidden show");
            $("#pepa").toggleClass("hidden show");
            startMapComponents();
            buttonDraw.prop('disabled', false);


        }
        else {
            // alert("Please, insert at least a group name");
            alert(translator.getKeyLanguageValue("general4"));
        }

    });


    function nameplace() {
        var tete = name_places[number];
        $("#group_name_place").html(translator.getKeyLanguageValue("map1-11"));
        var replaced = $("#group_name_place").html().replace('hola', '<b>' + tete + '</b>');
        $("#group_name_place").html(replaced);
        $("#draw_places").html(translator.getKeyLanguageValue("map1-12"));
        var replaced1 = $("#draw_places").html().replace('hola', '<b>' + tete + '</b>');
        $("#draw_places").html(replaced1);
        $("#area_name_sliders").html(translator.getKeyLanguageValue("map1-11"));
        var replaced2 = $("#area_name_sliders").html().replace('hola', '<b>' + tete + '</b>');
        $("#area_name_sliders").html(replaced2);
        $("#title_sliders_change").html(translator.getKeyLanguageValue("map1-20"));
        var replaced3 = $("#title_sliders_change").html().replace('hola', '<b style="font-size: 18px">' + tete + '</b>');
        $("#title_sliders_change").html(replaced3);
        $("#textchange_reason").html(translator.getKeyLanguageValue("map2-58"));
        var replaced4 = $("#textchange_reason").html().replace('hola', '<b style="font-size: 18px">' + tete + '</b>');
        $("#textchange_reason").html(replaced4);

    };

    $('#sliders_done_button').click(function () {


        var reasonvalue;
        var naturevalidation = $('[name=na1]:checked,[name=na2]:checked,[name=na3]:checked,[name=na4]:checked');
        if (naturevalidation.length < 4) {
            alert(translator.getKeyLanguageValue("general5"));
            return;
        }

        if ($("#reason").val() === "5") {
            if (!$("#other_reason").val()) {
                // alert("Please, introduce the nature of the group.")
                alert(translator.getKeyLanguageValue("general22"));
                return;

            }
            else {
                reasonvalue = $('#other_reason').val();

            }
        }

        else if ($("#reason").val() === "0") {

            alert(translator.getKeyLanguageValue("general22"));
            return;
        }
        else {

            reasonvalue = $('#reason').val();

        }

        if (number == name_places.length - 1) {


            var polygonData = {
                type: "sopa",
                name: name_places[number],
                layer: L.geoJson(drawnItems.toGeoJSON()),
                livingIn: ($("input[name=live]:checked").val()) === 'true',
                reason: reasonvalue,
                predictors: {
                    na1: parseInt($("input[name=na1]:checked").val()),
                    na2: parseInt($("input[name=na2]:checked").val()),
                    na3: parseInt($("input[name=na3]:checked").val()),
                    na4: parseInt($("input[name=na4]:checked").val())
                }
            };

            SOP.push(polygonData);
            map.removeLayer(drawnItems);
            drawnItems = new L.FeatureGroup();

            ShowAllAreas();
            $("#select_place").toggleClass("hidden show");
            $("#sliders_done").toggleClass("hidden show");

            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', true);
            $('#button-freguesia').prop('disabled', true);
            $('#button-freguesiaxs').prop('disabled', true);


            $("#reason").val("0");

            $("#other_reason").val("");


        }

        else {

            map.setZoom(zoommap);
            buttonDraw.prop('disabled', false);
            $('#button-freguesia').prop('disabled', false);
            $('#button-freguesiaxs').prop('disabled', false);
            //$("#draw_polyxs").prop('disabled', false);
            //$(".finish-map").attr('disabled', false);

            $("#sliders_done").toggleClass("hidden show");
            $("#let_draw").toggleClass("hidden show");


            var polygonData = {
                type: "sopa",
                name: name_places[number],
                layer: L.geoJson(drawnItems.toGeoJSON()),
                livingIn: ($("input[name=live]:checked").val()) === 'true',
                reason: reasonvalue,
                predictors: {
                    na1: parseInt($("input[name=na1]:checked").val()),
                    na2: parseInt($("input[name=na2]:checked").val()),
                    na3: parseInt($("input[name=na3]:checked").val()),
                    na4: parseInt($("input[name=na4]:checked").val())
                }
            };

            number = number + 1;
            nameplace();
            $("#group_name_place").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

            /*

             for (i = 1; i <= 7; i++) {
             $('input[id=ex' + i + ']').slider('setValue', 0);
             $('span[id=ex' + i + 'SliderVal]').text(0);
             };
             */


            SOP.push(polygonData);
            map.removeLayer(drawnItems);
            drawnItems = new L.FeatureGroup();
            map.addLayer(drawnItems);
            map.addLayer(polygonData.layer);

            buttonDelete.prop('disabled', true);
            buttonDraw.prop('disabled', false);

            $("#reason").val("0");

            $("#other_name_reason").removeClass().addClass("hidden");

            $("#other_reason").val("");

            $("input[name=na1]").prop('checked', false);
            $("input[name=na2]").prop('checked', false);
            $("input[name=na3]").prop('checked', false);
            $("input[name=na4]").prop('checked', false);


        }


    });

    $('#reason').change(function () {
        if ($("#reason").val() === "5") {

            $("#other_name_reason").removeClass().addClass("show");
        }
        else {
            $("#other_name_reason").removeClass().addClass("hidden");
        }
    });

    //var AreaSelected;
    var group = new L.featureGroup();

    var highlightedArea = null;


    function ShowAllAreas() {

        map.removeLayer(drawnItems);
        //$(".finish-map").attr('disabled', true);
        buttonDraw.prop('disabled', true);
        buttonDelete.prop('disabled', true);
        for (i = 0; i < SOP.length; i++) {
            group.addLayer(SOP[i].layer);
            map.addLayer(SOP[i].layer);
            var sopi = SOP[i];
            $('#radios').append('<div class="radio"><label><input type="radio" name="sc_areas" value="' + i + '"/>Area ' + SOP[i].name + '</label></div>');
        }

        $("input[name='sc_areas']").change(function () {
            if (highlightedArea != null) {
                highlightedArea.layer.setStyle({color: '#6000ff'});
            }
            var index = parseInt($("input[name=sc_areas]:checked").val());
            highlightedArea = SOP[index];
            highlightedArea.layer.setStyle({color: '#FF0000'});

        });

        map.fitBounds(group.getBounds(), null);


        $('#choose_place').click(function () {

            if ($('input[name=sc_areas]:checked').length) {
                $("#select_place").toggleClass("hidden show");
                $("#questions_done").toggleClass("hidden show");
                buttonDraw.prop('disabled', true);
                buttonDelete.prop('disabled', true);


                for (var i = 0; i < SOP.length; i++) {
                    map.removeLayer(SOP[i].layer);
                }

                var group = new L.featureGroup();

                highlightedArea.layer.setStyle({color: '#FF0000'});
                group.addLayer(highlightedArea.layer);
                map.addLayer(highlightedArea.layer);

                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {}).addTo(map);
                map.fitBounds(group.getBounds(), null);


                var title = $("#change").html().replace('X', '<b style="font-size: 18px">' + highlightedArea.name + "</b>");
                $("#change").html(title);
                var pi1re = $("#pi1").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pi1").html(pi1re);
                var pi2re = $("#pi2").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pi2").html(pi2re);
                var pi3re = $("#pi3").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pi3").html(pi3re);
                var pa1re = $("#pa1").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pa1").html(pa1re);
                var pa2re = $("#pa2").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pa2").html(pa2re);
                var pa3re = $("#pa3").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pa3").html(pa3re);
                var pd1re = $("#pd1").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pd1").html(pd1re);
                var pd2re = $("#pd2").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pd2").html(pd2re);
                var pd3re = $("#pd3").html().replace('Y', "<b>" + highlightedArea.name + "</b>");
                $("#pd3").html(pd3re);
            }
            else {
                alert(translator.getKeyLanguageValue("general6"));
            }
        });

    }

    $('#questions-sop').click(function () {

        // validate


        var sopvalidation = $('[name=PI1]:checked,[name=PI2]:checked,[name=PI3]:checked,[name=PA1]:checked,[name=PA2]:checked,[name=PA3]:checked,[name=PD1]:checked,[name=PD2]:checked,[name=PD3]:checked');
        if (sopvalidation.length < 9) {
            alert(translator.getKeyLanguageValue("general5"));
            return;
        }

        // finish validate

        highlightedArea.dimensions = {
            pi1: parseInt($("input[name=PI1]:checked").val()),
            pi2: parseInt($("input[name=PI2]:checked").val()),
            pi3: parseInt($("input[name=PI3]:checked").val()),
            pa1: parseInt($("input[name=PA1]:checked").val()),
            pa2: parseInt($("input[name=PA2]:checked").val()),
            pa3: parseInt($("input[name=PA3]:checked").val()),
            pd1: parseInt($("input[name=PD1]:checked").val()),
            pd2: parseInt($("input[name=PD2]:checked").val()),
            pd3: parseInt($("input[name=PD3]:checked").val())
        }

        for (var i = 0; i < SOP.length; i++) {
            SOP[i].layer = /*JSON.stringify(*/SOP[i].layer.toGeoJSON()/*)*/;
        }

        var data2 = {
            type: "sop",
            areas: SOP
        };

        app.setSOP(id, data2, function (response) {
            if (response === false) {
                // alert("There is a connection problem; please, try again later");
                alert(translator.getKeyLanguageValue("general1"));
            }
            else {
                util.redirectToPage({
                    url: "map2.html",
                    payload: {id: response.id, center: mapCenter}
                });
            }
        });


    });


    //Freguesia buttons
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


    //Freguesia buttons XS
    $('#d-ajuda-xs').click(function () {
        map.setView([38.711402, -9.199039], 15);
    });

    $('#d-alcantara-xs').click(function () {
        map.setView([38.710676, -9.182990], 15);
    });

    $('#d-alvalade-xs').click(function () {
        map.setView([38.753182, -9.151691], 15);
    });

    $('#d-areeiro-xs').click(function () {
        map.setView([38.742261, -9.133480], 15);
    });

    $('#d-arroios-xs').click(function () {
        map.setView([38.727819, -9.140717], 15);
    });

    $('#d-avenidas-xs').click(function () {
        map.setView([38.739568, -9.149152], 15);
    });

    $('#d-beato-xs').click(function () {
        map.setView([38.733268, -9.113798], 15);
    });

    $('#d-belem-xs').click(function () {
        map.setView([38.702305, -9.215116], 15);
    });

    $('#d-benfica-xs').click(function () {
        map.setView([38.737770, -9.196060], 15);
    });


    $('#d-campo-xs').click(function () {
        map.setView([38.719247, -9.166428], 15);
    });

    $('#d-campolide-xs').click(function () {
        map.setView([38.731470, -9.165880], 15);
    });

    $('#d-carnide-xs').click(function () {
        map.setView([38.763229, -9.188106], 15);
    });
    $('#d-estrela-xs').click(function () {
        map.setView([38.710837, -9.153887], 15);
    });

    $('#d-lumiar-xs').click(function () {
        map.setView([38.770204, -9.160321], 15);
    });

    $('#d-marvila-xs').click(function () {
        map.setView([38.750852, -9.116730], 15);
    });

    $('#d-misericordia-xs').click(function () {
        map.setView([38.711113, -9.147195], 15);
    });

    $('#d-olivais-xs').click(function () {
        map.setView([38.772473, -9.126950], 15);
    });

    $('#d-parque-xs').click(function () {
        map.setView([38.765502, -9.099971], 15);
    });

    $('#d-penha-xs').click(function () {
        map.setView([38.725873, -9.124024], 15);
    });

    $('#d-santa-xs').click(function () {
        map.setView([38.785799, -9.155323], 15);
    });

    $('#d-santamaria-xs').click(function () {
        map.setView([38.711168, -9.137130], 15);
    });

    $('#d-santo-xs').click(function () {
        map.setView([38.718769, -9.149313], 15);
    });

    $('#d-sao-xs').click(function () {
        map.setView([38.752111, -9.177416], 15);
    });

    $('#d-saovicente-xs').click(function () {
        map.setView([38.718305, -9.130119], 15);
    });

    translator.applyPreviousLanguage(function () {
        // Nothing yet to do
        L.drawLocal.draw.handlers.polygon.tooltip.start = translator.getKeyLanguageValue("general120");
        L.drawLocal.draw.handlers.polygon.tooltip.cont = translator.getKeyLanguageValue("general121");
        L.drawLocal.draw.handlers.polygon.tooltip.end = translator.getKeyLanguageValue("general122");
    });
}



