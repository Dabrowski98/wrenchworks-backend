import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { TaskUncheckedUpdateManyWithoutWorkshopJobNestedInput } from '../../task/dto/task-unchecked-update-many-without-workshop-job-nested.input';

@InputType()
export class WorkshopJobUncheckedUpdateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopJobId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    workshopId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    jobId?: bigint | number;

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

    @Field(() => TaskUncheckedUpdateManyWithoutWorkshopJobNestedInput, {nullable:true})
    @Type(() => TaskUncheckedUpdateManyWithoutWorkshopJobNestedInput)
    tasks?: TaskUncheckedUpdateManyWithoutWorkshopJobNestedInput;
}
