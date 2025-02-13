import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { UserReportType } from '../../prisma/dto/user-report-type.enum';
import { UserReportReportedEntityType } from '../../prisma/dto/user-report-reported-entity-type.enum';
import { UserReportStatus } from '../../prisma/dto/user-report-status.enum';
import { User } from '../../user/dto/user.model';

/**
 * The UserReport model is used to document user reports regarding issues such as offensive content or fraudulent activity.
 * It includes details about the report text, status, and the reported entity, along with user associations.
 */
@ObjectType({description:'The UserReport model is used to document user reports regarding issues such as offensive content or fraudulent activity.\nIt includes details about the report text, status, and the reported entity, along with user associations.'})
export class UserReport {

    /**
     * Identifier of the report
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the report'})
    reportId!: bigint;

    /**
     * Identifier of the user who submitted the report
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the user who submitted the report'})
    userId!: bigint;

    /**
     * Content of the report
     */
    @Field(() => String, {nullable:false,description:'Content of the report'})
    reportText!: string;

    /**
     * Type of the report (e.g., SPAM, ABUSE, INAPPROPRIATE)
     */
    @Field(() => UserReportType, {nullable:false,description:'Type of the report (e.g., SPAM, ABUSE, INAPPROPRIATE)'})
    reportType!: keyof typeof UserReportType;

    /**
     * Type of entity being reported (e.g., USER, REVIEW, WORKSHOP)
     */
    @Field(() => UserReportReportedEntityType, {nullable:false,description:'Type of entity being reported (e.g., USER, REVIEW, WORKSHOP)'})
    reportedEntityType!: keyof typeof UserReportReportedEntityType;

    /**
     * Identifier of the entity being reported
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Identifier of the entity being reported'})
    reportedId!: bigint;

    /**
     * Current status of the report
     * Note: Optional because field defaults to pending
     */
    @Field(() => UserReportStatus, {nullable:false,defaultValue:'PENDING',description:'Current status of the report\nNote: Optional because field defaults to pending'})
    status!: keyof typeof UserReportStatus;

    /**
     * Timestamp of report creation
     */
    @Field(() => Date, {nullable:false,description:'Timestamp of report creation'})
    createdAt!: Date;

    /**
     * Timestamp of last update
     */
    @Field(() => Date, {nullable:true,description:'Timestamp of last update'})
    updatedAt!: Date | null;

    /**
     * Identifier of user who last updated the report
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:true,description:'Identifier of user who last updated the report'})
    updatedBy!: bigint | null;

    /**
     * User who submitted the report
     */
    @Field(() => User, {nullable:false,description:'User who submitted the report'})
    user?: User;
}
