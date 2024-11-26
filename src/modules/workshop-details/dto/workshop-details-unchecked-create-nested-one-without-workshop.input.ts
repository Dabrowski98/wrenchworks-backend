import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDetailsCreateWithoutWorkshopInput } from './workshop-details-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDetailsCreateOrConnectWithoutWorkshopInput } from './workshop-details-create-or-connect-without-workshop.input';
import { Prisma } from '@prisma/client';
import { WorkshopDetailsWhereUniqueInput } from './workshop-details-where-unique.input';

@InputType()
export class WorkshopDetailsUncheckedCreateNestedOneWithoutWorkshopInput {

    @Field(() => WorkshopDetailsCreateWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: WorkshopDetailsCreateWithoutWorkshopInput;

    @Field(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput, {nullable:true})
    @Type(() => WorkshopDetailsCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: WorkshopDetailsCreateOrConnectWithoutWorkshopInput;

    @Field(() => WorkshopDetailsWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopDetailsWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopDetailsWhereUniqueInput, 'workshopId'>;
}
