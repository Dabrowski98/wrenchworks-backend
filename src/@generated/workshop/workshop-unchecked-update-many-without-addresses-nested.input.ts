import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressesInput } from './workshop-create-without-addresses.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutAddressesInput } from './workshop-create-or-connect-without-addresses.input';
import { WorkshopUpsertWithWhereUniqueWithoutAddressesInput } from './workshop-upsert-with-where-unique-without-addresses.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateWithWhereUniqueWithoutAddressesInput } from './workshop-update-with-where-unique-without-addresses.input';
import { WorkshopUpdateManyWithWhereWithoutAddressesInput } from './workshop-update-many-with-where-without-addresses.input';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';

@InputType()
export class WorkshopUncheckedUpdateManyWithoutAddressesNestedInput {

    @Field(() => [WorkshopCreateWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressesInput)
    create?: Array<WorkshopCreateWithoutAddressesInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressesInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutAddressesInput>;

    @Field(() => [WorkshopUpsertWithWhereUniqueWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopUpsertWithWhereUniqueWithoutAddressesInput)
    upsert?: Array<WorkshopUpsertWithWhereUniqueWithoutAddressesInput>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopUpdateWithWhereUniqueWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopUpdateWithWhereUniqueWithoutAddressesInput)
    update?: Array<WorkshopUpdateWithWhereUniqueWithoutAddressesInput>;

    @Field(() => [WorkshopUpdateManyWithWhereWithoutAddressesInput], {nullable:true})
    @Type(() => WorkshopUpdateManyWithWhereWithoutAddressesInput)
    updateMany?: Array<WorkshopUpdateManyWithWhereWithoutAddressesInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    @Type(() => WorkshopScalarWhereInput)
    deleteMany?: Array<WorkshopScalarWhereInput>;
}
