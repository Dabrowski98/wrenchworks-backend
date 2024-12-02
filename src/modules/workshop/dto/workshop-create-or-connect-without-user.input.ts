import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutUserInput } from './workshop-create-without-user.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutUserInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutUserInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutUserInput;
}
