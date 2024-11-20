import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { UserReportsReportedType } from '../../prisma/dto/user-reports-reported-type.enum';
import { UserReportsStatus } from '../../prisma/dto/user-reports-status.enum';


@InputType()
export class UserReportUncheckedCreateInput {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint | number;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Report text must be a string' })
    @Validator.IsNotEmpty({ message: 'Report text is required' })
    @Validator.Length(0, 2500, { message: 'Report text cannot exceed 2500 characters' })
    reportText!: string;

    @Field(() => UserReportsReportedType, {nullable:false})
    @Validator.IsEnum(UserReportsReportedType, { message: 'Invalid reported type' })
    reportedType!: keyof typeof UserReportsReportedType;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportedId!: bigint | number;

    @Field(() => UserReportsStatus, {nullable:true})
    @Validator.IsEnum(UserReportsStatus, { message: 'Invalid report status' })
    status?: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:true})
    @Validator.IsDate({ message: 'Created at must be a valid date' })
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
