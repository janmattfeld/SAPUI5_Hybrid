sap.ui.controller("view.Camera", {

app: null,
view: null,
src: null,
text: null,

	onInit: function() {
	    // Set app
        this.app = sap.ui.getCore().byId("idMyApp");
        
        //set Model as JSONModel
        var oModel = new sap.ui.model.json.JSONModel();
        
        //take a Photo with the camera
        this.takePhoto();
        
        //set Data to the JSONModel
        oModel.setData({
            idImageSrc: this.src,
            idText: this.text
        });
        
        //set View
        this.view = this.getView();
        
        //Set JSONModel to the View
        this.view.setModel(oModel);
	},
	
	//take a photo
	takePhoto: function() {
	    navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50,
			destinationType : Camera.DestinationType.DATA_URL
		});
		
		function onSuccess(imageData) {
			this.src = "data:image/jpeg;base64," + imageData;
		}
		
		function onFail(message) {
			this.text = message;
		}
	},
	
	//Navigate back
	onNavBack: function() {
        this.app.back();
    }

});