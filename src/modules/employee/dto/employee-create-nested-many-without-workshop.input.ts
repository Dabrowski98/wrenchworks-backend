import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutWorkshopInput } from './employee-create-without-workshop.input';
import { HideField } from '@nestjs/graphql';
import { EmployeeCreateOrConnectWithoutWorkshopInput } from './employee-create-or-connect-without-workshop.input';
import { EmployeeCreateManyWorkshopInputEnvelope } from './employee-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class EmployeeCreateNestedManyWithoutWorkshopInput {

    @HideField()
    create?: Array<EmployeeCreateWithoutWorkshopInput>;

    @HideField()
    connectOrCreate?: Array<EmployeeCreateOrConnectWithoutWorkshopInput>;

    @HideField()
    createMany?: EmployeeCreateManyWorkshopInputEnvelope;

    @Field(() => [EmployeeWhereUniqueInput], {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<EmployeeWhereUniqueInput, 'employeeId' | 'login_workshopId'>>;
}
