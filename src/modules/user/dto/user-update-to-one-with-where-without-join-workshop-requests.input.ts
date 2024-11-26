import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutJoinWorkshopRequestsInput } from './user-update-without-join-workshop-requests.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutJoinWorkshopRequestsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutJoinWorkshopRequestsInput)
    data!: UserUpdateWithoutJoinWorkshopRequestsInput;
}
