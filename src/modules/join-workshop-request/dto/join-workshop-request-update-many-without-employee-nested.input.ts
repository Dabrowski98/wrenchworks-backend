import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JoinWorkshopRequestCreateWithoutEmployeeInput } from './join-workshop-request-create-without-employee.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { JoinWorkshopRequestCreateOrConnectWithoutEmployeeInput } from './join-workshop-request-create-or-connect-without-employee.input';
import { JoinWorkshopRequestUpsertWithWhereUniqueWithoutEmployeeInput } from './join-workshop-request-upsert-with-where-unique-without-employee.input';
import { JoinWorkshopRequestCreateManyEmployeeInputEnvelope } from './join-workshop-request-create-many-employee-input-envelope.input';
import { Prisma } from '@prisma/client';
import { JoinWorkshopRequestWhereUniqueInput } from './join-workshop-request-where-unique.input';
import { JoinWorkshopRequestUpdateWithWhereUniqueWithoutEmployeeInput } from './join-workshop-request-update-with-where-unique-without-employee.input';
import { JoinWorkshopRequestUpdateManyWithWhereWithoutEmployeeInput } from './join-workshop-request-update-many-with-where-without-employee.input';
import { JoinWorkshopRequestScalarWhereInput } from './join-workshop-request-scalar-where.input';

@InputType()
export class JoinWorkshopRequestUpdateManyWithoutEmployeeNestedInput {

    @Field(() => [JoinWorkshopRequestCreateWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateWithoutEmployeeInput)
    @ValidateNested()
    create?: Array<JoinWorkshopRequestCreateWithoutEmployeeInput>;

    @Field(() => [JoinWorkshopRequestCreateOrConnectWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestCreateOrConnectWithoutEmployeeInput)
    @ValidateNested()
    connectOrCreate?: Array<JoinWorkshopRequestCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [JoinWorkshopRequestUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpsertWithWhereUniqueWithoutEmployeeInput)
    @ValidateNested()
    upsert?: Array<JoinWorkshopRequestUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => JoinWorkshopRequestCreateManyEmployeeInputEnvelope, {nullable:true})
    @Type(() => JoinWorkshopRequestCreateManyEmployeeInputEnvelope)
    @ValidateNested()
    createMany?: JoinWorkshopRequestCreateManyEmployeeInputEnvelope;

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

    @Field(() => [JoinWorkshopRequestUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateWithWhereUniqueWithoutEmployeeInput)
    @ValidateNested()
    update?: Array<JoinWorkshopRequestUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [JoinWorkshopRequestUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    @Type(() => JoinWorkshopRequestUpdateManyWithWhereWithoutEmployeeInput)
    @ValidateNested()
    updateMany?: Array<JoinWorkshopRequestUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [JoinWorkshopRequestScalarWhereInput], {nullable:true})
    @Type(() => JoinWorkshopRequestScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<JoinWorkshopRequestScalarWhereInput>;
}
