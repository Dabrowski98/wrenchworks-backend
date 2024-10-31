import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopAddressesInput } from './workshop-create-without-workshop-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopAddressesInput } from './workshop-create-or-connect-without-workshop-addresses.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopAddressesInput {

    @Field(() => WorkshopCreateWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopAddressesInput)
    create?: WorkshopCreateWithoutWorkshopAddressesInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopAddressesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopAddressesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
