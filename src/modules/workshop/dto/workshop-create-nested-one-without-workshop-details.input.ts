import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDetailsInput } from './workshop-create-without-workshop-details.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutWorkshopDetailsInput } from './workshop-create-or-connect-without-workshop-details.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopDetailsInput {

    @Field(() => WorkshopCreateWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopCreateWithoutWorkshopDetailsInput)
    create?: WorkshopCreateWithoutWorkshopDetailsInput;

    @Field(() => WorkshopCreateOrConnectWithoutWorkshopDetailsInput, {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutWorkshopDetailsInput)
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDetailsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;
}
