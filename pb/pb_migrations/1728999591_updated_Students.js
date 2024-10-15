/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijfobtl979vi685")

  // remove
  collection.schema.removeField("iujlg4qp")

  // remove
  collection.schema.removeField("ai6ubsqm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rnjo7yeu",
    "name": "name",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ty9dwkfk5dtna80",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dhdbt39",
    "name": "surname",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ty9dwkfk5dtna80",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijfobtl979vi685")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iujlg4qp",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ai6ubsqm",
    "name": "surname",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("rnjo7yeu")

  // remove
  collection.schema.removeField("9dhdbt39")

  return dao.saveCollection(collection)
})
