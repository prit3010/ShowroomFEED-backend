import {
  InputType,
  Field
} from 'type-graphql';
import {
  Board
} from '../../entities/Board';

@InputType()
export class BoardInput implements Partial < Board > {
  @Field()
  title: String;

  @Field()
  description: String;

  @Field()
  image: String;
}