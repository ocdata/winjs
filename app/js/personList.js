//Für jede Person wird eine neue Page Detailseite angelegt
//var personArray = ["Person1", "Person2", "Person3", "Person4"];


//setTimeout(function(){
//    speakerArray = konfModel.getSpeakerArray();
//    genSpeaker(speakerArray);
//}, 2000);
//
//
//setTimeout(function(){
//    $("#personListView").listview( "refresh" );
//}, 5000);


var speakerArray = null;
function genSpeaker(){
//    speakerArray = konfModel.getSpeakerArray();
    var speakerArray = demoSpeakerArray;

//    var speaker = $( "#result" ).load( "speaker.html", function() {
//        alert( "Load was performed." );
//    });

    $.each(speakerArray, function( index, personArrayValue ) { //demoSpeakerArray aus stub.js
        var personId = personArrayValue.id;
        var personName = personArrayValue.getName();
        var personFirma = personArrayValue.getOrganization();
        var personPosition = personArrayValue.getPosition();
        var personPhoto = personArrayValue.getPhoto();

        var pageLink = personId + personName;
        pageLink = pageLink.replace(/\s+/g, '');

//        $.get("speaker.html", function(data){
//            $(this).children("body").html(data);
//        });


        //Detailseiten anlegen
        $("body").append('<div data-role="page" id="' + pageLink + '">' +
            '<div data-role="header"><h1>' + personName + ' (' + personPosition + ')</h1>' +
            '</div>');

        //ListView population
        $("#personListView").append('<li>' +
            '<a href="#'+ pageLink + '" class="">' +
            '<div style="background-image: url(' + personPhoto + ')" class="personPhoto"></div>' +
            '<div class="personText">'+ personName + ' (' + personPosition + ')<br />' + personFirma + '</div>' +
            '</a>' +
            '<a href="#fav"></a></li>'); //<img src="' + personPhoto + '">
    });

    $("#personListView").listview( "refresh" );
}
