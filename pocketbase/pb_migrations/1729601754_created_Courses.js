/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9bgusn8onhth07c",
    "created": "2024-10-22 12:55:54.314Z",
    "updated": "2024-10-22 12:55:54.314Z",
    "name": "Courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yk0prjx0",
        "name": "name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("9bgusn8onhth07c");

  return dao.deleteCollection(collection);
})
