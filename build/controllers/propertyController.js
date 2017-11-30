"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertyModel_1 = require("../models/propertyModel");
// Controller de Imóveis
class propertyController {
    constructor() { }
    ;
    static getAllProperties(req, res) {
        // Find todos os imóveis
        let data = propertyController.property.getAllProperties();
        return res.send(data);
    }
}
propertyController.property = new propertyModel_1.default();
exports.default = propertyController;
