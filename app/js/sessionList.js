function genSessions(){
    var numOfSessionsWithSameBeginning = 0;
    var lastBegin = null;

//array durchlaufen listview mit den links populieren.
$.each(demoSessionArray, function (index, sessionArrayValue) { //demolinkarray aus stub.js

    var id = sessionArrayValue.getId();
    var title = sessionArrayValue.getTitle();
    var sessionRemoteUrl = sessionArrayValue.getUrl();
    var begin = sessionArrayValue.getBegin();
    var end = sessionArrayValue.getEnd();
    var speakerArray = sessionArrayValue.getSpeakerArray();
    var speakerLanguage = sessionArrayValue.getLanguageObj().getLabelDe();
    var speakLocation = sessionArrayValue.getLocationObj().getLabelDe();

    begin = moment(begin).format("HH:mm");
    end = moment(end).format("HH:mm");

    var vonBis = begin + ' - ' + end;

    var speakerString = "";
    $.each(speakerArray, function (index, speakerArrayValue) {
        speakerString += speakerArrayValue.getName() + ", ";
    });

    //letztes Komma abschneiden
    speakerString = speakerString.substr(0, speakerString.length - 2);

    var sessionPageLink = id + title;
    sessionPageLink = onlyNumbersAndLetters(sessionPageLink);

    //nur den nächsten Array Eintrag prüfen, wenn noch nicht am Ende des Arrays
    if(demoSessionArray.length > index+1){
        var nextBegin =  demoSessionArray[index+1].getBegin();
        nextBegin = moment(nextBegin).format("HH:mm");
        //wenn 2 darauffolgende Termine gleiche Anfangszeit haben. Und lastBegin null ist, d.h. noch kein divider gesetzt wurde. Setze einen Divider
        if(begin == nextBegin && lastBegin != begin){
            $("#sessionListView").append('<li data-role="list-divider">ab ' + begin + 'Uhr</li> ');
        }
        //wenn 2 aufeinanderfolgende Termine verschieden sind. Such dir die nächste 2 gleichen.

        lastBegin = begin;
    }

    //listview population
    $("#sessionListView").append('<li>' +
        '<a href="#' + sessionPageLink + '" class="">' +
        '<div class="linktext">' + title + '</div>' +
        '<div class="speakerString">' + speakerString + '</div>' +
        '<div class="speakLanguage">Vortrag in ' + speakerLanguage + '</div>' +
        '<div class="speakTime">(' + vonBis +')</div>' +
        '<div class="speakLocation">Ort: ' + speakLocation + '</div>' +
        '</a>' +
        '<a href="#fav" id="'+ sessionPageLink +'" class="fav ' + sessionPageLink+ '" data-theme="c"></a></li>');

    //Detailseiten anlegen
    $("body").append('<div data-role="page" id="' + sessionPageLink + '">' +
        '<div data-role="header"><h1>' + title + ' (' + vonBis + ')</h1>' +
        '</div>');
    });
}

var nameOfFavorite = 'favoriteSessions';

genSessions();

markFavoriteWithIcon(nameOfFavorite);

$('.fav').click(function(){
    //use HTML5 LocalStorage
    var uniqueFavId = $(this).attr('id');

    favChanged(uniqueFavId, 'favoriteSessions');
});