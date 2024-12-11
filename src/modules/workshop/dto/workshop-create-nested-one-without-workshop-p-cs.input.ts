import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopPCsInput } from './workshop-create-without-workshop-p-cs.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutWorkshopPCsInput } from './workshop-create-or-connect-without-workshop-p-cs.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopPCsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;
}