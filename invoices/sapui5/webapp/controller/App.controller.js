//@ts-nocheck
sap.ui.define(
    [ 
        "sap/ui/core/mvc/Controller",
      //  "sap/m/MessageToast",

    ],

    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller      
     * 
     */

    function(Controller  ){        
        "use strict";
        return Controller.extend
        (
            "logaligroup.sapui5.controller.App",            
            {
                onInit : function (){//console.log(this);

                },
                onOpenHeader : function  () {
                    this.getOwnerComponent().onOpenHelloDialog();
                }
            }
        );
    }
  );


