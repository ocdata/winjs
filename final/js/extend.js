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
	addMenu($("#kontaktPage"), "kontaktPM");
	addMenu($("#newsPage"), "newsPM");
	addMenu($("#datenschutzPage"), "datenschutzPM");
	addMenu($("#impressumPage"), "impressumPM");
}

function addMenu(body, id) {
	$(body).append('<div data-role="panel" id="'+ id + '" data-position="left" data-display="overlay" ><h3>Menü</h3><ul data-role="listview" data-inset="true" style="min-width: 210px;"><li><a href="#dashboardPage">Dashboard</a></li><li><a href="#sessionListPage">Sessionplan</a></li><li><a href="#speakerListPage">Speakerübersicht</a></li><li><a href="#newsPage">News</a></li><li><a href="#kontaktPage">Kontakt</a></li><li><a href="#datenschutzPage">Datenschutzerklärung</a></li><li><a href="#impressumPage">Impressum</a></li></ul><br/><a data-rel="close" class="ui-btn">schließen</a></div>');
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

function genSpeakerList(listView, speakerArray, withDelete) {
	// liste erstmal reseten
	if(withDelete){
		listView.empty();
	}
	
	$.each(speakerArray, function( index, speaker ) { //demoSpeakerArray aus stub.js
        var speakerId = speaker.getId();
        var speakerName = speaker.getName();
        var speakerFirma = speaker.getOrganization();
        var speakerPosition = speaker.getPosition();
        var speakerPhoto = speaker.getPhoto();

        var speakerLink = speakerId + speakerName;
        speakerLink = onlyNumbersAndLetters(speakerLink);

        //ListView population
        listView.append('<li>' +
            '<a onclick="goToSpeakerDetail(\'' + speakerId + '\');">' +
            '<div style="background-image: url(' + speakerPhoto + ')" class="speakerPhoto"></div>' +
            '<div class="speakerText">'+ speakerName + ' (' + speakerPosition + ')<br />' + speakerFirma + '</div>' +
            '</a>' +
            '<a href="#fav" id="'+ speakerLink +'" class="fav ' + speakerLink+ '" data-theme="c"></a></li>');

    });
	 
	 try {
		 // Liste neuerstellen lassen
		 listView.listview('refresh');
	} catch (e) {
		// TODO: handle exception
	}
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

        var sessionPageLink = ident + title;
        sessionPageLink = onlyNumbersAndLetters(sessionPageLink);

        //nur den nächsten Array Eintrag prüfen, wenn noch nicht am Ende des Arrays
        if(sessionArray.length > index+1){
            var nextBegin =  sessionArray[index+1].getBegin();
            nextBegin = moment(nextBegin).format("HH:mm");
            //wenn 2 darauffolgende Termine gleiche Anfangszeit haben. Und lastBegin null ist, d.h. noch kein divider gesetzt wurde. Setze einen Divider
            if(begin == nextBegin && lastBegin != begin){
                listView.append('<li data-role="list-divider">ab ' + begin + 'Uhr</li> ');
            }
            //wenn 2 aufeinanderfolgende Termine verschieden sind. Such dir die nächste 2 gleichen.

            lastBegin = begin;
        }
	    
	    //listview population
	    listView.append('<li>' +
	        '<a onclick="goToSessionDetail(\'' + ident + '\');">' +

	        '<div class="linktext">' + title + '</div>' +
	        '<div class="speakerString">' + speakerString + '</div>' +

	        '<div>Vortrag in ' + speakerLanguage + '</div>' +
	        '<div>' + vonBis +'</div>' +
	        '<div class="sessionLocation">Ort: ' + speakLocation + '</div>' +
	        '</a>' +
            '<a href="#fav" id="'+ sessionPageLink +'" class="fav ' + sessionPageLink+ '" data-theme="c"></a></li>');

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

    var nameOfFavorite = 'favoriteSessions';
    markFavoriteWithIcon(nameOfFavorite);

    $('.fav').click(function(){
        //use HTML5 LocalStorage
        var uniqueFavId = $(this).attr('id');

        favChanged(uniqueFavId, 'favoriteSessions');
    });
});


$(document).on("pagecreate", "#speakerListPage", function(event){
	var speakerArray = konfModel.getSpeakerArray();

	genSpeakerList($("#speakerListView"), speakerArray, false);
    var nameOfFavorite = 'favoritePersons';

    markFavoriteWithIcon(nameOfFavorite);

    $('.fav').click(function(){
        //use HTML5 LocalStorage
        var uniqueFavId = $(this).attr('id');

        favChanged(uniqueFavId, 'favoritePersons');
    });

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
	 
	 
	 // Linkliste erzeugen
	 genLinkList($("#speakerDetailLinkListView"), speaker.getLinkArray());
	 
	 // ggf Twitter aktivieren!!!
	 // egal wie einfach reseten
	 $("#speakerDetailTwitter").empty();
	 $("#speakerDetailTwitter").append("<span id='speakerDetailTwitterTmp'/>");
	 
	 for (var int2 = 0; int2 < speaker.getLinkArray().length; int2++) {
		var link = speaker.getLinkArray()[int2];
		
		if(link.getService() != "twitter"){
			$("#speakerDetailTwitterCon").hide();
		}else{
			$("#speakerDetailTwitterCon").show();
			
            twttr.widgets.createTimeline(
                    '627087937411354624',
                    document.getElementById('speakerDetailTwitterTmp'), {
                        width: 'auto',
                        height: '700',
                        related: 'twitterdev,twitterapi',
                        screenName: link.getUsername()
                    }).then(function (el) {
                    });
			break;
		}
	}
	 

	 
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
	// session suchen
	var session = null;
	
	for (var int = 0; int < konfModel.getSessionArray().length; int++) {
		session = konfModel.getSessionArray()[int];
		if(session.getId() == ident){
			// richtiger Speaker gefunden oder den Letzten!
			break;
		}
	}
	
	//var test = new Session(id, title, abstractStr, description, url, begin, end, duration, sliderShareKey, dayObj, locationObj, formatObj, trackObj, levelObj, languageObj, speakerArray, linkArray);
	//test.getTitle();
	
	// Seite belegen
	$("#sessionDetailTitle").text(session.getTitle());
    // Erstellen eines Strings mit der Uhrzeit
    var begin = session.getBegin();
    var end = session.getEnd();
    begin = moment(begin).format("HH:mm");
    end = moment(end).format("HH:mm");
    var vonBis = begin + ' - ' + end;

    // Text einfüllen
	$("#sessionDetailTime").html("Zeit:<br/>" + vonBis + " (" + (session.getDuration() / 60 / 60) + "h)");
	$("#sessionDetailLocation").html("Ort:<br/>" + session.getLocationObj().getLabelDe());
	$("#sessionDetailLanguage").html("Sprache:<br/>" + session.getLanguageObj().getLabelDe());
	$("#sessionDetailTrack").html("Track:<br/>" + session.getTrackObj().getLabelDe() + " <span class='fa fa-cube' style='color:" + session.getTrackObj().getColor() + "'></span>");
	
	$("#sessionDetailLevel").html("Level:<br/>" + session.getLevelObj().getLabelDe());
	
	$("#sessionDetailAbstract").html(session.getAbstractStr());
	$("#sessionDetailDesc").html(session.getDescription());
	
	 // Speakerliste erzeugen
	genSpeakerList($("#sessionDetailSpeakerListView"), session.getSpeakerArray(), true);
	
	 // Linkliste erzeugen
	if(session.getLinkArray().length == 0){
		$("#sessionDetailLinkCon").hide();
	}else{
		$("#sessionDetailLinkCon").show();
		genLinkList($("#sessionDetailLinkListView"), session.getLinkArray());
	}
	
	// etherpad
	$('#sessionDetailetherpad').html(" <iframe name='embed_readwrite' src='https://piratenpad.de/p/BnXFfh1mxgox8fvlelrls?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false' width='100%' height='400px'></iframe>");
	
	//slidershare
	session.setSliderShareKey("8bDozc1K8DdHsE");
	
	if(session.getSliderShareKey() == ""){
		$("#sessionDetailSliderShareCon").hide();
	}else{
		$("#sessionDetailSliderShareCon").show();
		$('#sessionDetailSliderShare').html('<iframe id="slideshare" src="https://de.slideshare.net/slideshow/embed_code/key/' + session.getSliderShareKey() +
				'"width="599" height="487" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen/>');
	}
	
	// Seite wechseln
	$( ":mobile-pagecontainer" ).pagecontainer( "change", $("#sessionDetailPage"));
}


