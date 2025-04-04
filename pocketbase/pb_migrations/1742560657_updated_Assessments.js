/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afgmj9hi",
    "name": "Module_Weight",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3sinyf182y6rz9e")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "afgmj9hi",
    "name": "Weight_Percentage",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
