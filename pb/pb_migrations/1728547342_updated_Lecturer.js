/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqpad7plidt97mh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eo0i0qz8",
    "name": "Data",
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
  const collection = dao.findCollectionByNameOrId("hqpad7plidt97mh")

  // remove
  collection.schema.removeField("eo0i0qz8")

  return dao.saveCollection(collection)
})
