import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutUserInput } from './workshop-create-without-user.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutUserInput } from './workshop-create-or-connect-without-user.input';
import { WorkshopCreateManyUserInputEnvelope } from './workshop-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedManyWithoutUserInput {

    @HideField()
    create?: Array<WorkshopCreateWithoutUserInput>;

    @HideField()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutUserInput>;

    @HideField()
    createMany?: WorkshopCreateManyUserInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;
}
