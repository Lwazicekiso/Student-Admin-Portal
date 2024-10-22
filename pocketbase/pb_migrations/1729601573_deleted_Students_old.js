/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ijfobtl979vi685");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ijfobtl979vi685",
    "created": "2024-10-01 13:47:06.535Z",
    "updated": "2024-10-22 10:50:04.552Z",
    "name": "Students_old",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h1ky3gs6",
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
