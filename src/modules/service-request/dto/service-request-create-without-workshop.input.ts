import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ServiceRequestStatus } from '../../prisma/dto/service-request-status.enum';
import * as Validator from 'class-validator';
import { JobCreateNestedManyWithoutServiceRequestsInput } from '../../job/dto/job-create-nested-many-without-service-requests.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceCreateNestedOneWithoutServiceRequestInput } from '../../service/dto/service-create-nested-one-without-service-request.input';
import { VehicleCreateNestedOneWithoutServiceRequestsInput } from '../../vehicle/dto/vehicle-create-nested-one-without-service-requests.input';
import { UserCreateNestedOneWithoutServiceRequestsInput } from '../../user/dto/user-create-nested-one-without-service-requests.input';
import { GuestCreateNestedOneWithoutServiceRequestInput } from '../../guest/dto/guest-create-nested-one-without-service-request.input';

@InputType()
export class ServiceRequestCreateWithoutWorkshopInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 5000, { message: 'Description cannot exceed 5000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => JobCreateNestedManyWithoutServiceRequestsInput, {nullable:true})
    @Type(() => JobCreateNestedManyWithoutServiceRequestsInput)
    @ValidateNested()
    @Type(() => JobCreateNestedManyWithoutServiceRequestsInput)
    jobs?: JobCreateNestedManyWithoutServiceRequestsInput;

    @Field(() => VehicleCreateNestedOneWithoutServiceRequestsInput, {nullable:false})
    @Type(() => VehicleCreateNestedOneWithoutServiceRequestsInput)
    @ValidateNested()
    @Type(() => VehicleCreateNestedOneWithoutServiceRequestsInput)
    vehicle!: VehicleCreateNestedOneWithoutServiceRequestsInput;

    @Field(() => UserCreateNestedOneWithoutServiceRequestsInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutServiceRequestsInput)
    @ValidateNested()
    user?: UserCreateNestedOneWithoutServiceRequestsInput;

    }