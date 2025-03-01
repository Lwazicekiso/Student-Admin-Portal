/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  collection.createRule = "@collection.users.Role = \"Lecturer\""
  collection.updateRule = "@collection.users.Role = \"Lecturer\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ldj93jf03jf9fj4")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
