/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbbjqlv1",
    "name": "StudentNumber",
    "type": "number",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 8,
      "max": 8,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbbjqlv1",
    "name": "StudentNumber",
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
