define({ "api": [
  {
    "type": "get",
    "url": "/properties",
    "title": "Lista todos os imóveis",
    "name": "UsersList",
    "group": "Users",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Token"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "filename": "src/routes/_apidoc.ts",
    "groupTitle": "Users"
  }
] });
