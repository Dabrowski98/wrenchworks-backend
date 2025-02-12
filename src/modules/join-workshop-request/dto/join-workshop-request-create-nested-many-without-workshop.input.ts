import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutWorkshopInput } from './join-workshop-request-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput } from './join-workshop-request-create-or-connect-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateManyWorkshopInputEnvelope } from './join-workshop-request-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';

@InputType()
export class JoinWorkshopRequestCreateNestedManyWithoutWorkshopInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutWorkshopInput>;

    @Field(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyWorkshopInputEnvelope;

    }