sap.ui.controller("view.Camera", {

	onAfterRendering : function() {
		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50,
			destinationType : Camera.DestinationType.DATA_URL
		});

		function onSuccess(imageData) {
			var image = document.getElementById('image0');
			image.src = "data:image/jpeg;base64," + imageData;
		}

		function onFail(message) {
			alert('Failed because: ' + message);
		}

	},
    
    onNavBack: function() {
		var app = sap.ui.getCore().byId("idMyApp");
		app.back();
	}

});