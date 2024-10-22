/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "97s3aveyyw7qrqn",
    "created": "2024-10-22 12:55:54.315Z",
    "updated": "2024-10-22 12:55:54.315Z",
    "name": "Modules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rpe6kbwg",
        "name": "name",
        "type": "text",
        "required": false,
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
        "id": "xubw3bmx",
        "name": "year_level",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 3,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "bn1ehjwb",
        "name": "credits",
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
        "id": "6dpdpxoo",
        "name": "course",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "9bgusn8onhth07c",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn");

  return dao.deleteCollection(collection);
})
