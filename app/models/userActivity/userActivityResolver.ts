import {
  Resolver,
  Mutation,
  Arg,
  Query,
  FieldResolver,
  Root,
} from 'type-graphql';
import {
  UserActivity,
  UserActivityModel
} from '../../entities/UserActivity';
import {
  Board,
  BoardModel
} from '../../entities/Board';
import {
  UserActivityInput
} from './userActivityInput';

@Resolver(UserActivity)
export class UserActivityResolver {
  @Query(() => [UserActivity])
  async getAllUserActivities() : Promise<UserActivity[]>{
      const userActivity = await UserActivityModel.find();
      return userActivity
  }

  @Mutation(() => UserActivity)
  async createUserActivity(
      @Arg('data') userActivityInput: UserActivityInput
  ): Promise < UserActivity > {
      const userActivity = new UserActivityModel(userActivityInput)
      await userActivity.save();
      return userActivity;
  }

  @Mutation(() => Boolean)
  async deleteUserActivity(@Arg('id') id: string) : Promise<boolean> {
    const result = await UserActivityModel.deleteOne({ _id: id });
    return result.acknowledged === true;
  }

  @Mutation(() => Boolean)
  async deletAllUserActivity() : Promise<boolean> {
    const result = await UserActivityModel.deleteMany({});
    return result.acknowledged === true;
  }

 @FieldResolver((_type) => Board)
  async board(@Root() userActivity: UserActivity): Promise < Board > {
      console.log(userActivity, 'userActivity!');
      return (await BoardModel.findById(userActivity._doc.board_id)) !;
  }

}