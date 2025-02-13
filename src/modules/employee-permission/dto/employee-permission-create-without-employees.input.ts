import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EmployeePermissionCreateWithoutEmployeesInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    permissionId?: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Name must be a string' })
    @Validator.Length(2, 30, { message: 'Name must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Name is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 255, { message: 'Description cannot exceed 255 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Action must be a string' })
    @Validator.Length(2, 30, { message: 'Action must be between 2 and 30 characters' })
    @Validator.Matches(/^[a-zA-Z]+$/, { message: 'Action must only contain letters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Action is required' })
    action!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Subject must be a string' })
    @Validator.Length(2, 30, { message: 'Subject must be between 2 and 30 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Subject is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    subject!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsOptional()
    conditions?: any;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
