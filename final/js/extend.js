function extendPages(){
	// SessionBar aufbauen
	for (var int = 0; int < konfModel.getDayArray().length; int++) {
		var day = konfModel.getDayArray()[int];
		if(int == 0){
			$("#SessionListBar").append('<li><a class="ui-btn-active" onclick="changeDay(\'' + day.getId() + '\');">' + day.getLabelDe() + '</a></li>');
		}else{
			$("#SessionListBar").append('<li><a onclick="changeDay(\'' + day.getId() + '\');">' + day.getLabelDe() + '</a></li>');	
		}
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

function getSessionsByDay(day) {
	var ergArray = new Array();
	
	// Session des Tages bestimmen
	for (var int = 0; int < konfModel.getSessionArray().length; int++) {
		var session = konfModel.getSessionArray()[int];
		
		if(session.getDayObj() != null){
			if(session.getDayObj().getId() == day.getId()){
				ergArray.push(session);			
			}
		}
	}
	
	// zeitlich sortieren
	ergArray.sort(SortSession);
	
	return ergArray;
}


function genLinkList(listView, linkArray) {
	// liste erstmal reseten
	listView.empty();
	
	 $.each(linkArray, function(index, link) {

		    var url = link.getUrl();
		    var title = link.getTitle();
		    var service = link.getService();

		    //listview population
		    listView.append('<li>' +
		      '<a href="' + url + '" target="_blank">' +
		      '<div class="linktext">' + title + ' (' + service + ')</div>' +
		      '</a></li>'); 
	  });
	 
	 try {
		 // Liste neuerstellen lassen
		 listView.listview('refresh');
	} catch (e) {
		// TODO: handle exception
	}
}

function genSessionList(listView, sessionArray) {
	// liste erstmal reseten
	listView.empty();
	
	$.each(sessionArray, function (index, session) { 

	    var ident = session.getId();
	    var title = session.getTitle();
	    var sessionRemoteUrl = session.getUrl();
	    var begin = session.getBegin();
	    var end = session.getEnd();
	    var speakerArray = session.getSpeakerArray();
	    var speakerLanguage = session.getLanguageObj().getLabelDe();
	    var speakLocation = session.getLocationObj().getLabelDe();

	    begin = moment(begin).format("HH:mm");
	    end = moment(end).format("HH:mm");

	    var vonBis = begin + ' - ' + end;

	    var speakerString = "";
	    $.each(speakerArray, function (index, speaker) {
	        speakerString += speaker.getName() + ", ";
	    });

	    //letztes Komma abschneiden
	    speakerString = speakerString.substr(0, speakerString.length - 2);

	    
	    //listview population
	    listView.append('<li>' +
	        '<a onclick="goToSessionDetail(\'' + ident + '\');">' +

	        '<div class="linktext">' + title + '</div>' +
	        '<div class="speakerString">' + speakerString + '</div>' +

	        '<div>Vortrag in ' + speakerLanguage + '</div>' +
	        '<div>' + vonBis +'</div>' +
	        '<div class="sessionLocation">Ort: ' + speakLocation + '</div>' +
	        '</a>' +
	        '<a></a></li>');
	});
	
	
	 
	 try {
		 // Liste neuerstellen lassen
		 listView.listview('refresh');
	} catch (e) {
		// TODO: handle exception
	}
}


// Seitenspezifisch
$(document).on("pagecreate", "#sessionListPage", function(event){
	// Das erste Mal
	// immer den ersten Tag im Array nehmen!
	var sessionArray = getSessionsByDay(konfModel.getDayArray()[0]);
	genSessionList($("#sessionListView"), sessionArray);
});


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

function changeDay(ident) {
	// Speaker suchen
	var day = null;
	
	for (var int = 0; int < konfModel.getDayArray().length; int++) {
		day = konfModel.getDayArray()[int];
		if(day.getId() == ident){
			// richtiger Tag gefunden oder den Letzten!
			break;
		}
	}
	
	var sessionArray = getSessionsByDay(day);
	genSessionList($("#sessionListView"), sessionArray);	
}


function goToSpeakerDetail(ident) {
	// Speaker suchen
	var speaker = null;
	
	for (var int = 0; int < konfModel.getSpeakerArray().length; int++) {
		speaker = konfModel.getSpeakerArray()[int];
		if(speaker.getId() == ident){
			// richtiger Speaker gefunden oder den Letzten!
			break;
		}
	}
	
	// Seite belegen
	 $("#speakerDetailFoto").attr("src", speaker.getPhoto());
	 $("#speakerDetailName").text(speaker.getName());
	 $("#speakerDetailPosition").text(speaker.getPosition());
	 $("#speakerDetailOrganisation").text(speaker.getOrganization());
	 $("#speakerDetailBiografie").text(speaker.getBiography());
	 
	 //var test = new Speaker(id, name, photo, url, biography, organization, organizationUrl, position, linkArray);
	 //test.getBiography()
	 
	 // Linkliste erzeugen
	 genLinkList($("#speakerDetailLinkListView"), speaker.getLinkArray());
	 
	 // Sessionliste erzeugen
	 // sonst zyklische Abhängigkeiten im Datenmodell!!!
	 var speakerSessionArray = new Array();
	 for (var int2 = 0; int2 < konfModel.getSessionArray().length; int2++) {
		var session = konfModel.getSessionArray()[int2];
		
		for (var int3 = 0; int3 < session.getSpeakerArray().length; int3++) {
			var sessionSpeaker = session.getSpeakerArray()[int3];
			if(sessionSpeaker.getId() == speaker.getId()){
				speakerSessionArray.push(session);
				break;
			}
		}
		
	}
	 
	 // SessionListe erzeugen
	 genSessionList($("#speakerDetailSessionListView"), speakerSessionArray);

	
	// Seite wechseln
	$( ":mobile-pagecontainer" ).pagecontainer( "change", $("#speakerDetailPage"));
}

function goToSessionDetail(ident) {
	// Seite wechseln
	alert(ident);	
	$( ":mobile-pagecontainer" ).pagecontainer( "change", $("#sessionDetailPage"));
}


