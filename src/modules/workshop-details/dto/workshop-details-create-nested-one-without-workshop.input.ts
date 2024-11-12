import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsCreateOrConnectWithoutWorkshopInput } from './workshop-details-create-or-connect-without-workshop.input';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';

@InputType()
export class WorkshopDetailsCreateNestedOneWithoutWorkshopInput {

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    create?: WorkshopDetailsCreateWithoutWorkshopInput;

    @Field(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: WorkshopDetailsCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
