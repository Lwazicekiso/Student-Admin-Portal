/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tponfes7",
    "name": "documents",
    "type": "file",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tponfes7",
    "name": "documents",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
