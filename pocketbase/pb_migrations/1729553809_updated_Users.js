/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmacl4la",
    "name": "id_",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // remove
  collection.schema.removeField("fmacl4la")

  return dao.saveCollection(collection)
})
