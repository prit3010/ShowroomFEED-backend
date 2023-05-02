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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActivityModel = exports.UserActivity = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const Board_1 = require("./Board");
let UserActivity = class UserActivity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], UserActivity.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({
        required: true,
        nullable: true
    }),
    __metadata("design:type", Date)
], UserActivity.prototype, "timestamp", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserActivity.prototype, "eventType", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], UserActivity.prototype, "page", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    (0, typegoose_1.prop)({
        ref: Board_1.Board,
        required: true
    }),
    __metadata("design:type", Object)
], UserActivity.prototype, "board_id", void 0);
UserActivity = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserActivity);
exports.UserActivity = UserActivity;
exports.UserActivityModel = (0, typegoose_1.getModelForClass)(UserActivity);
