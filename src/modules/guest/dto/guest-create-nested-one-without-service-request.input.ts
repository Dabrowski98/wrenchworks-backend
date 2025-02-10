import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutServiceRequestInput } from './guest-create-without-service-request.input';
import { HideField } from '@nestjs/graphql';
import { GuestCreateOrConnectWithoutServiceRequestInput } from './guest-create-or-connect-without-service-request.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class GuestCreateNestedOneWithoutServiceRequestInput {

    @HideField()
    create?: GuestCreateWithoutServiceRequestInput;

    @HideField()
    connectOrCreate?: GuestCreateOrConnectWithoutServiceRequestInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;
}
