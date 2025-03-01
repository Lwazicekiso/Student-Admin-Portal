/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zdpyf1i5jdywa31",
    "created": "2025-03-01 19:43:29.517Z",
    "updated": "2025-03-01 19:43:29.517Z",
    "name": "Applicants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "upa0j3sv",
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
  const collection = dao.findCollectionByNameOrId("zdpyf1i5jdywa31");

  return dao.deleteCollection(collection);
})
