import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWorkshopCreateWithoutWorkshopInput } from './address-workshop-create-without-workshop.input';
import { Type } from 'class-transformer';
import { AddressWorkshopCreateOrConnectWithoutWorkshopInput } from './address-workshop-create-or-connect-without-workshop.input';
import { AddressWorkshopUpsertWithWhereUniqueWithoutWorkshopInput } from './address-workshop-upsert-with-where-unique-without-workshop.input';
import { AddressWorkshopCreateManyWorkshopInputEnvelope } from './address-workshop-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AddressWorkshopWhereUniqueInput } from './address-workshop-where-unique.input';
import { AddressWorkshopUpdateWithWhereUniqueWithoutWorkshopInput } from './address-workshop-update-with-where-unique-without-workshop.input';
import { AddressWorkshopUpdateManyWithWhereWithoutWorkshopInput } from './address-workshop-update-many-with-where-without-workshop.input';
import { AddressWorkshopScalarWhereInput } from './address-workshop-scalar-where.input';

@InputType()
export class AddressWorkshopUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [AddressWorkshopCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopCreateWithoutWorkshopInput)
    create?: Array<AddressWorkshopCreateWithoutWorkshopInput>;

    @Field(() => [AddressWorkshopCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<AddressWorkshopCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [AddressWorkshopUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<AddressWorkshopUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => AddressWorkshopCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => AddressWorkshopCreateManyWorkshopInputEnvelope)
    createMany?: AddressWorkshopCreateManyWorkshopInputEnvelope;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopWhereUniqueInput], {nullable:true})
    @Type(() => AddressWorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AddressWorkshopWhereUniqueInput, 'addressId_workshopId'>>;

    @Field(() => [AddressWorkshopUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<AddressWorkshopUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [AddressWorkshopUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => AddressWorkshopUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<AddressWorkshopUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [AddressWorkshopScalarWhereInput], {nullable:true})
    @Type(() => AddressWorkshopScalarWhereInput)
    deleteMany?: Array<AddressWorkshopScalarWhereInput>;
}
