/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o7yuhogj",
    "name": "Status",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // remove
  collection.schema.removeField("o7yuhogj")

  return dao.saveCollection(collection)
})
