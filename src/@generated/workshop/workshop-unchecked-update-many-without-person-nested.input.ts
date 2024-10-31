import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutPersonInput } from './workshop-create-without-person.input';
import { Type } from 'class-transformer';
import { WorkshopCreateOrConnectWithoutPersonInput } from './workshop-create-or-connect-without-person.input';
import { WorkshopUpsertWithWhereUniqueWithoutPersonInput } from './workshop-upsert-with-where-unique-without-person.input';
import { WorkshopCreateManyPersonInputEnvelope } from './workshop-create-many-person-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { WorkshopUpdateWithWhereUniqueWithoutPersonInput } from './workshop-update-with-where-unique-without-person.input';
import { WorkshopUpdateManyWithWhereWithoutPersonInput } from './workshop-update-many-with-where-without-person.input';
import { WorkshopScalarWhereInput } from './workshop-scalar-where.input';

@InputType()
export class WorkshopUncheckedUpdateManyWithoutPersonNestedInput {

    @Field(() => [WorkshopCreateWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopCreateWithoutPersonInput)
    create?: Array<WorkshopCreateWithoutPersonInput>;

    @Field(() => [WorkshopCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<WorkshopCreateOrConnectWithoutPersonInput>;

    @Field(() => [WorkshopUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<WorkshopUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => WorkshopCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => WorkshopCreateManyPersonInputEnvelope)
    createMany?: WorkshopCreateManyPersonInputEnvelope;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    set?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId'>>;

    @Field(() => [WorkshopUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<WorkshopUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [WorkshopUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => WorkshopUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<WorkshopUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [WorkshopScalarWhereInput], {nullable:true})
    @Type(() => WorkshopScalarWhereInput)
    deleteMany?: Array<WorkshopScalarWhereInput>;
}
