/**
 * Created by Sheeper on 29/08/2023.
 */

// our components
const patron = require('../models/patron.model');
const rest = require('../utils/restware.util');
const config = require('../configs/general.config');

const bCrypt = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');

module.exports = {
    create: function(req, res) {
        try {
            const query = {};
            if(req.body.name){
                query.name = req.body.name;
            }
            query.donation = req.body.donation;
            query.comment = req.body.comment;
            query.id = function() {
                try {patron.max('id')} catch (result) {return result};
            }

            patron.create(query).then((result)=>{
                'use strict';
                //console.log(res);
                return rest.sendSuccessOne(res, result, 200);
            }).catch(function(error) {
                'use strict';
                //console.log(error);
                return rest.sendError(res, 1, 'create_patron_fail', 400, error);
            });
        } catch (error) {
            //console.log(error);
            return rest.sendError(res, 1, 'create_patron_fail', 400, error);
        }
    },

    getOne: function(req, res) {
//        const id = req.params.id || '';
        try {
            const attributes = ['id', 'name', 'donation', 'comment'];

//            const where = {id: id};

            patron.findOne ({
                where: {
                    id: req.params.id || '',
                },
                attributes: attributes,
                raw: true,
                paranoid: false,
            }).then((result)=>{
                'use strict';
                if(result) {
                    return rest.sendSuccessOne(res, result, 200);
                } else {
                    return rest.sendError(res, 1, 'get_patron_fail', 400);
                }
            });
        } catch (error) {
            //console.log(error);
            return rest.sendError(res, 400, 'get_patron_fail', 400, error);
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

            patron.findAndCountAll({
                where: where,
                limit: perPage,
                offset: offset,
                order: sort,
                raw: true,
                paranoid: false,
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
                    return rest.sendError(res, 1, 'get_list_patron_fail', 400, error);
            });
        } catch (error) {
            //console.log(error);
            return rest.sendError(res, 1, 'get_list_patron_fail', 400, error);
        }
    },

    update: function(req, res) {
        try {
            const query = {};
            if(req.body.name) {
                query.name = req.body.name;
            }
            if(req.body.donation) {
                query.donation = req.body.donation;
            }
            if(req.body.comment) {
                query.comment = req.body.comment;
            }
            
            const where = {id: req.params.id};

            patron.update(
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
                    return rest.sendError(res, 1, 'update_patron_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                //console.log(error);
                return rest.sendError(res, 1, 'update_patron_fail', 400, error);
            });
        } catch (error) {
            //console.log(error);
            return rest.sendError(res, 1, 'update_patron_fail', 400, error);
        }        
    },

    delete: function(req, res) {
        try {
            const where = {id: req.params.id};

            patron.destroy(
                {where: where}
            ).then((result)=>{
                'use strict';
                if(result >= 1) {
                    return rest.sendSuccessOne(res, {id: req.params,id}, 200);
                } else {
                    return rest.sendError(res, 1, 'delete_patron_fail', 400, null);
                }
            }).catch(function(error) {
                'use strict';
                return rest.sendError(res, 1, 'delete_patron_fail', 400, error);
            });
        } catch (error) {
            return rest.sendError(res, 1, 'delete_patron_fail', 400, error);
        }
    }
};


