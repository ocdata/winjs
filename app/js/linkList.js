//array durchlaufen listview mit den links populieren.
$.each(demoLinkArray, function (index, linkArrayValue) { //demolinkarray aus stub.js

    var url = linkArrayValue.getUrl();
    var title = linkArrayValue.getTitle();
    var service = linkArrayValue.getService();

    if(service === 'twitter') {
      $("#linkListView").append('<div data-role="collapsible"><h4>Twitter</h4><div id="twitterWidget"></div></div>');
      return;
    }
    //listview population
    $("#linkListView").append('<li>' +
        '<a href="' + url + '" target="_blank" class="">' +
        '<div class="linktext">' + title + ' (' + service + ')</div>' +
        '</a></li>');
    //�(#linkListView).append(<li><a href="url" class=""> <div class"linktext">Titel(Service)</div></a></
});
