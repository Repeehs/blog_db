/**
 * Created by Hieu on 29/08/2023.
 */
// our components
const patronService = require('../services/patron.service');

module.exports = function (app) {
    app.get('/api/blog/patrons', patronService.getAll);
    app.get('/api/blog/patrons/:id', patronService.getOne);
    app.post('/api/blog/patrons', patronService.create);
    app.put('/api/blog/patrons/:id', patronService.update);
    app.delete('/api/blog/patrons/:id', patronService.delete);
};