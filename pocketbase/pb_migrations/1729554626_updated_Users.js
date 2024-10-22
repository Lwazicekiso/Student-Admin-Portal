/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7wdaegwy",
    "name": "college_id",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": null,
      "pattern": "^cape\\d{4,}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // remove
  collection.schema.removeField("7wdaegwy")

  return dao.saveCollection(collection)
})
