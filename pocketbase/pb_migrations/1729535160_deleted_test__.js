/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cv5nutqwylol7gr");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cv5nutqwylol7gr",
    "created": "2024-10-21 18:25:39.093Z",
    "updated": "2024-10-21 18:25:39.093Z",
    "name": "test__",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i6osggha",
        "name": "qaqa",
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
})
