/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jism3bz0",
    "name": "Assessement_Type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "A1",
        "A2",
        "Quiz"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // remove
  collection.schema.removeField("jism3bz0")

  return dao.saveCollection(collection)
})
