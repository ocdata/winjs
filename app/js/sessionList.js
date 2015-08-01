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

function onlyNumbersAndLetters(string){
    if(string){
        return string.replace(/[^a-zA-Z0-9_]/g,'');
    }
    return;
}


var favChanged = function (favId) {
    favId = onlyNumbersAndLetters(favId);
    // Inhalt aus localstorage holen als Json
    var favSessions = JSON.parse(localStorage.getItem('favoriteSessions')) || [];
    //if favId is in inArray returns the index of favId or -1
    if($.inArray(favId, favSessions) >= 0) {
        setFavoriteIcon(favId, false);
        //remove element
        favSessions.splice(favSessions.indexOf(favId), 1);
    } else {
        setFavoriteIcon(favId, true);
        //Element dazupushen
        favSessions.push(favId);
    }
    //favSessions zurückschreiben
    localStorage.setItem('favoriteSessions', JSON.stringify(favSessions));
}
var setFavoriteIcon = function(id, isFavorite){
    if(isFavorite)
        $('.' + id).buttonMarkup({theme: 'b'});
    else
        $('.' + id).buttonMarkup({theme: 'c'});
}
var markFavoriteSessionsWithIcon = function(){
    var favSessions = JSON.parse(localStorage.getItem('favoriteSessions'));

//    document.styleSheets[0].insertRule('.session-3DeutscheBank:after{ content: "\f004";}', 1);

    $.each(favSessions, function (index, favId) {

        favId = onlyNumbersAndLetters(favId);
        //#session-3DeutscheBank::after
//        document.styleSheets[0].insertRule('.' + favId + ':after{ content: "\f004";}', 1);

        $('.' + favId).buttonMarkup({theme: 'b'});


//        $('#' + favId + '::after').css('content', '\f004');
    });

}
markFavoriteSessionsWithIcon();

$('.fav').click(function(){
//    alert("");
    //use HTML5 LocalStorage
    var sessionIdAndName = $(this).attr('id');

    favChanged(sessionIdAndName);


});



// Check browser support
//if (typeof(Storage) != "undefined") {
//    // Store
//    localStorage.setItem("lastname", "Smith");
//    // Retrieve
//    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//    } else {
//    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//    }