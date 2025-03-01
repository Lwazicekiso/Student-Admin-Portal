/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3sinyf182y6rz9e",
    "created": "2025-03-01 15:42:23.008Z",
    "updated": "2025-03-01 15:42:23.008Z",
    "name": "Assessments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dxkbj0sw",
        "name": "name",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "8p2xcjxjne33z7j",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zabz3tpo",
        "name": "mark",
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
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e");

  return dao.deleteCollection(collection);
})
