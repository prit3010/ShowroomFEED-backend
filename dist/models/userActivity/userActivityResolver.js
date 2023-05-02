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
exports.UserActivityResolver = void 0;
const type_graphql_1 = require("type-graphql");
const UserActivity_1 = require("../../entities/UserActivity");
const Board_1 = require("../../entities/Board");
const userActivityInput_1 = require("./userActivityInput");
let UserActivityResolver = class UserActivityResolver {
    getAllUserActivities() {
        return __awaiter(this, void 0, void 0, function* () {
            const userActivity = yield UserActivity_1.UserActivityModel.find();
            return userActivity;
        });
    }
    createUserActivity(userActivityInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const userActivity = new UserActivity_1.UserActivityModel(userActivityInput);
            yield userActivity.save();
            return userActivity;
        });
    }
    deleteUserActivity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserActivity_1.UserActivityModel.deleteOne({ _id: id });
            return result.acknowledged === true;
        });
    }
    board(userActivity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userActivity, 'userActivity!');
            return (yield Board_1.BoardModel.findById(userActivity._doc.board_id));
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [UserActivity_1.UserActivity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserActivityResolver.prototype, "getAllUserActivities", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserActivity_1.UserActivity),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userActivityInput_1.UserActivityInput]),
    __metadata("design:returntype", Promise)
], UserActivityResolver.prototype, "createUserActivity", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserActivityResolver.prototype, "deleteUserActivity", null);
__decorate([
    (0, type_graphql_1.FieldResolver)((_type) => Board_1.Board),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserActivity_1.UserActivity]),
    __metadata("design:returntype", Promise)
], UserActivityResolver.prototype, "board", null);
UserActivityResolver = __decorate([
    (0, type_graphql_1.Resolver)(UserActivity_1.UserActivity)
], UserActivityResolver);
exports.UserActivityResolver = UserActivityResolver;
