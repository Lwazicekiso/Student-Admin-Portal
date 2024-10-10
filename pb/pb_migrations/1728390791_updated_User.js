/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rbn2on8h",
    "name": "Address",
    "type": "text",
    "required": false,
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
  collection.schema.removeField("rbn2on8h")

  return dao.saveCollection(collection)
})
