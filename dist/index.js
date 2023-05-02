"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const main_1 = require("./models/main");
const mongoose_1 = __importDefault(require("mongoose"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect('mongodb+srv://user:user@cluster0.inexffa.mongodb.net/?retryWrites=true&w=majority');
    const schema = yield (0, type_graphql_1.buildSchema)({
        resolvers: main_1.resolvers,
        emitSchemaFile: true,
        validate: false,
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
    });
    const app = (0, express_1.default)();
    yield server.start();
    server.applyMiddleware({
        app
    });
    app.listen(1030, () => console.log('Server is running on http://localhost:1030/graphql'));
});
main().catch((error) => {
    console.log(error);
});
