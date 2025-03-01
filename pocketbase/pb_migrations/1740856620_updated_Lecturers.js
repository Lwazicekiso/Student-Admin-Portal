/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  // remove
  collection.schema.removeField("ln93jf9j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gzzajbrr",
    "name": "lecturer_name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ln93jf9j",
    "name": "lecturer_name",
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

  // remove
  collection.schema.removeField("gzzajbrr")

  return dao.saveCollection(collection)
})
