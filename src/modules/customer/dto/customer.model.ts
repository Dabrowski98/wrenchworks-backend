import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { CustomerCreationSource } from '../../prisma/dto/customer-creation-source.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Service } from '../../service/dto/service.model';
import { Type } from 'class-transformer';
import { Guest } from '../../guest/dto/guest.model';
import { User } from '../../user/dto/user.model';
import { Vehicle } from '../../vehicle/dto/vehicle.model';
import { Workshop } from '../../workshop/dto/workshop.model';
import { CustomerCount } from './customer-count.output';

@ObjectType()
export class Customer {

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    customerId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:false})
    workshopId!: bigint;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    userId!: bigint | null;

    @Field(() => Scalars.GraphQLBigInt, {nullable:true})
    guestId!: bigint | null;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    /**
     * Note: Fill this field in Service layer.
     */
    @Field(() => CustomerCreationSource, {nullable:false,description:'Note: Fill this field in Service layer.'})
    creationSource!: keyof typeof CustomerCreationSource;

    @Field(() => String, {nullable:true})
    telephoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isVerified!: boolean;

    /**
     * Note: Optional because it defaults to 0.00
     */
    @Field(() => GraphQLDecimal, {nullable:false,defaultValue:0,description:'Note: Optional because it defaults to 0.00'})
    totalDue!: Decimal;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    NIP!: string | null;

    @Field(() => String, {nullable:true})
    companyName!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => String, {nullable:true})
    createdBy!: bigint | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    updatedBy!: bigint | null;

    @Field(() => [Service], {nullable:true})
    @Type(() => Service)
    services?: Array<Service>;

    @Field(() => Guest, {nullable:true})
    guest?: Guest | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Vehicle], {nullable:true})
    @Type(() => Vehicle)
    vehicles?: Array<Vehicle>;

    @Field(() => Workshop, {nullable:false})
    @Type(() => Workshop)
    workshop?: Workshop;

    @Field(() => CustomerCount, {nullable:false})
    _count?: CustomerCount;
}
