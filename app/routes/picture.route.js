/**
 * Created by Sheeper on 29/08/2023.
 */
// our components
const picService = require('../services/picture.service');

module.exports = function (app) {
    app.get('/api/blog/pictures', picService.getAll);
    app.get('/api/blog/pictures/:id', picService.getOne);
    app.post('/api/blog/pictures', picService.create);
    app.put('/api/blog/pictures/:id', picService.update);
    app.delete('/api/blog/pictures/:id', picService.delete);
};