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
    sessionPageLink = sessionPageLink.replace(/\s+/g, '');

    //listview population
    $("#sessionListView").append('<li>' +
        '<a href="#' + sessionPageLink + '" class="">' +

        '<div class="linktext">' + title + '</div>' +
        '<div class="speakerString">' + speakerString + '</div>' +

        '<div class="speakLanguage">Vortrag in ' + speakerLanguage + '</div>' +
        '<div class="speakTime">(' + vonBis +')</div>' +
        '<div class="speakLocation">Ort: ' + speakLocation + '</div>' +
        '</a>' +
        '<a href="#fav" class="fav" id="' + sessionPageLink+ '"></a></li>');


    //Detailseiten anlegen
    $("body").append('<div data-role="page" id="' + sessionPageLink + '">' +
        '<div data-role="header"><h1>' + title + ' (' + vonBis + ')</h1>' +
        '</div>');
});


$('.fav').click(function(){
    var text = $(this).attr('id');
   alert(text);
});
