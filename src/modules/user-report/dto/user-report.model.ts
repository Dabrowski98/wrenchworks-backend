import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportsReportedEntityType } from '../../prisma/dto/user-reports-reported-entity-type.enum';
import { UserReportsStatus } from '../../prisma/dto/user-reports-status.enum';
import { User } from '../../user/dto/user.model';

@ObjectType()
export class UserReport {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    userId!: bigint;

    @Field(() => String, {nullable:false})
    reportText!: string;

    @Field(() => UserReportType, {nullable:false})
    reportType!: keyof typeof UserReportType;

    @Field(() => UserReportsReportedEntityType, {nullable:false})
    reportedEntityType!: keyof typeof UserReportsReportedEntityType;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportedId!: bigint;

    /**
     * Note: Optional because field defaults to pending
     */
    @Field(() => UserReportsStatus, {nullable:false,defaultValue:'PENDING',description:'Note: Optional because field defaults to pending'})
    status!: keyof typeof UserReportsStatus;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
