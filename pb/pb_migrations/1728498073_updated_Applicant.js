/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w2cwyt2w",
    "name": "Name",
    "type": "text",
    "required": true,
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
    "id": "qtnc8pe1",
    "name": "Surname",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  // remove
  collection.schema.removeField("w2cwyt2w")

  // remove
  collection.schema.removeField("qtnc8pe1")

  return dao.saveCollection(collection)
})
