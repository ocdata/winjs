var konfModel = null;
initModel();

function initModel() {
	$.ajax({
		   url: "http://rp.axxg.org/2015/testData.php",
		   datatype: "json",
		   data: {},
		   type: "POST",
		   success: function(data) { parseData(data); }
		});		
}

function parseData(data) {
	
}

