import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutWorkshopInput } from './employee-create-or-connect-without-workshop.input';
import { EmployeeUpsertWithWhereUniqueWithoutWorkshopInput } from './employee-upsert-with-where-unique-without-workshop.input';
import { EmployeeCreateManyWorkshopInputEnvelope } from './employee-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutWorkshopInput } from './employee-update-with-where-unique-without-workshop.input';
import { EmployeeUpdateManyWithWhereWithoutWorkshopInput } from './employee-update-many-with-where-without-workshop.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [EmployeeCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutWorkshopInput)
    create?: Array<EmployeeCreateWithoutWorkshopInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutWorkshopInput)
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutWorkshopInput)
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => EmployeeCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyWorkshopInputEnvelope)
    createMany?: EmployeeCreateManyWorkshopInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId_workshopId'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutWorkshopInput)
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutWorkshopInput)
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
