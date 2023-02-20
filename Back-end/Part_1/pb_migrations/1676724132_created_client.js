migrate((db) => {
  const collection = new Collection({
    "id": "ozqfwdi3qu70tc5",
    "created": "2023-02-18 12:42:12.798Z",
    "updated": "2023-02-18 12:42:12.798Z",
    "name": "client",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ybm2l9na",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6iwanw4s",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ozqfwdi3qu70tc5");

  return dao.deleteCollection(collection);
})
