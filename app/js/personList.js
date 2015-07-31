//Für jede Person wird eine neue Page Detailseite angelegt
var personArray = ["Person1", "Person2", "Person3", "Person4"];

//array durchlaufen listView mit den Personen populieren. Für jede Person Detailseite anlegen
$.each(personArray, function( index, value ) {

    //TODO: Anforderung unique ID sein
    var person = value;
    //ListView population
    $("body").append('<div data-role="page" id="' + person + '">' +
        '<div data-role="header"><h1>' + person + '</h1></div>');

    //Detailseiten anlegen
    $("#personListView").append('<li><a href="#'+ person + '"> <img src="images/person.png" >'+ person + '  </a> </li>');
});
