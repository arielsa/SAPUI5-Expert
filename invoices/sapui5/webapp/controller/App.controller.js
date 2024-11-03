//@ts-nocheck
sap.ui.define(
    [ 
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",

    ],

    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */

    function(Controller, MessageToast ){        
        "use strict";
        return Controller.extend
        (
            "logaligroup.sapui5.controller.App",            
            {
                onInit : function (){//console.log(this);

                },

                onShowHello: function(){
                    //read text from i18n
                    var oBundle = this.getView().getModel("i18n").getResourceBundle();
                    var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                    var sMsg = oBundle.getText("helloMsg",[sRecipient]);
                    //console.log(sRecipient);
                    MessageToast.show(sMsg);
                }
            }
        );
    }
  );


