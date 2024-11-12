import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutPersonInput } from './workshop-create-without-person.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutPersonInput } from './workshop-create-or-connect-without-person.input';
import { WorkshopCreateManyPersonInputEnvelope } from './workshop-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';

@InputType()
export class WorkshopCreateNestedManyWithoutPersonInput {

    @Field(() => [WorkshopCreateWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutPersonInput)
    create?: Array<WorkshopCreateWithoutPersonInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutPersonInput>;

    @Field(() => WorkshopCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyPersonInputEnvelope)
    createMany?: WorkshopCreateManyPersonInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;
}
