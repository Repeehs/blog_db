define({ "api": [
  {
    "type": "POST",
    "url": "/api/blog/patrons",
    "title": "Create a patron",
    "version": "0.1.0",
    "name": "create",
    "group": "Patrons",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Create a patron in blog_patron database</p>",
    "body": [
      {
        "group": "Body",
        "type": "string",
        "optional": false,
        "field": "patron",
        "description": "<p>'s name, MUST be included</p>"
      },
      {
        "group": "Body",
        "type": "string",
        "optional": false,
        "field": "donation",
        "description": "<p>money, any amount is appreciated</p>"
      },
      {
        "group": "Body",
        "type": "string",
        "optional": false,
        "field": "comment",
        "description": "<p>section, tell us your thoughts.</p>"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/blog/patrons",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": {\n       \"name\": \"love\",\n       \"donation\": \"78\",\n       \"comment\": \"heya\"\n   },\n   \"message\": \"\",\n   \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "create_patron_fail",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "create_patron_fail_patron_name",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n   \"result\": \"fail\",\n   \"code\": 1,\n   \"error\": \"create_patron_fail\",\n   \"all\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n   \"result\": \"fail\",\n   \"code\": 1,\n   \"error\": \"create_patron_fail\",\n   \"all\": {\n       \"name\": \"SequelizeValidationError\",\n       \"errors\": [\n           {\n               \"message\": \"patron.name cannot be null\",\n               \"type\": \"notNull Violation\",\n               \"path\": \"name\",\n               \"value\": null,\n               \"origin\": \"CORE\",\n               \"instance\": {\n                   \"donation\": \"78\",\n                   \"comment\": \"heya\"\n               },\n               \"validatorKey\": \"is_null\",\n               \"validatorName\": null,\n               \"validatorArgs\": []\n           }\n       ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/patron.route.js",
    "groupTitle": "Patrons",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/blog/patrons"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/blog/patrons",
    "title": "Get All",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Patrons",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Get all patrons</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/blog/patrons",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>list of all patrons' info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Shawn Jackson\",\n            \"donation\": 50,\n            \"comment\": \"The art is not too bad, keep up the good work.\"\n        },\n        ...\n    ],\n    \"pages\": {\n        \"current\": 1,\n        \"prev\": 0,\n        \"hasPrev\": false,\n        \"next\": 0,\n        \"hasNext\": false,\n        \"total\": 1,\n        \"hexPrev\": false\n    },\n    \"items\": {\n        \"begin\": 1,\n        \"end\": 10,\n        \"total\": 7\n    },\n    \"message\": \"\",\n    \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "get_list_patron_fail",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n{\n    \"result\": \"fail\",\n    \"code\": 1,\n    \"error\": \"get_list_patron_fail\",\n    \"all\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/patron.route.js",
    "groupTitle": "Patrons",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/blog/patrons"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/blog/patrons/:id",
    "title": "Get One",
    "version": "0.1.0",
    "name": "getOne",
    "group": "Patrons",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Get one patron</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>ID of patron, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/blog/patrons/:id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>information of patron</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"data\": {\n      \"id\": 1,\n      \"name\": \"Shawn Jackson\",\n      \"donation\": 50,\n      \"comment\": \"The art is not too bad, keep up the good work.\"\n  },\n  \"message\": \"\",\n  \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "get_patron_fail",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n{\n  \"result\": \"fail\",\n  \"code\": 400,\n  \"error\": \"get_patron_fail\",\n  \"all\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/patron.route.js",
    "groupTitle": "Patrons",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/blog/patrons/:id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/blog/pictures",
    "title": "Get All",
    "version": "0.1.0",
    "name": "getAll",
    "group": "Pictures",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Get all pictures</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/blog/pictures",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>list of all pictures' info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": [\n       {\n           \"id\": 1,\n           \"name\": \"a\",\n           \"image\": \"https://res.cloudinary.com/dato5qlvn/image/upload/v1693832016/cwnitt8h8n2pezhbhknb.png\",\n           \"description\": \"a\"\n       },\n       ...\n   ],\n   \"pages\": {\n       \"current\": 1,\n       \"prev\": 0,\n       \"hasPrev\": false,\n       \"next\": 2,\n       \"hasNext\": true,\n       \"total\": 3,\n       \"hexPrev\": false\n   },\n   \"items\": {\n       \"begin\": 1,\n       \"end\": 10,\n       \"total\": 26\n   },\n   \"message\": \"\",\n   \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "get_list_picture_fail",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n{\n  \"result\": \"fail\",\n  \"code\": 1,\n  \"error\": \"get_list_pictures_fail\",\n  \"all\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/picture.route.js",
    "groupTitle": "Pictures",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/blog/pictures"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/api/blog/pictures/:id",
    "title": "Get One",
    "version": "0.1.0",
    "name": "getOne",
    "group": "Pictures",
    "permission": [
      {
        "name": "Every type of users"
      }
    ],
    "description": "<p>Get one picture</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>get an ID of picture, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/api/blog/pictures/:id",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>information of patron</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"data\": {\n      \"id\": 1,\n      \"name\": \"a\",\n      \"image\": \"https://res.cloudinary.com/dato5qlvn/image/upload/v1693832016/cwnitt8h8n2pezhbhknb.png\",\n      \"description\": \"a\"\n  },\n  \"message\": \"\",\n  \"result\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "get_pic_fail",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n   \"result\": \"fail\",\n   \"code\": 400,\n   \"error\": \"get_pic_fail\",\n   \"all\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/picture.route.js",
    "groupTitle": "Pictures",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/blog/pictures/:id"
      }
    ]
  }
] });
