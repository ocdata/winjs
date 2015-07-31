WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector(".splitView").winControl;
    WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
});