sap.ui.controller("view.Id", {

	app : null,
	view : null,
	uuid : null,

	onInit : function() {
		// to register for beforeShow event
		this.getView().addEventDelegate({
			// not added the controller as delegate to avoid controller
			// functions with similar names as the events
			onBeforeShow : jQuery.proxy(function(evt) {
				this.onBeforeShow(evt);
			}, this)
		});

		// Set app
		this.app = sap.ui.getCore().byId("idMyApp");
	},

	onBeforeShow : function() {
		var oModel = sap.ui.getCore().getModel();

		oModel.setData({
			idAppId : device.uuid
		});
	},

	onNavBack : function() {
		this.app.back();
	}

});