/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  collection.name = "Modules"

  // remove
  collection.schema.removeField("uxiwpojj")

  // remove
  collection.schema.removeField("evak6hyp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6dpdpxoo",
    "name": "course",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9bgusn8onhth07c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xubw3bmx",
    "name": "year_level",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 3,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("97s3aveyyw7qrqn")

  collection.name = "Module"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxiwpojj",
    "name": "course_code",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evak6hyp",
    "name": "course",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9bgusn8onhth07c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("6dpdpxoo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xubw3bmx",
    "name": "year_level",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
