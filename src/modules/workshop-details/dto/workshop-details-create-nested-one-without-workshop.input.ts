import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDetailsCreateOrConnectWithoutWorkshopInput } from './workshop-details-create-or-connect-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';

@InputType()
export class WorkshopDetailsCreateNestedOneWithoutWorkshopInput {

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDetailsCreateWithoutWorkshopInput;

    @HideField()
    connectOrCreate?: WorkshopDetailsCreateOrConnectWithoutWorkshopInput;

    @HideField()
    connect?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
