/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yqse09nn2344wl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mc0v8g2k",
    "name": "Courses",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1kudtv0unf2y8o",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8yqse09nn2344wl")

  // remove
  collection.schema.removeField("mc0v8g2k")

  return dao.saveCollection(collection)
})
