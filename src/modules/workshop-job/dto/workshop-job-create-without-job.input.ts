import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { TaskCreateNestedManyWithoutWorkshopJobInput } from '../../task/dto/task-create-nested-many-without-workshop-job.input';
import { WorkshopCreateNestedOneWithoutWorkshopJobsInput } from '../../workshop/dto/workshop-create-nested-one-without-workshop-jobs.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopJobCreateWithoutJobInput {

    @HideField()
    workshopJobId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Workshop description must be a string' })
    @Validator.Length(0, 500, { message: 'Workshop description cannot exceed 500 characters' })
    @Validator.IsOptional()
    workshopJobDescription?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Minimum price must be a number' })
    @Validator.Min(0, { message: 'Minimum price cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Minimum price cannot exceed 9999999.99' })
    @Validator.IsOptional()
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Maximum price must be a number' })
    @Validator.Min(0, { message: 'Maximum price cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Maximum price cannot exceed 9999999.99' })
    @Validator.IsOptional()
    maxPrice?: Decimal;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Availability must be a boolean' })
    @Validator.IsOptional()
    availability?: boolean;

    @Field(() => Date, {nullable:true})
    @HideField()
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    @HideField()
    createdBy?: bigint | number;

    @Field(() => Date, {nullable:true})
    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    tasks?: TaskCreateNestedManyWithoutWorkshopJobInput;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopJobsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopJobsInput)
    @ValidateNested()
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopJobsInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopJobsInput;
}
