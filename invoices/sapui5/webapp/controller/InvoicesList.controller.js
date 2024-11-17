//@ts-nocheck
sap.ui.define(
    [
        'sap/ui/core/mvc/Controller',
        'sap/ui/model/json/JSONModel',
        '../model/InvoicesFormater',
        'sap/ui/model/Filter',
        'sap/ui/model/FilterOperator'    

    ],
    /**
 * 
 * @param { typeof sap.ui.core.mvc.Controller } Controller 
 * @param { typeof sap.ui.model.json.JSONModel } JSONModel
 * @param { typeof sap.ui.model.Filter } Filter
 * @param { typeof sap.ui.model.FilterOperator } FilterOperator
 */
    function(Controller, JSONModel, InvoicesFormater, Filter, FilterOperator){ //console.log("aca1");
         return Controller.extend( 
            "logaligroup.sapui5.controller.InvoicesList",
          { 
            formater : InvoicesFormater,
            
            onInit: function(){// console.log("aca2");
                var oViewModel = new JSONModel( 
                    {
                        usd: "USD",
                        eur : "EUR"
                    }
                );
                this.getView().setModel(oViewModel, "currency"); //console.log(oViewModel);
                //console.log(this.getView().getModel("oViewModel"));
            },
            onFilterInvoices : function (oEvent){
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");
                if (sQuery){
                    aFilter.push(new Filter("ProductName",FilterOperator.Contains,sQuery));                    
                };
                const oList = this.byId("invoiceList");
                const oBinding = oList.getBinding("items");
                console.log(oBinding);
                oBinding.filter(aFilter);
            }
          }  
        );  //console.log("aca3");
        //return Controller;
    }
);