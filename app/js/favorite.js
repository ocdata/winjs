/**
 * String enthaelt danach nur Buchstaben oder Zahlen
 */
function onlyNumbersAndLetters(string){
    if(string){
        return string.replace(/[^a-zA-Z0-9_]/g,'');
    }
    return;
}

/**
 * Inhalt vom Localstorage holen bearbeiten und wieder zurückschreiben
 */
var favChanged = function (favId, localstorageVariableName) {
    favId = onlyNumbersAndLetters(favId);
    // Inhalt aus localstorage holen als Json
    var alreadyMarkedFavorites = JSON.parse(localStorage.getItem(localstorageVariableName)) || [];
    //if favId is in inArray returns the index of favId or -1
    if($.inArray(favId, alreadyMarkedFavorites) >= 0) {
        setFavoriteIcon(favId, false);
        //remove element
        alreadyMarkedFavorites.splice(alreadyMarkedFavorites.indexOf(favId), 1);
    } else {
        setFavoriteIcon(favId, true);
        //Element dazupushen
        alreadyMarkedFavorites.push(favId);
    }
    //favorites zurückschreiben
    localStorage.setItem(localstorageVariableName, JSON.stringify(alreadyMarkedFavorites));
}
/**
 * Toggle Theme für Favorit
 */
var setFavoriteIcon = function(id, isFavorite){
    if(isFavorite)
        $('.' + id).buttonMarkup({theme: 'b'});
    else
        $('.' + id).buttonMarkup({theme: 'c'});
}
var markFavoriteWithIcon = function(localstorageVariableName){
    var favsFromLocalstorage = JSON.parse(localStorage.getItem(localstorageVariableName)) || [];

//    document.styleSheets[0].insertRule('.session-3DeutscheBank:after{ content: "\f004";}', 1);

    $.each(favsFromLocalstorage, function (index, favId) {
        favId = onlyNumbersAndLetters(favId);
        $('.' + favId).buttonMarkup({theme: 'b'});
    });

}