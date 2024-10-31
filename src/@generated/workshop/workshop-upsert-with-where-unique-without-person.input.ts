import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutPersonInput } from './workshop-update-without-person.input';
import { WorkshopCreateWithoutPersonInput } from './workshop-create-without-person.input';

@InputType()
export class WorkshopUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateWithoutPersonInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutPersonInput)
    update!: WorkshopUpdateWithoutPersonInput;

    @Field(() => WorkshopCreateWithoutPersonInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutPersonInput)
    create!: WorkshopCreateWithoutPersonInput;
}
