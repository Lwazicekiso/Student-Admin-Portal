/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  collection.name = "Applicants"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ty9dwkfk5dtna80")

  collection.name = "Applicant"

  return dao.saveCollection(collection)
})
