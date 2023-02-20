migrate((db) => {
  const collection = new Collection({
    "id": "jpyp7w8r4gz8l8r",
    "created": "2023-02-18 10:35:14.841Z",
    "updated": "2023-02-18 10:35:14.841Z",
    "name": "trubel",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jpyp7w8r4gz8l8r");

  return dao.deleteCollection(collection);
})
