import {
  Field,
  ObjectType,
  ID
} from 'type-graphql'
import {
  prop as Property,
  getModelForClass
} from "@typegoose/typegoose";

@ObjectType()
export class Board {
  @Field(() => ID)
  id: String

  @Field()
  @Property()
  title: String

  @Field()
  @Property()
  description: String

  @Field()
  @Property()
  image: String
}

export const BoardModel = getModelForClass(Board);