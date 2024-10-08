/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ty9dwkfk5dtna80",
    "created": "2024-10-08 12:39:46.116Z",
    "updated": "2024-10-08 12:39:46.116Z",
    "name": "Applicant",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2jatr1pc",
        "name": "Application",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "zukf4lhn",
        "name": "Status",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80");

  return dao.deleteCollection(collection);
})
