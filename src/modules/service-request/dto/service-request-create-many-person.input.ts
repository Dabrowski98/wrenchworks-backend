import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { CREATE } from 'src/constants/validation-groups';

@InputType()
export class ServiceRequestCreateManyPersonInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => [Scalars.GraphQLBigInt], {nullable:true})
    @Validator.IsOptional()
    @Validator.IsArray({ message: 'Jobs IDs must be an array' })
    @Validator.ArrayNotEmpty({ message: 'Jobs IDs must not be empty' })
    jobsIds?: bigint[];

    @Field(() => Scalars.GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Vehicle ID is required' })
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ message: 'Workshop ID is required' })
    workshopId!: bigint;

}
