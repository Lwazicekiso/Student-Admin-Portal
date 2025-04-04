/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pgyfvifu",
    "name": "Course_selection",
    "type": "relation",
    "required": true,
    "presentable": true,
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
  const collection = dao.findCollectionByNameOrId("iu4w9zi48h6m9nn")

  // remove
  collection.schema.removeField("pgyfvifu")

  return dao.saveCollection(collection)
})
