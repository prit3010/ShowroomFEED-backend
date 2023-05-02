import {
  BoardResolver
} from "./board/BoardResolver";
import {
  ShowroomResolver
} from './showroom/ShowroomResolver';
import {
  UserActivityResolver
} from './userActivity/userActivityResolver';

export const resolvers: [Function, ...Function[]] = [
  BoardResolver,
  ShowroomResolver,
  UserActivityResolver
];