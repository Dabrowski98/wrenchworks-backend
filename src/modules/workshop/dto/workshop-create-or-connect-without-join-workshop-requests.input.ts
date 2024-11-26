import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutJoinWorkshopRequestsInput } from './workshop-create-without-join-workshop-requests.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => WorkshopCreateWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutJoinWorkshopRequestsInput;
}
