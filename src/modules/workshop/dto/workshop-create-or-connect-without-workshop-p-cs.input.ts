import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopPCsInput } from './workshop-create-without-workshop-p-cs.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopPCsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopCreateWithoutWorkshopPCsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopPCsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopPCsInput;
}
