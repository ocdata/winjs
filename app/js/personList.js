function genSpeaker(){
//    speakerArray = konfModel.getSpeakerArray();
    var speakerArray = demoSpeakerArray;

    $.each(speakerArray, function( index, personArrayValue ) { //demoSpeakerArray aus stub.js
        var personId = personArrayValue.id;
        var personName = personArrayValue.getName();
        var personFirma = personArrayValue.getOrganization();
        var personPosition = personArrayValue.getPosition();
        var personPhoto = personArrayValue.getPhoto();

        var pageLink = personId + personName;
        pageLink = onlyNumbersAndLetters(pageLink);

//    var speaker = $( "#result" ).load( "speaker.html", function() {
//        alert( "" );
//    });

//        $.get("speaker.html", function(data){
//            $(this).children("body").html(data);
//        });


        //Detailseiten anlegen. Für jede Person wird eine neue Page Detailseite angelegt
        $("body").append('<div data-role="page" id="' + pageLink + '">' +
            '<div data-role="header"><h1>' + personName + ' (' + personPosition + ')</h1>' +
            '</div>');

        //ListView population
        $("#personListView").append('<li>' +
            '<a href="#'+ pageLink + '" class="">' +
            '<div style="background-image: url(' + personPhoto + ')" class="personPhoto"></div>' +
            '<div class="personText">'+ personName + ' (' + personPosition + ')<br />' + personFirma + '</div>' +
            '</a>'+
            '<a href="#fav" id="'+ pageLink +'" class="fav ' + pageLink+ '" data-theme="c"></a></li>');
    });
}

var nameOfFavorite = 'favoritePersons';

genSpeaker();

markFavoriteWithIcon(nameOfFavorite);

$('.fav').click(function(){
    //use HTML5 LocalStorage
    var uniqueFavId = $(this).attr('id');

    favChanged(uniqueFavId, 'favoritePersons');
});

