'use strict';
var item= require('../dao/itemDao');
var getStaticItems=function(req,res,next){
    item.getStaticItems(req,res,next)
}

var getItemById =function(req,res,next){
    item.getItemById(req,res,next)
}

var getItems =function(req,res,next){
    item.getAllItems(req,res,next)
}

var auth =function(req,res,next){
    item.auth(req,res,next)
}

var insertItem=function(req,res,next){
    item.insertItem(req,res,next)
}
var updateItem=function(req,res,next){
    item.updateItem(req,res,next)
}
var deleteItem=function(req,res,next){
    item.deletItem(req,res,next)
}
var findItemById=function(req,res,next){
    item.findItemById(req,res,next)
}


module.exports={ getStaticItems:getStaticItems,
                 getItems:getItems,
                 auth:auth,
                 insertItem:insertItem,
                 updateItem:updateItem,
                 deleteItem:deleteItem,
                 findItemById:findItemById

                }