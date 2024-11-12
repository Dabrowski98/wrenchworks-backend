import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { WorkshopsDetailsStatus } from '../../prisma/dto/workshops-details-status.enum';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateNestedOneWithoutWorkshopDetailsInput } from '../../workshop/dto/workshop-create-nested-one-without-workshop-details.input';

@InputType()
export class WorkshopDetailsCreateInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Workshop name must be a string' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Workshop name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    @Validator.Length(2, 100, { message: 'Workshop name must be between 2 and 100 characters' })
    @Validator.Matches(/^[a-zA-Z0-9\s, \-&$]+$/, { message: 'Workshop name can only contain letters, numbers, spaces and signs like, - & $' })
    workshopName!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 10000, { message: 'Description cannot exceed 10000 characters' })
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Telephone number must be a string' })
    @Validator.Length(8, 12, { message: 'Telephone number must be between 8 and 12 characters' })
    @Validator.Matches(/^\+?[0-9]{8, 12}$/, { message: 'Invalid telephone number format' })
    telephoneNumber?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Logo URL must be a string' })
    @Validator.Length(0, 255, { message: 'Logo URL cannot exceed 255 characters' })
    logoURL?: string;

    @Field(() => WorkshopsDetailsStatus, {nullable:true})
    @Validator.IsEnum(WorkshopsDetailsStatus, { message: 'Invalid workshop status' })
    status?: keyof typeof WorkshopsDetailsStatus;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'NIP must be a string' })
    @Validator.Length(10, 10, { message: 'NIP must be exactly 10 characters' })
    @Validator.Matches(/^[0-9]{10}$/, { message: 'NIP must contain exactly 10 digits' })
    NIP?: string;

    @HideField()
    deletedAt?: Date | string;

    @Field(() => WorkshopCreateNestedOneWithoutWorkshopDetailsInput, {nullable:false})
    @Type(() => WorkshopCreateNestedOneWithoutWorkshopDetailsInput)
    workshop!: WorkshopCreateNestedOneWithoutWorkshopDetailsInput;
}
