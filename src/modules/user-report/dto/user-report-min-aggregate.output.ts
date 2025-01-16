import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportReportedEntityType } from '../../prisma/dto/user-report-reported-entity-type.enum';
import { UserReportStatus } from '../../prisma/dto/user-report-status.enum';

@ObjectType()
export class UserReportMinAggregate {

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportId?: bigint | number;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId?: bigint | number;

    @Field(() => String, {nullable:true})
    reportText?: string;

    @Field(() => UserReportType, {nullable:true})
    reportType?: keyof typeof UserReportType;

    @Field(() => UserReportReportedEntityType, {nullable:true})
    reportedEntityType?: keyof typeof UserReportReportedEntityType;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    reportedId?: bigint | number;

    @Field(() => UserReportStatus, {nullable:true})
    status?: keyof typeof UserReportStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
