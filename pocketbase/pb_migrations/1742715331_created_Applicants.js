/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iu4w9zi48h6m9nn",
    "created": "2025-03-23 07:35:31.340Z",
    "updated": "2025-03-23 07:35:31.340Z",
    "name": "Applicants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "os8ncwni",
        "name": "firstName",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vze6d3ga",
        "name": "lastName",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2vhxpros",
        "name": "gender",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "male",
            "female",
            "other"
          ]
        }
      },
      {
        "system": false,
        "id": "ngk6ld6b",
        "name": "title",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Mr",
            "Mrs",
            "Ms",
            "Dr",
            "Other"
          ]
        }
      },
      {
        "system": false,
        "id": "zmjztqpd",
        "name": "dob",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "1900-01-01 00:00:00.000Z",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kypsvmdq",
        "name": "nationalId",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zusailkq",
        "name": "citizen",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gv5qsya9",
        "name": "country",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5xzonfap",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "hgslvc8b",
        "name": "mobile",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bin5qjdr",
        "name": "address",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ecetuxo0",
        "name": "hasDisability",
        "type": "bool",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "0hymggar",
        "name": "disabilityDetails",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kw43zlye",
        "name": "highSchool",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 200,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lmk5vjxm",
        "name": "grades",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2097152
        }
      },
      {
        "system": false,
        "id": "6civkm8q",
        "name": "essay",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5000,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn");

  return dao.deleteCollection(collection);
})
