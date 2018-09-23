sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("loc.HRM_REQUIREMENT_BOARD.controller.App", {
   onInit:function()
   {
   	$.ajax({
   		url:"/core_backend/index.xsjs",
   		contentType:"application/json",
   		method: 'GET',
   		success:function(data,textStatus,jqXHR){
   	console.log(data);		
   		},
   		error:function(jqXHR,textStatus,errorThrown)
   		{}
   	});
   	var sServiceUrl = "/core_backend/odata/services.xsodata";
   	var c4cmodel_Service = new sap.ui.model.odata.v2.ODataModel(sServiceUrl,false);
   	c4cmodel_Service.read("/RecruiterBoard",null,null,false,function(oData, oResponse){
              // create JSON model
              var oODataJSONModel =  new sap.ui.model.json.JSONModel();
               
              // set the odata JSON as data of JSON model
              oODataJSONModel.setData(oData);
   
   
           });
   }
	});
});