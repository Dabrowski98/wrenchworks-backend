import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportsReportedEntityType } from '../../prisma/dto/user-reports-reported-entity-type.enum';
import { UserReportsStatus } from '../../prisma/dto/user-reports-status.enum';
import { UserUpdateOneRequiredWithoutUserReportsNestedInput } from '../../user/dto/user-update-one-required-without-user-reports-nested.input';
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class UserReportUpdateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Report text must be a string' })
    @Validator.Length(50, 2500, { message: 'Report text must be between 50 and 2500 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Report text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    reportText?: string;

    @Field(() => UserReportType, {nullable:true})
    @Validator.IsEnum(UserReportType, { message: 'Invalid report type' })
    reportType?: keyof typeof UserReportType;

    @Field(() => UserReportsStatus, {nullable:true})
    @Validator.IsEnum(UserReportsStatus, { message: 'Invalid report status' })
    @Validator.IsOptional()
    status?: keyof typeof UserReportsStatus;

    }