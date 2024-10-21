/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyc9enepf6gfzam")

  // remove
  collection.schema.removeField("vvdbvvtz")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyc9enepf6gfzam")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vvdbvvtz",
    "name": "relation",
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
})
