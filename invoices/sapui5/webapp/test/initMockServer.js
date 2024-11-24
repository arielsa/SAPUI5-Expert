//@ts-nocheck
sap.ui.define(
    [
        "../localService/mockserver",
        "sap/m/MessageBox"
    ], 
    /**
     * @param{ typeof sap.m.MessageBox } MessageBox
     */
    function( mockserver, MessageBox){
        "use strict";
        var aMockSerers = [];
        // inicializar el serveidor mock
        aMockSerers.push(mockserver.init());
        
        Promise.all(aMockSerers).catch(function(oError){
            MessageBox.error(oError.message);
        }).finally(function(){
            console.log('1');
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
            console.log('2');
        }); 
    } 
);