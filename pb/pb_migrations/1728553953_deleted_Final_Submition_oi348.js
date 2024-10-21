/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rlhvb7l2sst63h6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rlhvb7l2sst63h6",
    "created": "2024-10-01 18:41:46.038Z",
    "updated": "2024-10-01 18:41:46.038Z",
    "name": "Final_Submition_oi348",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ljzek0fw",
        "name": "Done",
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
})
