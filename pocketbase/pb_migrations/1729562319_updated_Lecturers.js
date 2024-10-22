/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o6uvkjq2frgevc5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ny689n01",
    "name": "module",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "97s3aveyyw7qrqn",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": 2,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o6uvkjq2frgevc5")

  // remove
  collection.schema.removeField("ny689n01")

  return dao.saveCollection(collection)
})
