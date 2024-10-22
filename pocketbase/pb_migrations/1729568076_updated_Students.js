/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3gxspro",
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
})
