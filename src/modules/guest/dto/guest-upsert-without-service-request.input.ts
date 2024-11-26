import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestUpdateWithoutServiceRequestInput } from './guest-update-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateWithoutServiceRequestInput } from './guest-create-without-service-request.input';
import { GuestWhereInput } from './guest-where.input';

@InputType()
export class GuestUpsertWithoutServiceRequestInput {

    @Field(() => GuestUpdateWithoutServiceRequestInput, {nullable:false})
    @Type(() => GuestUpdateWithoutServiceRequestInput)
    @ValidateNested()
    update!: GuestUpdateWithoutServiceRequestInput;

    @Field(() => GuestCreateWithoutServiceRequestInput, {nullable:false})
    @Type(() => GuestCreateWithoutServiceRequestInput)
    @ValidateNested()
    create!: GuestCreateWithoutServiceRequestInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    where?: GuestWhereInput;
}
