//@ts-nocheck
sap.ui.define(
    [],
    function(){
        return{
            invoicesStatus : function(sStatus){
                //console.log(this.getView().getModel('i18n'));
                const resourceBundle = this.getView().getModel("i18n").getResourceBundle();
                //console.log(resourceBundle);
                switch (sStatus) {
                    case 'A': return resourceBundle.getText("invoicesStatusA") ;                        
                    case 'B': return resourceBundle.getText("invoicesStatusB") ;                        
                    case 'C': return resourceBundle.getText("invoicesStatusC") ;
                    //case 'A': return "new" ;                        
                    //case 'B': return "old"  ;                        
                    //case 'C': return "done"  ;                       
                    default: return sStatus;
                }

            }
        }
    }
);