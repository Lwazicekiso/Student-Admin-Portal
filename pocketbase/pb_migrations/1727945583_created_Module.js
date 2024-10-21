/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "97s3aveyyw7qrqn",
    "created": "2024-10-03 08:53:03.209Z",
    "updated": "2024-10-03 08:53:03.209Z",
    "name": "Module",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rpe6kbwg",
        "name": "Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn");

  return dao.deleteCollection(collection);
})
