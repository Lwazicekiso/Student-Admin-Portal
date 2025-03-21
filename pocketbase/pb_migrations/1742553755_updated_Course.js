/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1kudtv0unf2y8o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "czvroag1",
    "name": "Course_Duration",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 5,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1kudtv0unf2y8o")

  // update
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
})
