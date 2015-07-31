//Für jede Person wird eine neue Page Detailseite angelegt
var personFavs = ["Person2"];

//array durchlaufen listView mit den Personen populieren. Für jede Person Detailseite anlegen
$.each(personFavs, function( index, value ) {

    var person = value;

    //ListView population
    $("body").append('<div data-role="page" id="' + person + '">' +
        '<div data-role="header"><h1>' + person + '</h1></div>');

    //Detailseiten anlegen
    $("#personFavoritenListView").append('<li><a href='+ "#" + person + ' id="a"  "> <img src="images/person.png" >'+ value + '  </a> </li>');
});
