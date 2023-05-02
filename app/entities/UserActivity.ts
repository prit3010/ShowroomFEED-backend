import {
    Field,
    ObjectType,
    ID
} from 'type-graphql'
import {
    prop as Property,
    getModelForClass
} from "@typegoose/typegoose";
import {
    ObjectId
} from 'mongodb';
import {
    Board
} from './Board';

export type Ref < T > = T | ObjectId;

@ObjectType()
export class UserActivity {
    @Field(() => ID)
    id: String

    @Field()
    @Property({
        required: true,
        nullable: true
    })
    timestamp: Date;

    @Field()
    @Property()
    eventType: string;

    @Field()
    @Property()
    page: string


    @Field((_type) => String)
    @Property({
        ref: Board,
        required: true
    })
    board_id: Ref < Board > ;
    _doc: any;
}

export const UserActivityModel = getModelForClass(UserActivity);