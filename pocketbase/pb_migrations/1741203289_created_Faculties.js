/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8yqse09nn2344wl",
    "created": "2025-03-05 19:34:49.646Z",
    "updated": "2025-03-05 19:34:49.646Z",
    "name": "Faculties",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ganayq9c",
        "name": "Faculty",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Arts and Social Science",
            "Science",
            "Commerce",
            "Engineering",
            "Health"
          ]
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
  const collection = dao.findCollectionByNameOrId("8yqse09nn2344wl");

  return dao.deleteCollection(collection);
})
