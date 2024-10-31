import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopAddressesInput } from './workshop-create-without-workshop-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopAddressesInput } from './workshop-create-or-connect-without-workshop-addresses.input';
import { WorkshopUpsertWithoutWorkshopAddressesInput } from './workshop-upsert-without-workshop-addresses.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateToOneWithWhereWithoutWorkshopAddressesInput } from './workshop-update-to-one-with-where-without-workshop-addresses.input';

@InputType()
export class WorkshopUpdateOneRequiredWithoutWorkshopAddressesNestedInput {

    @Field(() => WorkshopCreateWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopAddressesInput)
    create?: WorkshopCreateWithoutWorkshopAddressesInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopAddressesInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopAddressesInput;

    @Field(() => WorkshopUpsertWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopUpsertWithoutWorkshopAddressesInput)
    upsert?: WorkshopUpsertWithoutWorkshopAddressesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateToOneWithWhereWithoutWorkshopAddressesInput, {nullable:true})
    @Type(() => WorkshopUpdateToOneWithWhereWithoutWorkshopAddressesInput)
    update?: WorkshopUpdateToOneWithWhereWithoutWorkshopAddressesInput;
}
