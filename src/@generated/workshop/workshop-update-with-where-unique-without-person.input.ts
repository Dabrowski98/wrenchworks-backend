import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopUpdateWithoutPersonInput } from './workshop-update-without-person.input';

@InputType()
export class WorkshopUpdateWithWhereUniqueWithoutPersonInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopUpdateWithoutPersonInput, {nullable:false})
    @Type(() => WorkshopUpdateWithoutPersonInput)
    data!: WorkshopUpdateWithoutPersonInput;
}
