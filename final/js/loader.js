var konfModel = null;
//initModel();

function initModel() {
	$.ajax({
		   url: "http://rp.axxg.org/2015/testData.php",
		   dataType: "json",
		   data: {},
		   type: "GET",
		   success: function(data) { parseData(data); }
		});		
}

function parseData(data) {
	// Fehler Handling!
	if(data == null || data == undefined){
		alert("Es ist ein Fehler in der Verarbeitung der Daten aufgetreten!");
		return;
	}
	
	// neues Datenmodell anlegen
	konfModel = new Konferenz();
	
	
	// Format
	try{
		// Datenarray holen
		var dataArray = data.formats;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}
			
			konfModel.getFormatArray().push(new Format(id, labelDe, labelEn));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Language
	try{
		// Datenarray holen
		var dataArray = data.languages;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}

			konfModel.getLanguageArray().push(new Language(id, labelDe, labelEn));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Level
	try{
		// Datenarray holen
		var dataArray = data.levels;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}

			konfModel.getLevelArray().push(new Level(id, labelDe, labelEn));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Day
	try{
		// Datenarray holen
		var dataArray = data.days;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			var dateStr = "";
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}
			
			if(itemData.hasOwnProperty("date")){
				dateStr = itemData.date;
			}


			konfModel.getDayArray().push(new Day(id, labelDe, labelEn, dateStr));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Location
	try{
		// Datenarray holen
		var dataArray = data.locations;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			var orderIndex = 0;
			var isStage = false;
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}
			
			if(itemData.hasOwnProperty("order_index")){
				orderIndex = itemData.order_index;
			}
			
			if(itemData.hasOwnProperty("is_stage")){
				isStage = itemData.is_stage;
			}

			konfModel.getLocationArray().push(new Location(id, labelDe, labelEn, orderIndex, isStage));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Track
	try{
		// Datenarray holen
		var dataArray = data.tracks;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var labelDe = "";
			var labelEn = "";
			var color = "#FFFFFF";
			
			if(itemData.hasOwnProperty("label_de")){
				labelDe = itemData.label_de;
			}
			
			if(itemData.hasOwnProperty("label_en")){
				labelEn = itemData.label_en;
			}
			
			if(itemData.hasOwnProperty("color")){
				var rgb = itemData.color[0] | (itemData.color[1] << 8) | (itemData.color[2] << 16);
			        
				color = '#' + (0x1000000 + rgb).toString(16).slice(1);
			}

			konfModel.getTrackArray().push(new Track(id, labelDe, labelEn, color));
		}		
	}catch (e) {
		// TODO: handle exception
	}
	
	// Speaker
	try{
		// Datenarray holen
		var dataArray = data.speakers;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var name = "";
			var photo = "";
			var url = "";
			var biography = "";
			var organization = "";
			var organizationUrl = "";
			var position = "";
			var linkArray = new Array();
			
			
			if(itemData.hasOwnProperty("name")){
				name = itemData.name;
			}
			
			if(itemData.hasOwnProperty("photo")){
				photo = itemData.photo;
			}
			
			if(itemData.hasOwnProperty("url")){
				url = itemData.url;
			}
			
			if(itemData.hasOwnProperty("biography")){
				biography = itemData.biography;
			}
			
			if(itemData.hasOwnProperty("organization")){
				organization = itemData.organization;
			}
			
			if(itemData.hasOwnProperty("organization_url")){
				organizationUrl = itemData.organization_url;
			}
			
			if(itemData.hasOwnProperty("position")){
				position = itemData.position;
			}
			
			if(itemData.hasOwnProperty("links")){
				
				for (var int2 = 0; int2 < itemData.links.length; int2++) {
					var linkData = itemData.links[int2];
					
					var linkUrl = "";
					var linkTitle = "";
					var linkService = "";
					var linkType = "";
					var linkUsername = "";
					
					if(linkData.hasOwnProperty("url")){
						linkUrl = linkData.url;
					}
					
					if(linkData.hasOwnProperty("title")){
						linkTitle = linkData.title;
					}
					
					if(linkData.hasOwnProperty("service")){
						linkService = linkData.service;
					}
					
					if(linkData.hasOwnProperty("type")){
						linkType = linkData.type;
					}
					
					if(linkData.hasOwnProperty("username")){
						linkUsername = linkData.username;
					}
					
					linkArray.push(new Link(linkUrl, linkTitle, linkService, linkType, linkUsername));
				}
			}
			
			konfModel.getSpeakerArray().push(new Speaker(id, name, photo, url, biography, organization, organizationUrl, position, linkArray));
		}		
	}catch (e) {
		// TODO: handle exception
		alert(e);
	}
	
	// Session
	try{
		// Datenarray holen
		var dataArray = data.sessions;
		
		for (var int = 0; int < dataArray.length; int++) {
			var itemData = dataArray[int];
			
			// ID muss immer da sein!
			var id = itemData.id;
			
			// optionale Parameter
			var title = "";
			var abstractStr = "";
			var description = "";
			var url = "";
			var begin = "";
			var end = "";
			var duration = 0;
			var sliderShareKey = "";
			
			var dayObj = null;
			var locationObj = null;
			var formatObj = null;
			var trackObj = null;
			var levelObj = null;
			var languageObj = null;
			
			var linkArray = new Array();
			var speakerArray = new Array();
			
			
			if(itemData.hasOwnProperty("title")){
				title = itemData.title;
			}
			
			if(itemData.hasOwnProperty("abstract")){
				abstractStr = itemData.abstract;
			}
			
			if(itemData.hasOwnProperty("description")){
				description = itemData.description;
			}
			
			if(itemData.hasOwnProperty("url")){
				url = itemData.url;
			}
			
			if(itemData.hasOwnProperty("begin")){
				begin = itemData.begin;
			}
			
			if(itemData.hasOwnProperty("end")){
				end = itemData.end;
			}
			
			if(itemData.hasOwnProperty("duration")){
				duration = itemData.duration;
			}
			
			if(itemData.hasOwnProperty("sliderShareKey")){
				sliderShareKey = itemData.sliderShareKey;
			}
			
			if(itemData.hasOwnProperty("links")){
				
				for (var int2 = 0; int2 < itemData.links.length; int2++) {
					var linkData = itemData.links[int2];
					
					var linkUrl = "";
					var linkTitle = "";
					var linkService = "";
					var linkType = "";
					var linkUsername = "";
					
					if(linkData.hasOwnProperty("url")){
						linkUrl = linkData.url;
					}
					
					if(linkData.hasOwnProperty("title")){
						linkTitle = linkData.title;
					}
					
					if(linkData.hasOwnProperty("service")){
						linkService = linkData.service;
					}
					
					if(linkData.hasOwnProperty("type")){
						linkType = linkData.type;
					}
					
					if(linkData.hasOwnProperty("username")){
						linkUsername = linkData.username;
					}
					
					linkArray.push(new Link(linkUrl, linkTitle, linkService, linkType, linkUsername));
				}
			}
			
			if(itemData.hasOwnProperty("speakers")){
				
				for (var int2 = 0; int2 < itemData.speakers.length; int2++) {
					var secItemDataId = itemData.speakers[int2].id;
					
					// mit bestehenden Daten abgleichen
					for (var int3 = 0; int3 < konfModel.getSpeakerArray().length; int3++) {
						var konfItem = konfModel.getSpeakerArray()[int3];
						if(secItemDataId == konfItem.getId()){
							// gefunden und setzen
							speakerArray.push(konfItem);						
						}
					}
					
				}
			}
			
			// Day
			if(itemData.hasOwnProperty("day")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.day.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getDayArray().length; int3++) {
					var konfItem = konfModel.getDayArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						dayObj = konfItem;							
						break;
					}
				}
			}
			
			// location
			if(itemData.hasOwnProperty("location")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.location.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getLocationArray().length; int3++) {
					var konfItem = konfModel.getLocationArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						locationObj = konfItem;							
						break;
					}
				}
			}
			
			// format
			if(itemData.hasOwnProperty("format")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.format.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getFormatArray().length; int3++) {
					var konfItem = konfModel.getFormatArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						formatObj = konfItem;							
						break;
					}
				}
			}
			
			// track
			if(itemData.hasOwnProperty("track")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.track.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getTrackArray().length; int3++) {
					var konfItem = konfModel.getTrackArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						trackObj = konfItem;							
						break;
					}
				}
			}
			
			// level
			if(itemData.hasOwnProperty("level")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.level.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getLevelArray().length; int3++) {
					var konfItem = konfModel.getLevelArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						levelObj = konfItem;							
						break;
					}
				}
			}
			
			// language
			if(itemData.hasOwnProperty("lang")){
				// item muss eine ID haben!!!
				var secItemDataId =  itemData.lang.id;
				
				// mit bestehenden Daten abgleichen
				for (var int3 = 0; int3 < konfModel.getLanguageArray().length; int3++) {
					var konfItem = konfModel.getLanguageArray()[int3];
					if(secItemDataId == konfItem.getId()){
						// gefunden und setzen
						languageObj = konfItem;							
						break;
					}
				}
			}
			
			
			konfModel.getSessionArray().push(new Session(id, title, abstractStr, description, url, begin, end, duration, sliderShareKey, dayObj, locationObj, formatObj, trackObj, levelObj, languageObj, speakerArray, linkArray));
		}		
	}catch (e) {
		// TODO: handle exception
		alert(e);
	}
	
	/*
	
	alert("Tag:" + konfModel.getDayArray().length +
			"Format:" + konfModel.getFormatArray().length +
			"Lang:" + konfModel.getLanguageArray().length +
			"Level:" + konfModel.getLevelArray().length +
			"Loc:" + konfModel.getLocationArray().length +
			"Track:" + konfModel.getTrackArray().length +
			"Speaker:" + konfModel.getSpeakerArray().length +
			"Session:" + konfModel.getSessionArray().length);
	
	//alert(konfModel.getSessionArray()[0].getId());
	
	*/
}

function SortSession(a, b){
	
	// erst nach Zeit
	// zeit sollte immer da sein!
	var beginA = moment(a.getBegin());
	var beginB = moment(b.getBegin());
	
	if(beginA.isBefore(beginB)){
		return -1;
	}
	
	if(beginA.isAfter(beginB)){
		return 1;
	}
	
	// Zeit ist gleich, dann nach location gehen!
	if(a.getLocationObj() == null){
		return 1;
	}
	
	if(b.getLocationObj() == null){
		return -1;
	}
	
	// location ist da
	if(a.getLocationObj().getOrderIndex() > b.getLocationObj().getOrderIndex()){
		return 1;
	}
	
	if(a.getLocationObj().getOrderIndex() < b.getLocationObj().getOrderIndex()){
		return -1;
	}
	
	// sonst
	return 0;
}

function getSessionsByDay(day) {
	var ergArray = new Array();
	
	// Session des Tages bestimmen
	for (var int = 0; int < konfModel.getSessionArray().length; int++) {
		var session = konfModel.getSessionArray()[int];
		
		if(test.getDayObj().getId() == day.getId()){
			ergArray.push(session);			
		}
	}
	
	// zeitlich sortieren
	ergArray.sort(SortSession);
	
	return ergArray;
}


