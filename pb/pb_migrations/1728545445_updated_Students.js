/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijfobtl979vi685")

  // remove
  collection.schema.removeField("wybaooko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b2apkcos",
    "name": "StudentID",
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
  const collection = dao.findCollectionByNameOrId("ijfobtl979vi685")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wybaooko",
    "name": "studentID",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  // remove
  collection.schema.removeField("b2apkcos")

  return dao.saveCollection(collection)
})
