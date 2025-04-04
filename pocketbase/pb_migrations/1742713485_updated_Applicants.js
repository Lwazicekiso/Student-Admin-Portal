/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdpyf1i5jdywa31")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xeouhdgk",
    "name": "courseAppliedFor",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b1kudtv0unf2y8o",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": 2,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zdpyf1i5jdywa31")

  // remove
  collection.schema.removeField("xeouhdgk")

  return dao.saveCollection(collection)
})
