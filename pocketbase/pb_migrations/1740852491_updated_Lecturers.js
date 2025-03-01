/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cayvtj7v",
    "name": "Modules",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kfj93jf30jf9fj3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  // remove
  collection.schema.removeField("cayvtj7v")

  return dao.saveCollection(collection)
})
