const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');
const patron = require('./patron.model');

const picture = mySequel.define('picture', {
    id: {
        type: sequel.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: sequel.STRING(200),
        allowNull: true,
    },

    image: {
        type: sequel.STRING(100),
        allowNull: true,
    },
    description: {
        type: sequel.TEXT,
        allowNull: true,
    },

}, {
    underscored: false,
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'blog_picture',
});

module.exports = picture;