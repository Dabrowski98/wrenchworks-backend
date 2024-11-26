import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutUserInput } from './workshop-create-without-user.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateOrConnectWithoutUserInput } from './workshop-create-or-connect-without-user.input';
import { WorkshopCreateManyUserInputEnvelope } from './workshop-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [WorkshopCreateWithoutUserInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutUserInput)
    @ValidateNested()
    create?: Array<WorkshopCreateWithoutUserInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutUserInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutUserInput>;

    @Field(() => WorkshopCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyUserInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopCreateManyUserInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>>;
}
