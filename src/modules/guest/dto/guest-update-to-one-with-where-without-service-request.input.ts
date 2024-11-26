import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { Type } from 'class-transformer';
import { GuestUpdateWithoutServiceRequestInput } from './guest-update-without-service-request.input';

@InputType()
export class GuestUpdateToOneWithWhereWithoutServiceRequestInput {

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;

    @Field(() => GuestUpdateWithoutServiceRequestInput, {nullable:false})
    @Type(() => GuestUpdateWithoutServiceRequestInput)
    data!: GuestUpdateWithoutServiceRequestInput;
}
