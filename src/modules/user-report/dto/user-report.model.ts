import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportReportedEntityType } from '../../prisma/dto/user-report-reported-entity-type.enum';
import { UserReportStatus } from '../../prisma/dto/user-report-status.enum';
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

    @Field(() => UserReportReportedEntityType, {nullable:false})
    reportedEntityType!: keyof typeof UserReportReportedEntityType;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    reportedId!: bigint;

    /**
     * Note: Optional because field defaults to pending
     */
    @Field(() => UserReportStatus, {nullable:false,defaultValue:'PENDING',description:'Note: Optional because field defaults to pending'})
    status!: keyof typeof UserReportStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => User, {nullable:false})
    user?: User;
}
