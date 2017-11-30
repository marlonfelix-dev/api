"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.propertySchema = new mongoose_1.Schema({
    /**
     * @var propertySchema
     * @attribute
     * Inserir aqui, todos os atributos da entidade de Imóveis
     */
    id: Number,
    title: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});
