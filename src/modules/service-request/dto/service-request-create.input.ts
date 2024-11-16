import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { ServiceRequestsStatus } from '../../prisma/dto/service-requests-status.enum';
import { JobCreateNestedManyWithoutServiceRequestsInput } from '../../job/dto/job-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../../service/dto/service-create-nested-one-without-service-request.input';
import { VehicleCreateNestedOneWithoutVehicleAssociatedServiceRequestsInput } from '../../vehicle/dto/vehicle-create-nested-one-without-vehicle-associated-service-requests.input';
import { WorkshopCreateNestedOneWithoutServiceRequestsInput } from '../../workshop/dto/workshop-create-nested-one-without-service-requests.input';
import { PersonCreateNestedOneWithoutServiceRequestsInput } from '../../person/dto/person-create-nested-one-without-service-requests.input';
import { GraphQLBigInt } from 'graphql-scalars';
import { CREATE } from 'src/constants/validation-groups';

@InputType()
export class ServiceRequestCreateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => [GraphQLBigInt], {nullable:true})
    @Validator.IsOptional()
    @Validator.IsArray({ message: 'Jobs IDs must be an array' })
    @Validator.ArrayNotEmpty({ message: 'Jobs IDs must not be empty' })
    jobsIds?: bigint[];

    @Field(() => Scalars.GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Vehicle ID is required' })
    vehicleId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Workshop ID is required' })
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, { nullable: false })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Person ID is required' })
    personId!: bigint;
}
