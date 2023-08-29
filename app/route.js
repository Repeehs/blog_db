module.exports = function (app) {
    require('./routes/patron.route')(app);
    require('./routes/picture.route')(app);
};