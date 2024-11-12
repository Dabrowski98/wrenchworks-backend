import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutAddressInput } from './workshop-create-without-address.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutAddressInput } from './workshop-create-or-connect-without-address.input';
import { WorkshopCreateManyAddressInputEnvelope } from './workshop-create-many-address-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedManyWithoutAddressInput {

    @Field(() => [WorkshopCreateWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutAddressInput)
    create?: Array<WorkshopCreateWithoutAddressInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutAddressInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutAddressInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutAddressInput>;

    @Field(() => WorkshopCreateManyAddressInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyAddressInputEnvelope)
    createMany?: WorkshopCreateManyAddressInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;
}
