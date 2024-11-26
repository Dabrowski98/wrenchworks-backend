import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutServiceRequestsInput } from './user-update-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutServiceRequestsInput } from './user-create-without-service-requests.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutServiceRequestsInput {

    @Field(() => UserUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutServiceRequestsInput)
    @ValidateNested()
    update!: UserUpdateWithoutServiceRequestsInput;

    @Field(() => UserCreateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => UserCreateWithoutServiceRequestsInput)
    @ValidateNested()
    create!: UserCreateWithoutServiceRequestsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
