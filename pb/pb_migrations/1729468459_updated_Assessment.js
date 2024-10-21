/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7wsx2olg",
    "name": "Module_Code",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "97s3aveyyw7qrqn",
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

  // remove
  collection.schema.removeField("7wsx2olg")

  return dao.saveCollection(collection)
})
