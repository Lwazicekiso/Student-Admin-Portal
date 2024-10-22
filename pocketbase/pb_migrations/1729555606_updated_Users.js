/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vhfkq1on",
    "name": "role",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "admin",
        "lecturer",
        "applicant/student"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vhfkq1on",
    "name": "role",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "student",
        "admin",
        "lecturer"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
