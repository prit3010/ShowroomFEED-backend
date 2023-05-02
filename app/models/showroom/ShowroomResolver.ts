import {
  Resolver,
  Mutation,
  Arg,
  Query,
  FieldResolver,
  Root,
} from 'type-graphql';
import {
  Showroom,
  ShowroomModel
} from '../../entities/Showroom';
import {
  ShowroomInput
} from './ShowroomInput';
import {
  Board,
  BoardModel
} from '../../entities/Board';


@Resolver(Showroom)
export class ShowroomResolver {
  @Query(() => [Showroom])
  async getShowrooms(): Promise<Showroom[]> {
      const showrooms = await ShowroomModel.find();
      return showrooms
  }

  @Mutation(() => Showroom)
  async createShowroom(@Arg('data') showroomInput: ShowroomInput): Promise < Showroom > {
      const showroom = new ShowroomModel(showroomInput)
      await showroom.save();
      return showroom;
  }

  @Mutation(() => Boolean)
  async deleteShowroom(@Arg('id') id: string) : Promise<boolean> {
    const result = await ShowroomModel.deleteOne({ _id: id });
    return result.acknowledged === true;
  }

  @FieldResolver(() => Board)
  async board(@Root() showroom: Showroom): Promise < Board > {
      return (await BoardModel.findById(showroom._doc.boards)) !;
  }
}