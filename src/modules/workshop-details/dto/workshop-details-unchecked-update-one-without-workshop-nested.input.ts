import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsCreateOrConnectWithoutWorkshopInput } from './workshop-details-create-or-connect-without-workshop.input';
import { WorkshopDetailsUpsertWithoutWorkshopInput } from './workshop-details-upsert-without-workshop.input';
import { WorkshopDetailsWhereInput } from './workshop-details-where.input';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput } from './workshop-details-update-to-one-with-where-without-workshop.input';

@InputType()
export class WorkshopDetailsUncheckedUpdateOneWithoutWorkshopNestedInput {

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    create?: WorkshopDetailsCreateWithoutWorkshopInput;

    @Field(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: WorkshopDetailsCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDetailsUpsertWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsUpsertWithoutWorkshopInput)
    upsert?: WorkshopDetailsUpsertWithoutWorkshopInput;

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    disconnect?: WorkshopDetailsWhereInput;

    @Field(() => WorkshopDetailsWhereInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereInput)
    delete?: WorkshopDetailsWhereInput;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput)
    update?: WorkshopDetailsUpdateToOneWithWhereWithoutWorkshopInput;
}
