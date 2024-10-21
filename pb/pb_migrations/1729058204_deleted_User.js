/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pr5uj5c2iw45hok",
    "created": "2024-10-08 12:31:54.694Z",
    "updated": "2024-10-08 12:33:11.648Z",
    "name": "User",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owducmod",
        "name": "Name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nbqk85cy",
        "name": "Surname",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1lunmltp",
        "name": "Email",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yfvto4nc",
        "name": "Phone_number",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "rbn2on8h",
        "name": "Address",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
