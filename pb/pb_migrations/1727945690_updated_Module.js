/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxiwpojj",
    "name": "Course_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xubw3bmx",
    "name": "Year_level",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bn1ehjwb",
    "name": "Credits",
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
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  // remove
  collection.schema.removeField("uxiwpojj")

  // remove
  collection.schema.removeField("xubw3bmx")

  // remove
  collection.schema.removeField("bn1ehjwb")

  return dao.saveCollection(collection)
})
