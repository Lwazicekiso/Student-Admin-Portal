/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // remove
  collection.schema.removeField("o7yuhogj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcre7x4l",
    "name": "Status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Pass",
        "Pass with Distinction",
        "Fail"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("jcre7x4l")

  return dao.saveCollection(collection)
})
