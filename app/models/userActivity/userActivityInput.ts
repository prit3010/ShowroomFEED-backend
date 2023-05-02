import {
  InputType,
  Field,
  ID
} from 'type-graphql';
import {
  ObjectId
} from 'mongodb';
import {
  UserActivity
} from '../../entities/UserActivity';


@InputType()
export class UserActivityInput implements Partial < UserActivity > {
  @Field()
  timestamp: Date;

  @Field()
  eventType: string;

  @Field()
  page: string;

  @Field(() => ID)
  board_id: ObjectId;
}