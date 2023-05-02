"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Board_1 = require("../../entities/Board");
const BoardInput_1 = require("./BoardInput");
let BoardResolver = class BoardResolver {
    getBoards() {
        return __awaiter(this, void 0, void 0, function* () {
            const boards = yield Board_1.BoardModel.find();
            if (!boards) {
                throw new Error(`Boards not found`);
            }
            return boards;
        });
    }
    createBoard(boardInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const myboard = new Board_1.BoardModel(boardInput);
            yield myboard.save();
            return myboard;
        });
    }
    deleteBoard(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Board_1.BoardModel.deleteOne({ _id: id });
            return result.acknowledged === true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Board_1.Board]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BoardResolver.prototype, "getBoards", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Board_1.Board),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BoardInput_1.BoardInput]),
    __metadata("design:returntype", Promise)
], BoardResolver.prototype, "createBoard", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardResolver.prototype, "deleteBoard", null);
BoardResolver = __decorate([
    (0, type_graphql_1.Resolver)(Board_1.Board)
], BoardResolver);
exports.BoardResolver = BoardResolver;
