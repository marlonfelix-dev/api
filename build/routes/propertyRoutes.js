"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Importando controlador(es)
const propertyController_1 = require("../controllers/propertyController");
const propertyRoutes = express.Router();
propertyRoutes.get('/', (req, res) => {
    propertyController_1.default.getAllProperties(req, res);
});
exports.default = propertyRoutes;
