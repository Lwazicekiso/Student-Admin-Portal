/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zukf4lhn",
    "name": "Acceptance",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zukf4lhn",
    "name": "Status",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
