sap.ui.controller("view.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.View1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.View1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.View1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.View1
*/
//	onExit: function() {
//
//	}

loadBarcodeScanner: function(){
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
},

loadCamera: function(){
var app = sap.ui.getCore().byId("idMyApp");
    var view = sap.ui.getCore().byId("idCamera");
    
    app.to(view);
},

loadLookAndFeel: function(){
    var app = sap.ui.getCore().byId("idMyApp");
    var view = sap.ui.getCore().byId("idLookAndFeel");
    
    app.to(view);
},

loadUniqueID:  function(){
    onAfterRendering: function() {
	    alert(device.uuid);
	},
}



});