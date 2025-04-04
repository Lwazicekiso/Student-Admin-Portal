/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecetuxo0",
    "name": "hasDisability",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ecetuxo0",
    "name": "hasDisability",
    "type": "bool",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
