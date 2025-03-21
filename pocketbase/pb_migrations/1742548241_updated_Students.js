/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jxzryiwk",
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
  const collection = dao.findCollectionByNameOrId("8p2xcjxjne33z7j")

  // remove
  collection.schema.removeField("jxzryiwk")

  return dao.saveCollection(collection)
})
