import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutJoinWorkshopRequestsInput } from './user-update-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutJoinWorkshopRequestsInput } from './user-create-without-join-workshop-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutJoinWorkshopRequestsInput {

    @Field(() => UserUpdateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    update!: UserUpdateWithoutJoinWorkshopRequestsInput;

    @Field(() => UserCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: UserCreateWithoutJoinWorkshopRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
