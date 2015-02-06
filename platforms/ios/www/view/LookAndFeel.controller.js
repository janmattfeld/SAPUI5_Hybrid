sap.ui.controller("view.LookAndFeel", {

onNavBack: function() {
		var app = sap.ui.getCore().byId("idMyApp");
		app.back();
	}

});