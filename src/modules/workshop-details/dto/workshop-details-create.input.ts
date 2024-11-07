import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { WorkshopsDetailsStatus } from '../prisma/workshops-details-status.enum';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateNestedOneWithoutWorkshopDetailsInput } from '../workshop/workshop-create-nested-one-without-workshop-details.input';

@InputType()
export class WorkshopDetailsCreateInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    logoURL?: string;

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    status?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => String, {nullable:true})
    NIP?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopDetailsInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopDetailsInput;
}
