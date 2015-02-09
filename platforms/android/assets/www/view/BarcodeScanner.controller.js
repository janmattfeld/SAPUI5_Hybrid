sap.ui.controller("view.BarcodeScanner", {

	onAfterRendering : function() {
		cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
	},
	
	onNavBack: function() {
		var app = sap.ui.getCore().byId("idMyApp");
		app.back();
	}

	

});