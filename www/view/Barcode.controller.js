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
	},
		
	onBeforeShow: function() {
	    // Set app
        this.app = sap.ui.getCore().byId("idMyApp");
        
        //set Model as JSONModel
        var oModel = new sap.ui.model.json.JSONModel();
        
        //get a Barcode with the cam
        this.getBarcode();
        
        //set Data to the JSONModel
        oModel.setData({
            idBarcode: this.text
        });
        
        //set View
        this.view = this.getView();
        
        //Set JSONModel to the View
        this.view.setModel(oModel);
	},
	
	//get Barcode
	getBarcode: function() {
	    cordova.plugins.barcodeScanner.scan(
            function (result) {
                this.text = result.text; 
            }, 
            function (error) {
                this.text = error;
            }
        );
	},
	
	//Navigate back
	onNavBack: function() {
        this.app.back();
    }

});