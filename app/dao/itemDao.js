'use strict';

let  Items = [{id:1,name:'item1',price:20},{id:2,name:'item2',price:30 },
{id:3,name:'item3',price:40},{id:4,name:'item4',price:50}
];

var itemModel=require('../../app/models/item');
var db = require('../services/database');

var getStaticItems=function (req,res,next)
{
   
     res.json(Items);
}

var insert_item= function (req,res,next)
{
    db.sync().then(function () {

      itemModel.findOrCreate({where: {id: req.body.item.id}, defaults: req.body.item})
            .spread((item, created) => {
                console.log(created, item);
                res.json(created);
            });

    }).catch(function (error) {
        console.log(error);
        res.sendStatus(403)
    })
}

var find_all=function (req,res,next)
{
  debugger;
  itemModel.findAll().then(job =>
    {
        res.json(job);
    });

}
var update_item= function (req,res,next)
{
    var _id=req.params.id;
    itemModel.update(
        req.body.item,
        { where: { id: _id } }
    )
        .then(result =>
            {
                res.json(result)
            }
        )
        .catch(err =>
            {
                res.json(0);
            }
        );
}


var delete_item= function (req,res,next)
{
    //var id=req.params.id;
    itemModel.destroy({
        where: {id:req.params.id},
        //truncate: true //this will delete all the data
    }) .then(result =>
        {
            res.json(result)
        }
    )
        .catch(err =>
            {
                res.json(0);
            }
        );
}

var find_by_id=function (req,res,next)
{

    console.log('query id ',req.query.id);
    if (Object.keys(req.query).length>0) {
        itemModel.findOne({ where:req.query}).then(item => {
            if (item)
            {
                res.json(item);
            }
            else {

                res.json("value not found");
            }
        });}
    else {
        res.json("value not found 2");
    }
}


var auth =function (req,res,next)
{

  db.sync()
		.then(() => {
      console.log('Connection has been established successfully.');
      res.json(true);		
		})
		.catch((err) => {
      console.log('Unable to connect to the data:', err);
      res.json(err);
		});
}

module.exports ={ getStaticItems:getStaticItems,
                  getAllItems:find_all,
                  insertItem:insert_item,
                  updateItem:update_item,
                  deletItem:delete_item,
                  findItemById:find_by_id,
                  auth:auth
                 }