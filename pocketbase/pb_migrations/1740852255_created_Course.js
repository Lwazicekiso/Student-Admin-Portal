/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b1kudtv0unf2y8o",
    "created": "2025-03-01 18:04:15.067Z",
    "updated": "2025-03-01 18:04:15.067Z",
    "name": "Course",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ekl1tqn7",
        "name": "Course_Name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "m75yurrd",
        "name": "Course_Duration",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("b1kudtv0unf2y8o");

  return dao.deleteCollection(collection);
})
