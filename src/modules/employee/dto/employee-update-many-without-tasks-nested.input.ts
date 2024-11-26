import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutTasksInput } from './employee-create-without-tasks.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutTasksInput } from './employee-create-or-connect-without-tasks.input';
import { EmployeeUpsertWithWhereUniqueWithoutTasksInput } from './employee-upsert-with-where-unique-without-tasks.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithWhereUniqueWithoutTasksInput } from './employee-update-with-where-unique-without-tasks.input';
import { EmployeeUpdateManyWithWhereWithoutTasksInput } from './employee-update-many-with-where-without-tasks.input';
import { EmployeeScalarWhereInput } from './employee-scalar-where.input';

@InputType()
export class EmployeeUpdateManyWithoutTasksNestedInput {

    @Field(() => [EmployeeCreateWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutTasksInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutTasksInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutTasksInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutTasksInput>;

    @Field(() => [EmployeeUpsertWithWhereUniqueWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeUpsertWithWhereUniqueWithoutTasksInput)
    @ValidateNested()
    upsert?: Array<EmployeeUpsertWithWhereUniqueWithoutTasksInput>;

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

    @Field(() => [EmployeeUpdateWithWhereUniqueWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeUpdateWithWhereUniqueWithoutTasksInput)
    @ValidateNested()
    update?: Array<EmployeeUpdateWithWhereUniqueWithoutTasksInput>;

    @Field(() => [EmployeeUpdateManyWithWhereWithoutTasksInput], {nullable:true})
    @Type(() => EmployeeUpdateManyWithWhereWithoutTasksInput)
    @ValidateNested()
    updateMany?: Array<EmployeeUpdateManyWithWhereWithoutTasksInput>;

    @Field(() => [EmployeeScalarWhereInput], {nullable:true})
    @Type(() => EmployeeScalarWhereInput)
    @ValidateNested()
    deleteMany?: Array<EmployeeScalarWhereInput>;
}
