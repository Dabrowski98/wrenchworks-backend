import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { JoinWorkshopRequestStatus } from '../../prisma/dto/join-workshop-request-status.enum';
import { HideField } from 'nestjs-graphql';
import { UserUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput } from '../../user/dto/user-update-one-required-without-join-workshop-requests-nested.input';
import { WorkshopUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput } from '../../workshop/dto/workshop-update-one-required-without-join-workshop-requests-nested.input';

@InputType()
export class JoinWorkshopRequestUpdateWithoutEmployeeInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    joinWorkshopRequestId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Message must be a string' })
    @Validator.Length(0, 1000, { message: 'Message cannot exceed 1000 characters' })
    @Validator.IsOptional()
    message?: string;

    @Field(() => JoinWorkshopRequestStatus, {nullable:true})
    @Validator.IsEnum(JoinWorkshopRequestStatus, { message: 'Invalid status' })
    @Validator.IsOptional()
    status?: keyof typeof JoinWorkshopRequestStatus;

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

    @Field(() => Date, {nullable:true})
    @HideField()
    resolvedAt?: Date | string;

    @HideField()
    user?: UserUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput;

    @HideField()
    workshop?: WorkshopUpdateOneRequiredWithoutJoinWorkshopRequestsNestedInput;
}
