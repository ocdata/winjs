function extendPages(){
	// SessionBar aufbauen
	for (var int = 0; int < konfModel.getDayArray().length; int++) {
		var day = konfModel.getDayArray()[int];
		$("#SessionListBar").append('<li><a href="#">' + day.getLabelDe() + '</a></li>');	
	}
	
	// Seiten das Menu appenden!
	addMenu($("#dashboardPage"), "dashboardPM");
	addMenu($("#sessionListPage"), "sessionListPM");
	addMenu($("#sessionDetailPage"), "sessionDetailPM");
	addMenu($("#speakerListPage"), "speakerListPM");
	addMenu($("#speakerDetailPage"), "speakerDetailPM");
	
	
}

function addMenu(body, id) {
	$(body).append('<div data-role="panel" id="'+ id + '" data-position="left" data-display="overlay" ><h3>Menü</h3><ul data-role="listview" data-inset="true" style="min-width: 210px;"><li><a href="#dashboardPage">Dashboard</a></li><li><a href="#sessionListPage">Sessionplan</a></li><li><a href="#speakerListPage">Speakerübersicht</a></li></ul><br/><a data-rel="close" class="ui-btn">schließen</a></div>');
}


// Seitenspezifisch

$(document).on("pagecreate", "#speakerListPage", function(event){
	var speakerArray = konfModel.getSpeakerArray();
	$.each(speakerArray, function( index, speaker ) { //demoSpeakerArray aus stub.js
        var speakerId = speaker.getId();
        var speakerName = speaker.getName();
        var speakerFirma = speaker.getOrganization();
        var speakerPosition = speaker.getPosition();
        var speakerPhoto = speaker.getPhoto();

        //ListView population
        $("#speakerListView").append('<li>' +
            '<a onclick="goToSpeakerDetail(\'' + speakerId + '\');">' +
            '<div style="background-image: url(' + speakerPhoto + ')" class="speakerPhoto"></div>' +
            '<div class="speakerText">'+ speakerName + ' (' + speakerPosition + ')<br />' + speakerFirma + '</div>' +
            '</a>' +
            '<a></a></li>'); 
    });

    $("#speakerListView").listview( "refresh" );
});

$(document).on("pagehide", "#speakerListPage", function(event){
	// notfalls cleanen
});

function goToSpeakerDetail(ident) {
	alert(ident);	
	$( ":mobile-pagecontainer" ).pagecontainer( "change", $("#speakerDetailPage"));
}

function goToSessionDetail(ident) {
	// Seite wechseln
	alert(ident);	
	$( ":mobile-pagecontainer" ).pagecontainer( "change", $("#sessionDetailPage"));
}


