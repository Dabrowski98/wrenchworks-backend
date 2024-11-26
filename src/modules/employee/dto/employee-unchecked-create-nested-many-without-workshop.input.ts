import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateOrConnectWithoutWorkshopInput } from './employee-create-or-connect-without-workshop.input';
import { EmployeeCreateManyWorkshopInputEnvelope } from './employee-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [EmployeeCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<EmployeeCreateWithoutWorkshopInput>;

    @Field(() => [EmployeeCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutWorkshopInput>;

    @Field(() => EmployeeCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => EmployeeCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: EmployeeCreateManyWorkshopInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
