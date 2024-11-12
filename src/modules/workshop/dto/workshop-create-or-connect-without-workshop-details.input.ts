import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopDetailsInput } from './workshop-create-without-workshop-details.input';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopDetailsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDetailsInput)
    create!: WorkshopCreateWithoutWorkshopDetailsInput;
}
