/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxkbj0sw",
    "name": "student",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
