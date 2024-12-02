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
import { CREATE, UPDATE } from 'src/common/constants/validation-groups';

@InputType()
export class WorkshopDetailsCreateWithoutWorkshopInput {

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.IsNumber({}, { message: 'Rating must be a number' })
    @Validator.Min(0, { message: 'Rating cannot be negative' })
    @Validator.Max(5, { message: 'Rating cannot exceed 5' })
    @Validator.IsOptional()
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    @Validator.IsString({ message: 'Workshop name must be a string' })
    @Validator.Length(2, 100, { message: 'Workshop name must be between 2 and 100 characters' })
    @Validator.Matches(/^[a-zA-Z0-9\s, \-&$]+$/, { message: 'Workshop name can only contain letters, numbers, spaces and signs like, - & $' })
    @Validator.IsNotEmpty({groups: [CREATE], message: 'Set name is required' })
    @Validator.IsOptional({groups: [UPDATE]})
    workshopName!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Description must be a string' })
    @Validator.Length(0, 10000, { message: 'Description cannot exceed 10000 characters' })
    @Validator.IsOptional()
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'Logo URL must be a string' })
    @Validator.Length(0, 255, { message: 'Logo URL cannot exceed 255 characters' })
    @Validator.IsOptional()
    logoURL?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString({ message: 'NIP must be a string' })
    @Validator.Length(10, 10, { message: 'NIP must be exactly 10 characters' })
    @Validator.Matches(/^[0-9]{10}$/, { message: 'NIP must contain exactly 10 digits' })
    @Validator.IsOptional()
    NIP?: string;

    }