/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ealubu8xzu6vjux");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ealubu8xzu6vjux",
    "created": "2024-10-08 12:48:01.636Z",
    "updated": "2024-10-22 10:50:04.549Z",
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
})
