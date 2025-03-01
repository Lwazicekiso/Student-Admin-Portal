/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3pwohvth",
    "name": "Module",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kfj93jf30jf9fj3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // remove
  collection.schema.removeField("3pwohvth")

  return dao.saveCollection(collection)
})
