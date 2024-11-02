import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressesInput } from './workshop-create-without-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutAddressesInput } from './workshop-create-or-connect-without-addresses.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopUncheckedCreateNestedManyWithoutAddressesInput {

    @Field(() => [WorkshopCreateWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressesInput)
    create?: Array<WorkshopCreateWithoutAddressesInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutAddressesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;
}
