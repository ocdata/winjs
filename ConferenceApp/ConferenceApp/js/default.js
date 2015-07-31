// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: Diese Anwendung wurdh neu gestartet. Initialisieren Sie die Anwendung hier.
			} else {
				// TODO: Diese Anwendung wurde angehalten und dann beendet.
				// Um für ein nahtloses Benutzererlebnis zu sorgen, stellen Sie den Anwendungszustand hier wieder her, sodass es aussieht, als wäre die Ausführung der App nie beendet worden.
			}
			args.setPromise(WinJS.UI.processAll());
		}
	};

	app.oncheckpoint = function (args) {
		// TODO: Diese Anwendung wird gleich angehalten. Speichern Sie hier alle Status, die über die das Anhalten hinaus beibehalten werden sollen.
		// Sie können das WinJS.Application.sessionState-Objekt verwenden, das automatisch gespeichert und über alle Anhaltevorgänge hinweg wiederhergestellt wird.
		// Wenn Sie vor dem Anhalten der Anwendung einen asynchronen Vorgang abschließen müssen, rufen Sie "args.setPromise()" auf.
	};

	app.start();
})();
