import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { TaskUpdateManyWithoutWorkshopJobNestedInput } from '../../task/dto/task-update-many-without-workshop-job-nested.input';
import { JobUpdateOneRequiredWithoutJobWorkshopsNestedInput } from '../../job/dto/job-update-one-required-without-job-workshops-nested.input';

@InputType()
export class WorkshopJobUpdateWithoutWorkshopInput {

    @HideField()
    workshopJobId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Workshop description must be a string' })
    @Validator.Length(0, 500, { message: 'Workshop description cannot exceed 5000 characters' })
    workshopJobDescription?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Minimum price must be a number' })
    @Validator.Min(0, { message: 'Minimum price cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Minimum price cannot exceed 9999999.99' })
    minPrice?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Maximum price must be a number' })
    @Validator.Min(0, { message: 'Maximum price cannot be negative' })
    @Validator.Max(9999999.99, { message: 'Maximum price cannot exceed 9999999.99' })
    maxPrice?: Decimal;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean({ message: 'Availability must be a boolean' })
    availability?: boolean;

    @Field(() => TaskUpdateManyWithoutWorkshopJobNestedInput, {nullable:true})
    @Type(() => TaskUpdateManyWithoutWorkshopJobNestedInput)
    tasks?: TaskUpdateManyWithoutWorkshopJobNestedInput;

    @Field(() => JobUpdateOneRequiredWithoutJobWorkshopsNestedInput, {nullable:true})
    @Type(() => JobUpdateOneRequiredWithoutJobWorkshopsNestedInput)
    job?: JobUpdateOneRequiredWithoutJobWorkshopsNestedInput;
}
