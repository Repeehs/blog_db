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
            query.image = req.body.image;
            query.description = req.body.description;

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
            const attributes = ['id', 'name', 'image', 'description'];

            const where = {id: id};

            pic.findOne({
                where: where,
                attributes: attributes,
                raw: true,
            }).then((result)=>{
                'use strict';
                if(result) {
                    //console.log(res);
                    return rest.sendSuccessOne(res, result, 200);
                } else {
                    return rest.sendError(res, 1, 'unavailable_pic', 400);
                }
            });
        } catch (error) {
            return rest.sendError(res, 400, 'get_pic_fail', 400, error);
        }
    },

    getAll: function(req, res) {
        const query = req.query || '';
        try {
            const where = {};
            let page = 1;
            let perPage = 10;
            const sort = [];
            const offset = perPage * (page - 1);

            book.findAndCountAll({
                where: where,
                limit: perPage,
                offset: offset,
                order: sort,
                raw: true,
            })
                .then((data) => {
                    const pages = Math.ceil(data.count / perPage);
                    const output = {
                        data: data.rows,
                        pages: {
                            current: page,
                            prev: page - 1,
                            hasPrev: false,
                            next: (page + 1) > pages ? 0 : (page + 1),
                            hasNext: false,
                            total: pages,
                        },
                        items: {
                            begin: ((page * perPage) - perPage) + 1,
                            end: page * perPage,
                            total: data.count,
                        },
                    };
                    output.pages.hasNext = (output.pages.next !== 0);
                    output.pages.hexPrev = (output.pages.prev !== 0);
                    //console.log(res);
                    return rest.sendSuccessMany(res, output, 200);
                }).catch(function(error) {
                    return rest.sendError(res, 1, 'get_list_pitures_fail', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'get_list_pictures_fail', 400, error);
        }
    },

    update: function(req, res) {
        try {
            const query = {};
            if(req.body.name) {
                query.name = req.body.name;
            }
            if(req.body.image) {
                query.image = req.body.image;
            }
            if(req.body.description) {
                query.descripiton = req.body.description;
            }
            
            const where = {id: req.params.id};

            pic.update(
                query,
                {
                where: where,
                returning: true,    
                plain: true
                })
            .then((result)=>{
                'use strict';
                if((result) && (result.length === 2)) {
                    return rest.sendSuccessOne(res, {id: req.params.id}, 200);
                } else {
                    return rest.sendError(res, 1, 'update_pic_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                console.log(error);
                return rest.sendError(res, 1, 'update_pic_fail', 400, error);
            });
        } catch (error) {
            console.log(error);
            return rest.sendError(res, 1, 'update_pic_fail', 400, error);
        }        
    },

    delete: function(req, res) {
        try {
            const where = {id: req.params.id};

            pic.destroy(
                {where: where}
            ).then((result)=>{
                'use strict';
                if(result >= 1) {
                    return rest.sendSuccessOne(res, {id: req.params,id}, 200);
                } else {
                    return rest.sendError(res, 1, 'delete_pic_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                return rest.sendError(res, 1, 'delete_pic_fail', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'delete_pic_fail', 400, error);
        }
    }

}


