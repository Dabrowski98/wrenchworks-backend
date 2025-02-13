import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportReportedEntityType } from '../../prisma/dto/user-report-reported-entity-type.enum';
import { UserReportStatus } from '../../prisma/dto/user-report-status.enum';
import { UserUpdateOneRequiredWithoutUserReportsNestedInput } from '../../user/dto/user-update-one-required-without-user-reports-nested.input';

@InputType()
export class UserReportUpdateInput {

    @HideField()
    reportId?: bigint | number;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Report text must be a string' })
    @Validator.Length(50, 2500, { message: 'Report text must be between 50 and 2500 characters' })
    @Validator.IsNotEmpty({ groups: [CREATE], message: 'Report text is required' })
    @Validator.IsOptional({ groups: [UPDATE]})
    reportText?: string;

    @Field(() => UserReportType, {nullable:true})
    @Validator.IsEnum(UserReportType, { message: 'Invalid report type' })
    reportType?: keyof typeof UserReportType;

    @HideField()
    reportedEntityType?: keyof typeof UserReportReportedEntityType;

    @HideField()
    reportedId?: bigint | number;

    @Field(() => UserReportStatus, {nullable:true})
    @Validator.IsEnum(UserReportStatus, { message: 'Invalid report status' })
    @Validator.IsOptional()
    status?: keyof typeof UserReportStatus;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @HideField()
    updatedBy?: bigint | number;

    @HideField()
    user?: UserUpdateOneRequiredWithoutUserReportsNestedInput;
}
