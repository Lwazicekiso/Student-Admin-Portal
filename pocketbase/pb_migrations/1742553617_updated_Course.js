/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1kudtv0unf2y8o")

  // remove
  collection.schema.removeField("m75yurrd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "czvroag1",
    "name": "Course_Duration",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1kudtv0unf2y8o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m75yurrd",
    "name": "Course_Duration",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("czvroag1")

  return dao.saveCollection(collection)
})
