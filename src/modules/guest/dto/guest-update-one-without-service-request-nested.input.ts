import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GuestCreateWithoutServiceRequestInput } from './guest-create-without-service-request.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GuestCreateOrConnectWithoutServiceRequestInput } from './guest-create-or-connect-without-service-request.input';
import { GuestUpsertWithoutServiceRequestInput } from './guest-upsert-without-service-request.input';
import { GuestWhereInput } from './guest-where.input';
import { Prisma } from '@prisma/client';
import { GuestWhereUniqueInput } from './guest-where-unique.input';
import { GuestUpdateToOneWithWhereWithoutServiceRequestInput } from './guest-update-to-one-with-where-without-service-request.input';

@InputType()
export class GuestUpdateOneWithoutServiceRequestNestedInput {

    @Field(() => GuestCreateWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestCreateWithoutServiceRequestInput)
    @ValidateNested()
    create?: GuestCreateWithoutServiceRequestInput;

    @Field(() => GuestCreateOrConnectWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestCreateOrConnectWithoutServiceRequestInput)
    @ValidateNested()
    connectOrCreate?: GuestCreateOrConnectWithoutServiceRequestInput;

    @Field(() => GuestUpsertWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestUpsertWithoutServiceRequestInput)
    @ValidateNested()
    upsert?: GuestUpsertWithoutServiceRequestInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    disconnect?: GuestWhereInput;

    @Field(() => GuestWhereInput, {nullable:true})
    @Type(() => GuestWhereInput)
    @ValidateNested()
    delete?: GuestWhereInput;

    @Field(() => GuestWhereUniqueInput, {nullable:true})
    @Type(() => GuestWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<GuestWhereUniqueInput, 'guestId'>;

    @Field(() => GuestUpdateToOneWithWhereWithoutServiceRequestInput, {nullable:true})
    @Type(() => GuestUpdateToOneWithWhereWithoutServiceRequestInput)
    @ValidateNested()
    update?: GuestUpdateToOneWithWhereWithoutServiceRequestInput;
}
