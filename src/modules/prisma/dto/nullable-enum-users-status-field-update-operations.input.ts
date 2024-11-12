import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersStatus } from './users-status.enum';

@InputType()
export class NullableEnumUsersStatusFieldUpdateOperationsInput {

    @Field(() => UsersStatus, {nullable:true})
    set?: keyof typeof UsersStatus;
}
