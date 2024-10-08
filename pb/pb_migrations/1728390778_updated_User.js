/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yfvto4nc",
    "name": "Phone_number",
    "type": "number",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("pr5uj5c2iw45hok")

  // remove
  collection.schema.removeField("yfvto4nc")

  return dao.saveCollection(collection)
})
