import {
  Resolver,
  Arg,
  Query,
  Mutation
} from "type-graphql";
import {
  Board,
  BoardModel
} from '../../entities/Board';
import {
  BoardInput
} from './BoardInput';

@Resolver(Board)
export class BoardResolver {
  @Query(() => [Board])
  async getBoards(): Promise<Board[]> {
    const boards = await BoardModel.find();
    if (!boards) {
      throw new Error(`Boards not found`);
    }
    return boards;
  }

  @Mutation(() => Board)
  async createBoard(
      @Arg("data") boardInput: BoardInput
  ): Promise < Board > {
      const myboard = new BoardModel(boardInput)
      await myboard.save();
      return myboard;
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Arg('id') id: string): Promise<boolean> {
    const result = await BoardModel.deleteOne({ _id: id });
    return result.acknowledged === true;
  }
}