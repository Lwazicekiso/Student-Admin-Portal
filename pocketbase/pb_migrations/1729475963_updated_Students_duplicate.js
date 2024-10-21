/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyc9enepf6gfzam")

  collection.name = "Students"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fyc9enepf6gfzam")

  collection.name = "Students_duplicate"

  return dao.saveCollection(collection)
})
