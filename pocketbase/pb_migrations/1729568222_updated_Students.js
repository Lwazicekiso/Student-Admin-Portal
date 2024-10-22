/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // remove
  collection.schema.removeField("g3gxspro")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xchbnrvt",
    "name": "college_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7n8lz1bsp75wkpa",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3gxspro",
    "name": "college_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 8,
      "max": null,
      "pattern": "^cape\\d{4,}$"
    }
  }))

  // remove
  collection.schema.removeField("xchbnrvt")

  return dao.saveCollection(collection)
})
