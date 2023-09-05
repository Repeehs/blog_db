/**
 * Created by Hieu on 29/08/2023.
 */
// our components
const patronService = require('../services/patron.service');

module.exports = function (app) {
    app.get('/api/blog/patrons', patronService.getAll);
    /**
     * @api {GET} /api/blog/patrons Get All
     * @apiVersion 0.1.0
     * @apiName getAll
     * @apiGroup Patrons
     * @apiPermission Every type of users
     *
     * @apiDescription Get all patrons
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/blog/patrons
     *
     * @apiSuccess {String} data list of all patrons' info
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
     * @api {GET} /api/blog/patrons/:id Get One
     * @apiVersion 0.1.0
     * @apiName getOne
     * @apiGroup Patrons
     * @apiPermission Every type of users
     *
     * @apiDescription Get one patron
     *
     * @apiParam {string} id ID of patron, on params
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/blog/patrons/:id
     *
     * @apiSuccess {String} text information of patron
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
    /**
     * @api {POST} /api/blog/patrons Create a patron
     * @apiVersion 0.1.0
     * @apiName create
     * @apiGroup Patrons
     * @apiPermission Every type of users
     *
     * @apiDescription Create a patron in blog_patron database
     *
     * @apiBody {string} patron's name, MUST be included
     * @apiBody {string} donation money, any amount is appreciated
     * @apiBody {string} comment section, tell us your thoughts.
     *
     * @apiExample Example usage:
     * curl -i http://localhost:3000/api/blog/patrons
     * 
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *{
     *    "data": {
     *        "name": "love",
     *        "donation": "78",
     *        "comment": "heya"
     *    },
     *    "message": "",
     *    "result": "ok"
     *}
     * 
     * @apiError create_patron_fail
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *{
     *    "result": "fail",
     *    "code": 1,
     *    "error": "create_patron_fail",
     *    "all": {}
     *}
     * @apiError create_patron_fail_patron_name
     * 
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 400 Bad Request
     *{
     *    "result": "fail",
     *    "code": 1,
     *    "error": "create_patron_fail",
     *    "all": {
     *        "name": "SequelizeValidationError",
     *        "errors": [
     *            {
     *                "message": "patron.name cannot be null",
     *                "type": "notNull Violation",
     *                "path": "name",
     *                "value": null,
     *                "origin": "CORE",
     *                "instance": {
     *                    "donation": "78",
     *                    "comment": "heya"
     *                },
     *                "validatorKey": "is_null",
     *                "validatorName": null,
     *                "validatorArgs": []
     *            }
     *        ]
     *    }
     *}
     */
    app.put('/api/blog/patrons/:id', patronService.update);
    app.delete('/api/blog/patrons/:id', patronService.delete);
};