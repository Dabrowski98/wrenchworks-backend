import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutServiceRequestInput } from './guest-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutServiceRequestInput } from './guest-create-or-connect-without-service-request.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';

@InputType()
export class GuestCreateNestedOneWithoutServiceRequestInput {

    @Field(() => GuestCreateWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestCreateWithoutServiceRequestInput)
    @ValidateNested()
    create?: GuestCreateWithoutServiceRequestInput;

    @Field(() => GuestCreateOrConnectWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutServiceRequestInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutServiceRequestInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
