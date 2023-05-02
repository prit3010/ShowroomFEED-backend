import {
  Field,
  ObjectType,
  ID
} from 'type-graphql'
import {
    ObjectId
} from 'mongodb';
import {
  prop as Property,
  getModelForClass
} from "@typegoose/typegoose";
import {
  Board
} from './Board';

export type Ref < T > = T | ObjectId;

@ObjectType()
export class Showroom {
  @Field(() => ID)
  id: String

  @Field()
  @Property()
  title: String

  @Field((_type) => String)
  @Property({
      ref: Board,
      required: true
  })
  boards: Ref < Board > ;
  _doc: any;
}

export const ShowroomModel = getModelForClass(Showroom);