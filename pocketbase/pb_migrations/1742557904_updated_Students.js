/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhefxqnp",
    "name": "StudentsStatus",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "\"Enrolled\"",
        "\"Graduated\"",
        "\"Dropped\""
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // remove
  collection.schema.removeField("mhefxqnp")

  return dao.saveCollection(collection)
})
