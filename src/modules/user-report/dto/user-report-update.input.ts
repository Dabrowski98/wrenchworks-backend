import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserReportsReportedType } from '../../prisma/dto/user-reports-reported-type.enum';
import * as Scalars from 'graphql-scalars';
import { UserReportsStatus } from '../../prisma/dto/user-reports-status.enum';
import { UserUpdateOneRequiredWithoutUserReportsNestedInput } from '../../user/dto/user-update-one-required-without-user-reports-nested.input';
import { Type } from 'class-transformer';
import { CREATE, UPDATE } from 'src/constants/validation-groups';


@InputType()
export class UserReportUpdateInput {
    
    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Report text must be a string' })
    @Validator.IsOptional()
    @Validator.Length(0, 2500, { message: 'Report text cannot exceed 2500 characters' })
    reportText?: string;

    @Field(() => UserReportsStatus, {nullable:true})
    @Validator.IsEnum(UserReportsStatus, { message: 'Invalid report status' })
    @Validator.IsOptional()
    status?: keyof typeof UserReportsStatus;

}
