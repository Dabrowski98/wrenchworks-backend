import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutJoinWorkshopRequestsInput } from './workshop-create-without-join-workshop-requests.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput } from './workshop-create-or-connect-without-join-workshop-requests.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput {

    @HideField()
    create?: WorkshopCreateWithoutJoinWorkshopRequestsInput;

    @HideField()
    connectOrCreate?: WorkshopCreateOrConnectWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;
}
