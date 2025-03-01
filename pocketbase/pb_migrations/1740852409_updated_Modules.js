/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kfj93jf30jf9fj3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txueybsh",
    "name": "Lecturer_Name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ldj93jf03jf9fj4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kfj93jf30jf9fj3")

  // remove
  collection.schema.removeField("txueybsh")

  return dao.saveCollection(collection)
})
