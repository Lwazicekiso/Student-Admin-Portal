/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // remove
  collection.schema.removeField("jc9m8wyh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "19dgodiy",
    "name": "email",
    "type": "email",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jc9m8wyh",
    "name": "email",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7n8lz1bsp75wkpa",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("19dgodiy")

  return dao.saveCollection(collection)
})
