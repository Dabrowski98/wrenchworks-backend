import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutPersonInput } from './workshop-create-without-person.input';

@InputType()
export class WorkshopCreateOrConnectWithoutPersonInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>;

    @Field(() => WorkshopCreateWithoutPersonInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutPersonInput)
    create!: WorkshopCreateWithoutPersonInput;
}
