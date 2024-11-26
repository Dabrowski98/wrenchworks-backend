import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutUserInput } from './workshop-update-without-user.input';
import { ValidateNested } from 'class-validator';
import { WorkshopCreateWithoutUserInput } from './workshop-create-without-user.input';

@InputType()
export class WorkshopUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId'>;

    @Field(() => WorkshopUpdateWithoutUserInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutUserInput)
    @ValidateNested()
    update!: WorkshopUpdateWithoutUserInput;

    @Field(() => WorkshopCreateWithoutUserInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutUserInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutUserInput;
}
