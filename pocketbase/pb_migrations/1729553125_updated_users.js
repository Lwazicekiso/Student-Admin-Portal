/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  collection.name = "Users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7n8lz1bsp75wkpa")

  collection.name = "users"

  return dao.saveCollection(collection)
})
