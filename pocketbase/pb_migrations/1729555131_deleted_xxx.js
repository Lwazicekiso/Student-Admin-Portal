/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4a060kye8tm391h");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4a060kye8tm391h",
    "created": "2024-10-21 23:58:36.716Z",
    "updated": "2024-10-21 23:58:36.716Z",
    "name": "xxx",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0hmrvtjl",
        "name": "a",
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
        "id": "d8edq9c8",
        "name": "c",
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
