import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutJoinWorkshopRequestsInput } from '../../user/dto/user-create-nested-one-without-join-workshop-requests.input';
import { Type } from 'class-transformer';
import { WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput } from '../../workshop/dto/workshop-create-nested-one-without-join-workshop-requests.input';
import { ValidateNested } from 'class-validator';
import { EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput } from '../../employee/dto/employee-create-nested-one-without-join-workshop-requests.input';

@InputType()
export class JoinWorkshopRequestCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    joinWorkshopRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Message must be a string' })
    @Validator.Length(0, 1000, { message: 'Message cannot exceed 1000 characters' })
    @Validator.IsOptional()
    message?: string;

    @Field(() => UserCreateNestedOneWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutJoinWorkshopRequestsInput)
    user!: UserCreateNestedOneWithoutJoinWorkshopRequestsInput;

    @Field(() => WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput)
    workshop!: WorkshopCreateNestedOneWithoutJoinWorkshopRequestsInput;

    @Field(() => EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput, {nullable:false})
    @Type(() => EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput)
    @ValidateNested()
    @Type(() => EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput)
    employee!: EmployeeCreateNestedOneWithoutJoinWorkshopRequestsInput;
}