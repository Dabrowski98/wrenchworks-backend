import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { GuestCreateWithoutServiceRequestInput } from './guest-create-without-service-request.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateOrConnectWithoutServiceRequestInput {

    @Field(() => GuestWhereUniqueInput, {nullable:false})
    @Type(() => GuestWhereUniqueInput)
    where!: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestCreateWithoutServiceRequestInput, {nullable:false})
    @Type(() => GuestCreateWithoutServiceRequestInput)
    @ValidateNested()
    create!: GuestCreateWithoutServiceRequestInput;
}
