/**
 * Created by Sheeper on 29/08/2023.
 */
// our components
const picService = require('../services/picture.service');

module.exports = function (app) {
    app.get('/api/blog/pictures', picService.getAll);
    /**
     * @api {GET} /api/v1/pictures Get All
     * @apiVersion 0.1.0
     * @apiName getAll
     * @apiGroup Pictures
     * @apiPermission Every type of users
     *
     * @apiDescription Get all pictures
     *
     * @apiParam None
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/pictures
     *
     * @apiSuccess {String} list of all pictures' info
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     * {
     *    "data": [
     *        {
     *            "id": 1,
     *            "name": "a",
     *            "image": "https://res.cloudinary.com/dato5qlvn/image/upload/v1693832016/cwnitt8h8n2pezhbhknb.png",
     *            "description": "a"
     *        },
     *        ...
     *    ],
     *    "pages": {
     *        "current": 1,
     *        "prev": 0,
     *        "hasPrev": false,
     *        "next": 2,
     *        "hasNext": true,
     *        "total": 3,
     *        "hexPrev": false
     *    },
     *    "items": {
     *        "begin": 1,
     *        "end": 10,
     *        "total": 26
     *    },
     *    "message": "",
     *    "result": "ok"
     * }
     * @apiError get_list_picture_fail
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *  {
     *    "result": "fail",
     *    "code": 1,
     *    "error": "get_list_pictures_fail",
     *    "all": {}
     *  }
     */
    app.get('/api/blog/pictures/:id', picService.getOne);
    /**
     * @api {GET} /api/v1/patrons/:id Get One
     * @apiVersion 0.1.0
     * @apiName getOne
     * @apiGroup Patrons
     * @apiPermission Every type of users
     *
     * @apiDescription Get one patron
     *
     * @apiParam {string} an ID of patron, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/patrons/:id
     *
     * @apiSuccess {String} information of patron
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  {
     *    "data": {
     *        "id": 1,
     *        "name": "Shawn Jackson",
     *        "donation": 50,
     *        "comment": "The art is not too bad, keep up the good work."
     *    },
     *    "message": "",
     *    "result": "ok"
     *  }
     * 
     * 
     * @apiError get_patron_fail
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *  {
     *    "result": "fail",
     *    "code": 400,
     *    "error": "get_patron_fail",
     *    "all": {}
     *  }
     */
    app.post('/api/blog/pictures', picService.create);
    app.put('/api/blog/pictures/:id', picService.update);
    app.delete('/api/blog/pictures/:id', picService.delete);
};