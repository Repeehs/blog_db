/**
 * Created by Sheeper on 29/08/2023.
 */

// our components
const pic = require('../models/picture.model');
const rest = require('../utils/restware.util');

module.exports = {
    create: function(req, res) {
        try {
            const query = {};
            query.name = req.body.name;
            query.link = req.body.title;
            query.category = req.body.category;
            query.size = req.body.size;
            query.price = req.body.price;

            pic.create(query).then((result)=>{
                'use strict';
                return rest.sendSuccessOne(res, result, 200);
            }).catch(function(error) {
                'use strict';
                console.log(error);
                return rest.sendError(res, 1, 'create_pic_fail', 400, error);
            });
        } catch (error) {
            console.log(error);
            return rest.sendError(res, 1, 'create_pic_fail', 400, error);
        }
    },

    getOne: function(req, res) {
        const id = req.params.id || '';
        try {
            const attributes = ['id', 'name', 'link', 'category', 'size', 'price'];

            const where = {id: id};

            pic.findOne({
                where: where,
                attributes: attributes,
                raw: true,
            }).then((result)=>{
                'use strict';
                if(result) {
                    return rest.sendSuccessOne(res, result, 200);
                } else {
                    return rest.sendError(res, 1, 'unavailable_pic', 400);
                }
            });
        } catch (error) {
            return rest.sendError(res, 400, 'get_pic_fail', 400, error);
        }
    },
}

