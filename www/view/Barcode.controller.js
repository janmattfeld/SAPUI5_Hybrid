sap.ui.controller("view.Barcode", {

app: null,
view: null,
text: null,

	onInit: function() { 
		//to register for beforeShow event 
		this.getView().addEventDelegate({
			// not added the controller as delegate to avoid controller functions with similar names as the events 
			onBeforeShow : jQuery.proxy(function(evt) { this.onBeforeShow(evt); }, this) 
		}); 
	
		// Set app
        this.app = sap.ui.getCore().byId("idMyApp");
        
        //set Model as JSONModel
        var oModel = new sap.ui.model.json.JSONModel();
		
		//set View
        this.view = this.getView();
        
        //Set JSONModel to the View
        this.view.setModel(oModel);
	},
		
	onBeforeShow: function() {        
        //get a Barcode with the cam
        this.getBarcode();
	},
	
	//get Barcode
	getBarcode: function() {
	    cordova.plugins.barcodeScanner.scan(
            function (result) {
				//set Data to the JSONModel
				var oModel = this.view.getModel();
				oModel.setData({
					idBarcode: result.text
				});
            }, 
            function (error) {
				//set Data to the JSONModel
				var oModel = this.view.getModel();
				oModel.setData({
					idBarcode: error
				});
            }
        );
	},
	
	//Navigate back
	onNavBack: function() {
        this.app.back();
    }

});