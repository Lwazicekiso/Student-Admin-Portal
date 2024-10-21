/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1d0yfg98",
    "name": "StudentNumber",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ijfobtl979vi685",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1d0yfg98",
    "name": "StudentID",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ijfobtl979vi685",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
