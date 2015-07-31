//$.getScript("/stub.js", function(){
//    alert("Script loaded but not necessarily executed.");
//});



//Für jede Person wird eine neue Page Detailseite angelegt
//var personArray = ["Person1", "Person2", "Person3", "Person4"];

//alert(speaker1.getName());
//alert("hello");

//array durchlaufen listView mit den Personen populieren. Für jede Person Detailseite anlegen
$.each(demoSpeakerArray, function( index, personArrayValue ) { //demoSpeakerArray aus stub.js

    var personId = personArrayValue.getId();
    var personName = personArrayValue.getName();
    var personFirma = personArrayValue.getOrganization();
    var personPosition = personArrayValue.getPosition();
    var personPhoto = personArrayValue.getPhoto();

    var pageLink = personId + personName;

    //Detailseiten anlegen
    $("div #listBegin").append('<div data-role="page" id="' + pageLink + '">' +
        '<div data-role="header"><h1>' + personName + ' (' + personPosition + ')</h1></div>');

    //ListView population
    $("#personListView").append('<li>' +
        '<a href="#'+ pageLink + '" class="">' +
        '<div style="background-image: url(' + personPhoto + ')" class="personPhoto"></div>' +
        '<div class="personText">'+ personName + ' (' + personPosition + ')<br />' + personFirma + '</div>' +
        '</a>' +
        '<a href="#test"></a></li>'); //<img src="' + personPhoto + '">
});
