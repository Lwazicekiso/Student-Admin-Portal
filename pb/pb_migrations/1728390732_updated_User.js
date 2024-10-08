/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nbqk85cy",
    "name": "Surname",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 30,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok")

  // remove
  collection.schema.removeField("nbqk85cy")

  return dao.saveCollection(collection)
})
