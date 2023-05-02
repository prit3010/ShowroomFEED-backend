"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const BoardResolver_1 = require("./board/BoardResolver");
const ShowroomResolver_1 = require("./showroom/ShowroomResolver");
const userActivityResolver_1 = require("./userActivity/userActivityResolver");
exports.resolvers = [
    BoardResolver_1.BoardResolver,
    ShowroomResolver_1.ShowroomResolver,
    userActivityResolver_1.UserActivityResolver
];
