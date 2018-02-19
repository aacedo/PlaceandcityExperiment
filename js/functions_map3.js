 // JavaScript Document "map_3"

// Modal when load page
 var CE = [];

 function startAll() {

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
 // End freguesia button



     $('#ce_done').click(function () {

         var cevalidation = $('[name=ce1]:checked,[name=ce2]:checked,[name=ce3]:checked');
         if (cevalidation.length < 3) {
             // alert("Please, answer all the questions");
             alert(translator.getKeyLanguageValue("general5"));
             return;
         }
         /*var cevalidationbondingbridging = $('[name=ce1]:checked,[name=ce2]:checked,[name=ce3]:checked');
         if (cevalidationbondingbridging.length < 3) {
             alert("Please, answer all the questions");
             return;
         }*/
         $("#questions_done").toggleClass("hidden show");

         $("#yesno").toggleClass("hidden show");
     });


     $('#participate_button').click(function () {


         if ($('input[name=participate]:checked').val() == "true") {
             $("#yesno").toggleClass("hidden show");

             $("#pepe").toggleClass("hidden show");
             $("#pepa").toggleClass("hidden show");
             startMapComponents();
             buttonDraw.prop('disabled', false);
             //buttonDelete.prop('disabled', false);
             //$(".finish-map").attr('disabled', false);

             $("#draw_ce").toggleClass("hidden show");


             drawnItems = new L.FeatureGroup();
             map.addLayer(drawnItems);

         }
         else {

             var data = {
                 type:"ce",
                 civicEngagement: {
                     ce1: parseInt($("input[name=ce1]:checked").val()),
                     ce2: parseInt($("input[name=ce2]:checked").val()),
                     ce3: parseInt($("input[name=ce3]:checked").val())
                 },
							  //livingIn: ($("input[name=live]:checked").val()) === 'true',
             };


             app.setCE(id, data, function (response) {
                 if (response === false) {
                     // alert("There is a connection problem; please, try again later");
                     alert(translator.getKeyLanguageValue("general1"));
                 }
                 else {
                     util.redirectToPage({
                         url:"finish.html",
                         payload:{id:response.id, center: mapCenter}
                     });
                 }
             });

         }



     });


     $('#questions-ce').click(function () {

         for (i = 0; i < CE.length; i++) {
             CE[i].layer = /*JSON.stringify(*/CE[i].layer.toGeoJSON()/*)*/;
         }

         var data = {
             type:"ce",
             civicEngagement: {
                 ce1: parseInt($("input[name=ce1]:checked").val()),
                 ce2: parseInt($("input[name=ce2]:checked").val()),
                 ce3: parseInt($("input[name=ce3]:checked").val())
             },
					    livingIn: ($("input[name=live]:checked").val()) === 'true',
             areas: CE
         };


         app.setCE(id, data, function (response) {
             if (response === false) {
                 // alert("There is a connection problem; please, try again later");
                 alert(translator.getKeyLanguageValue("general1"));
             }
             else {
                 util.redirectToPage({
                     url:"finish.html",
                     payload:{id:response.id, center: mapCenter}
                 });
             }
         });
     });

   $('#myModal15').modal('show');

// POPOVER

   $(function () {
     $('[data-toggle="popover"]').popover()
   })

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


// Only for the mockups.  Show&hidden map image. Delete after.
   function toggler(divId) {
     //$("#" + divId).toggle();
     $("#secondimage").addClass('show');
     $("#firstimage").addClass('hidden');
   }

// Finish Show&hidden map image

     translator.applyPreviousLanguage(function () {
         // Nothing yet to do
         L.drawLocal.draw.handlers.polygon.tooltip.start = translator.getKeyLanguageValue("general120");
         L.drawLocal.draw.handlers.polygon.tooltip.cont = translator.getKeyLanguageValue("general121");
         L.drawLocal.draw.handlers.polygon.tooltip.end = translator.getKeyLanguageValue("general122");
     });
 }

 function showsliders() {
     $("#questions_done").toggleClass("show hidden");
     $("#communities_done").toggleClass("hidden show");
     $("#second_part_SC").toggleClass("hidden show");
 }

 function showsliders1() {

     $("#questions_done").toggleClass("show hidden");
     $("#title2_done").toggleClass("hidden show");
 }