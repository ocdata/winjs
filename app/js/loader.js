var konfModel = null;
initModel();

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

					linkArray.push(new Link(linkUrl, linkTitle, linkService, linkType));
				}
			}

			konfModel.getSpeakerArray().push(new Speaker(id, name, photo, url, biography, organization, organizationUrl, position, linkArray));
		}
	}catch (e) {
		// TODO: handle exception
		alert(e);
	}


    //TODO: nicht direkt in Methode aufrufen sondern sequenziell?
    genSpeaker();
}

