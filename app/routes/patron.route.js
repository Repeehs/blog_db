/**
 * Created by Hieu on 29/08/2023.
 */
// our components
const patronService = require('../services/patron.service');

module.exports = function (app) {
    app.get('/api/blog/patrons', patronService.getAll);
    /**
     * @api {GET} /api/v1/patrons Get All
     * @apiVersion 0.1.0
     * @apiName getAll
     * @apiGroup Patrons
     * @apiPermission Every type of users
     *
     * @apiDescription Get all patrons
     *
     * @apiParam None
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/v1/patrons
     *
     * @apiSuccess {String} list of all patrons' info
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *  {
     *      "data": [
     *          {
     *              "id": 1,
     *              "name": "Shawn Jackson",
     *              "donation": 50,
     *              "comment": "The art is not too bad, keep up the good work."
     *          },
     *          ...
     *      ],
     *      "pages": {
     *          "current": 1,
     *          "prev": 0,
     *          "hasPrev": false,
     *          "next": 0,
     *          "hasNext": false,
     *          "total": 1,
     *          "hexPrev": false
     *      },
     *      "items": {
     *          "begin": 1,
     *          "end": 10,
     *          "total": 7
     *      },
     *      "message": "",
     *      "result": "ok"
     *  }
     * 
     * 
     * @apiError get_list_patron_fail
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *  {
     *      "result": "fail",
     *      "code": 1,
     *      "error": "get_list_patron_fail",
     *      "all": {}
     *  }
     */
    app.get('/api/blog/patrons/:id', patronService.getOne);
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
    app.post('/api/blog/patrons', patronService.create);
    app.put('/api/blog/patrons/:id', patronService.update);
    app.delete('/api/blog/patrons/:id', patronService.delete);
};