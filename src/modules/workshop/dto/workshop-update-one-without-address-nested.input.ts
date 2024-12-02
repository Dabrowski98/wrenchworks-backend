import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutAddressInput } from './workshop-create-or-connect-without-address.input';
import { WorkshopUpsertWithoutAddressInput } from './workshop-upsert-without-address.input';
import { WorkshopWhereInput } from './workshop-where.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutAddressInput } from './workshop-update-to-one-with-where-without-address.input';

@InputType()
export class WorkshopUpdateOneWithoutAddressNestedInput {

    @Field(() => WorkshopCreateWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutAddressInput;

    @Field(() => WorkshopCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutAddressInput;

    @Field(() => WorkshopUpsertWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutAddressInput)
    @ValidateNested()
    upsert?: WorkshopUpsertWithoutAddressInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    @ValidateNested()
    disconnect?: WorkshopWhereInput;

    @Field(() => WorkshopWhereInput, {nullable:true})
    @Type(() => WorkshopWhereInput)
    @ValidateNested()
    delete?: WorkshopWhereInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutAddressInput)
    @ValidateNested()
    update?: WorkshopUpdateToOneWithWhereWithoutAddressInput;
}
