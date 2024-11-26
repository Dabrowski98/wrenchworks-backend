import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutAddressInput } from './workshop-create-or-connect-without-address.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopUncheckedCreateNestedOneWithoutAddressInput {

    @Field(() => WorkshopCreateWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressInput)
    @ValidateNested()
    create?: WorkshopCreateWithoutAddressInput;

    @Field(() => WorkshopCreateOrConnectWithoutAddressInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressInput)
    @ValidateNested()
    connectOrCreate?: WorkshopCreateOrConnectWithoutAddressInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
