const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const patron = mySequel.define('patron', {
    id: {
        type: sequel.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    name: {
        type: sequel.STRING(100),
        allowNull: true,
    },

    email: {
        type: sequel.STRING(100),
        allowNull: true,
    },
}, {
    underscored: false,
    timestamp: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'blog_patron',
});

module.exports = patron;