/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kfj93jf30jf9fj3",
    "created": "2025-03-01 15:43:54.281Z",
    "updated": "2025-03-01 15:43:54.281Z",
    "name": "Modules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "md93jf9j",
        "name": "module_name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("kfj93jf30jf9fj3");

  return dao.deleteCollection(collection);
})
