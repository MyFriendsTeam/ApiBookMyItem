'use strict'

var DataTypes = require('sequelize');
 var config = require('../config'),
    db = require('../services/database');
    

    var item = db.define('item',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:
        {
            type: DataTypes.STRING( { length:50 } ),
            required: true,
            allowNull: false
        },

        price:
        {
            type: DataTypes.DECIMAL(15,2),
            required: true,
            allowNull: false
        }
    },{
        timestamps: false
    });

    module.exports=item;
