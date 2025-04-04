/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // remove
  collection.schema.removeField("lmk5vjxm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmk5vjxm",
    "name": "grades",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2097152
    }
  }))

  return dao.saveCollection(collection)
})
