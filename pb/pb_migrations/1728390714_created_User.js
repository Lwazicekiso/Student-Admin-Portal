/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pr5uj5c2iw45hok",
    "created": "2024-10-08 12:31:54.694Z",
    "updated": "2024-10-08 12:31:54.694Z",
    "name": "User",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owducmod",
        "name": "Name",
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
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok");

  return dao.deleteCollection(collection);
})
