import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutServiceRequestsInput } from './user-update-without-service-requests.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutServiceRequestsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutServiceRequestsInput, {nullable:false})
    @Type(() => UserUpdateWithoutServiceRequestsInput)
    data!: UserUpdateWithoutServiceRequestsInput;
}
