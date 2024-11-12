import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutAddressInput } from './workshop-create-or-connect-without-address.input';
import { WorkshopUpsertWithWhereUniqueWithoutAddressInput } from './workshop-upsert-with-where-unique-without-address.input';
import { WorkshopCreateManyAddressInputEnvelope } from './workshop-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateWithWhereUniqueWithoutAddressInput } from './workshop-update-with-where-unique-without-address.input';
import { WorkshopUpdateManyWithWhereWithoutAddressInput } from './workshop-update-many-with-where-without-address.input';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';

@InputType()
export class WorkshopUncheckedUpdateManyWithoutAddressNestedInput {

    @Field(() => [WorkshopCreateWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressInput)
    create?: Array<WorkshopCreateWithoutAddressInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutAddressInput>;

    @Field(() => [WorkshopUpsertWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopUpsertWithWhereUniqueWithoutAddressInput)
    upsert?: Array<WorkshopUpsertWithWhereUniqueWithoutAddressInput>;

    @Field(() => WorkshopCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyAddressInputEnvelope)
    createMany?: WorkshopCreateManyAddressInputEnvelope;

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

    @Field(() => [WorkshopUpdateWithWhereUniqueWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopUpdateWithWhereUniqueWithoutAddressInput)
    update?: Array<WorkshopUpdateWithWhereUniqueWithoutAddressInput>;

    @Field(() => [WorkshopUpdateManyWithWhereWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopUpdateManyWithWhereWithoutAddressInput)
    updateMany?: Array<WorkshopUpdateManyWithWhereWithoutAddressInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    @Type(() => WorkshopScalarWhereInput)
    deleteMany?: Array<WorkshopScalarWhereInput>;
}
