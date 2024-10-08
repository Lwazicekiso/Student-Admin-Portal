/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ealubu8xzu6vjux",
    "created": "2024-10-08 12:48:01.636Z",
    "updated": "2024-10-08 12:48:01.636Z",
    "name": "Role",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uxugwzbg",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("ealubu8xzu6vjux");

  return dao.deleteCollection(collection);
})
