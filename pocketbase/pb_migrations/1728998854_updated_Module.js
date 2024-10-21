/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evak6hyp",
    "name": "course",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9bgusn8onhth07c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  // remove
  collection.schema.removeField("evak6hyp")

  return dao.saveCollection(collection)
})
