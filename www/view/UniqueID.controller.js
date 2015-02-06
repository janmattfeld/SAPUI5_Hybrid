sap.ui.controller("view.UniqueID", {

	onAfterRendering: function() {
	    alert(device.uuid);
	},


	onNavBack: function() {
		var app = sap.ui.getCore().byId("idMyApp");
		app.back();
	}
});