/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "buh8kxj2kdvagyt",
    "created": "2024-10-08 12:35:27.309Z",
    "updated": "2024-10-08 12:35:27.309Z",
    "name": "Assessment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5mh6ok5t",
        "name": "Mark",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt");

  return dao.deleteCollection(collection);
})
