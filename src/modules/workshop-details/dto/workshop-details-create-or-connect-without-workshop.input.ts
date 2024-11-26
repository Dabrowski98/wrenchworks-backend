import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopDetailsCreateOrConnectWithoutWorkshopInput {

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:false})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    @ValidateNested()
    create!: WorkshopDetailsCreateWithoutWorkshopInput;
}
