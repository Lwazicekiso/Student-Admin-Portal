/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ealubu8xzu6vjux",
    "created": "2024-10-22 12:55:54.315Z",
    "updated": "2024-10-22 12:55:54.315Z",
    "name": "Roles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uxugwzbg",
        "name": "Role",
        "type": "text",
        "required": true,
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ealubu8xzu6vjux");

  return dao.deleteCollection(collection);
})
