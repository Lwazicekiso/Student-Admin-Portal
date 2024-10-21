/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k2rvzhok",
    "name": "Name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ijfobtl979vi685",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnoalmiu",
    "name": "Surname",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ijfobtl979vi685",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("buh8kxj2kdvagyt")

  // remove
  collection.schema.removeField("k2rvzhok")

  // remove
  collection.schema.removeField("bnoalmiu")

  return dao.saveCollection(collection)
})
