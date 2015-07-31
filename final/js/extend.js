function extendPages(){
	// SessionBar aufbauen
	for (var int = 0; int < konfModel.getDayArray().length; int++) {
		var day = konfModel.getDayArray()[int];
		$("#SessionListBar").append('<li><a href="#">' + day.getLabelDe() + '</a></li>');	
	}
	
	// Seiten das Menu appenden!
	addMenu($("#dashboardPage"), "dashboardPM");
	addMenu($("#sessionListPage"), "sessionListPM");
	addMenu($("#speakerListPage"), "speakerListPM");
}




function addMenu(body, id) {
	$(body).append('<div data-role="popup" id="'+ id + '"><ul data-role="listview" data-inset="true" style="min-width: 210px;"><li data-role="list-divider">Choose an action</li><li><a href="#">View details</a></li><li><a href="#">Edit</a></li><li><a href="#">Disable</a></li><li><a href="#">Delete</a></li></ul></div>');
}
