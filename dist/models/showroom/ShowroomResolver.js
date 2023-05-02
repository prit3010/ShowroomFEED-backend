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
exports.ShowroomResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Showroom_1 = require("../../entities/Showroom");
const ShowroomInput_1 = require("./ShowroomInput");
const Board_1 = require("../../entities/Board");
let ShowroomResolver = class ShowroomResolver {
    getShowrooms() {
        return __awaiter(this, void 0, void 0, function* () {
            const showrooms = yield Showroom_1.ShowroomModel.find();
            return showrooms;
        });
    }
    createShowroom(showroomInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const showroom = new Showroom_1.ShowroomModel(showroomInput);
            yield showroom.save();
            return showroom;
        });
    }
    deleteShowroom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield Showroom_1.ShowroomModel.deleteOne({ _id: id });
            return result.acknowledged === true;
        });
    }
    board(showroom) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Board_1.BoardModel.findById(showroom._doc.boards));
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Showroom_1.Showroom]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShowroomResolver.prototype, "getShowrooms", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Showroom_1.Showroom),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ShowroomInput_1.ShowroomInput]),
    __metadata("design:returntype", Promise)
], ShowroomResolver.prototype, "createShowroom", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShowroomResolver.prototype, "deleteShowroom", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => Board_1.Board),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Showroom_1.Showroom]),
    __metadata("design:returntype", Promise)
], ShowroomResolver.prototype, "board", null);
ShowroomResolver = __decorate([
    (0, type_graphql_1.Resolver)(Showroom_1.Showroom)
], ShowroomResolver);
exports.ShowroomResolver = ShowroomResolver;
