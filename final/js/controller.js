$( document ).ready(function() {
	// Modell initialisieren
	// nach auf Dashboard 
	initModel();
	
	// Seiten das Menu appenden!
	addMenu($("#dashboardPage"), "dashboardPM");
	addMenu($("#sessionPage"), "sessionPM");
});




function addMenu(body, id) {
	$(body).append('<div data-role="popup" id="'+ id + '"><ul data-role="listview" data-inset="true" style="min-width: 210px;"><li data-role="list-divider">Choose an action</li><li><a href="#">View details</a></li><li><a href="#">Edit</a></li><li><a href="#">Disable</a></li><li><a href="#">Delete</a></li></ul></div>');
}
