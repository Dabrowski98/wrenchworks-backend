import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutWorkshopInput } from './employee-create-or-connect-without-workshop.input';
import { EmployeeUpsertWithWhereUniqueWithoutWorkshopInput } from './employee-upsert-with-where-unique-without-workshop.input';
import { EmployeeCreateManyWorkshopInputEnvelope } from './employee-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutWorkshopInput } from './employee-update-with-where-unique-without-workshop.input';
import { EmployeeUpdateManyWithWhereWithoutWorkshopInput } from './employee-update-many-with-where-without-workshop.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUncheckedUpdateManyWithoutWorkshopNestedInput {

    @Field(() => [EmployeeCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutWorkshopInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutWorkshopInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => EmployeeCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyWorkshopInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    set?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    disconnect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    delete?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutWorkshopInput)
    @ValidateNested()
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutWorkshopInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutWorkshopInput)
    @ValidateNested()
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutWorkshopInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
