//array durchlaufen listview mit den links populieren.
$.each(demoSessionArray, function (index, sessionArrayValue) { //demolinkarray aus stub.js

    var id = sessionArrayValue.getId();
    var title = sessionArrayValue.getTitle();
    var url = sessionArrayValue.getUrl();
    var begin = sessionArrayValue.getBegin();
    var end = sessionArrayValue.getEnd();
    
    //listview population
    $("#sessionListView").append('<li>' +
        '<a href="' + url + '" target="_blank" class="">' +
        '<div class="linktext">' + title + '</br>(' + begin + ' - ' + end +')</div>' +
        '</a></li>');
    //§(#linkListView).append(<li><a href="url" class=""> <div class"linktext">Titel(Service)</div></a></
});
