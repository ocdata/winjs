
//array durchlaufen listView mit den Links populieren.
$.each(demoLinkArray, function (index, linkArrayValue) { //demoSpeakerArray aus stub.js

    var url = linkArrayValue.getUrl();
    var title = linkArrayValue.getTitle();
    var service = linkArrayValue.getService();

    //ListView population
    $("#personListView").append('<li>' +
        '<a href="#' + url + '" class="">' +
        '<div class="linkText">' + title + ' (' + service + ')</div>' +
        '</a>' +
        '<a href="#test"></a></li>'); //<img src="' + personPhoto + '">
});
