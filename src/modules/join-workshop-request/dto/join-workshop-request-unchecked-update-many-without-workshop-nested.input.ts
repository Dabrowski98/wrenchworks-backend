import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutWorkshopInput } from './join-workshop-request-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput } from './join-workshop-request-create-or-connect-without-workshop.input';
import { JoinWorkshopRequestUpsertWithWhereUniqueWithoutWorkshopInput } from './join-workshop-request-upsert-with-where-unique-without-workshop.input';
import { JoinWorkshopRequestCreateManyWorkshopInputEnvelope } from './join-workshop-request-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { JoinWorkshopRequestUpdateWithWhereUniqueWithoutWorkshopInput } from './join-workshop-request-update-with-where-unique-without-workshop.input';
import { JoinWorkshopRequestUpdateManyWithWhereWithoutWorkshopInput } from './join-workshop-request-update-many-with-where-without-workshop.input';
import { JoinWorkshopRequestScalarWhereInput } from './join-workshop-request-scalar-where.input';

@InputType()
export class JoinWorkshopRequestUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutWorkshopInput>;

    @Field(() => [JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<JoinWorkshopRequestCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [JoinWorkshopRequestUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<JoinWorkshopRequestUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyWorkshopInputEnvelope;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestWhereUniqueInput], {nullable:true})
    @Type(() => JoinWorkshopRequestWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<JoinWorkshopRequestWhereUniqueInput, 'joinWorkshopRequestId'>>;

    @Field(() => [JoinWorkshopRequestUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<JoinWorkshopRequestUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [JoinWorkshopRequestUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<JoinWorkshopRequestUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    @Type(() => JoinWorkshopRequestScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JoinWorkshopRequestScalarWhereInput>;
}
