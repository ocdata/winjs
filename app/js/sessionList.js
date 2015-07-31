//array durchlaufen listview mit den links populieren.
$.each(demoSessionArray, function (index, sessionArrayValue) { //demolinkarray aus stub.js

    var id = sessionArrayValue.getId();
    var title = sessionArrayValue.getTitle();
    var url = sessionArrayValue.getUrl();
    var begin = sessionArrayValue.getBegin();
    var end = sessionArrayValue.getEnd();
    var speakerArray = sessionArrayValue.getSpeakerArray();
    var speakerLanguage = sessionArrayValue.getLanguageObj().getLabelDe();
    var speakLocation = sessionArrayValue.getLocationObj().getLabelDe();

    begin = moment(begin).format("HH:mm");
    end = moment(end).format("HH:mm");


    var speakerString = "";
    $.each(speakerArray, function (index, speakerArrayValue) {
        speakerString += speakerArrayValue.getName() + ", ";
    });

    //letztes Komma abschneiden
    speakerString = speakerString.substr(0, speakerString.length - 2);

    
    //listview population
    $("#sessionListView").append('<li>' +
        '<a href="' + url + '" target="_blank" class="">' +

        '<div class="linktext">' + title + '</div>' +
        '<div class="speakerString">' + speakerString + '</div>' +

        '<div class="speakLanguage">Vortrag in ' + speakerLanguage + '</div>' +
        '<div class="speakTime">(' + begin + ' - ' + end +')</div>' +
        '<div class="speakLocation">Ort: ' + speakLocation + '</div>' +
        '</a></li>');
    //�(#linkListView).append(<li><a href="url" class=""> <div class"linktext">Titel(Service)</div></a></
});
