import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { Workshop } from '../../workshop/dto/workshop.model';
import { Type } from 'class-transformer';

/**
 * Address model represents an Address entity that holds location details such as country, region, city, and street.
 * It is used to link physical addresses to workshops and other entities requiring location information.
 */
@ObjectType({description:'Address model represents an Address entity that holds location details such as country, region, city, and street.\nIt is used to link physical addresses to workshops and other entities requiring location information.'})
export class Address {

    /**
     * Unique identifier for the address
     */
    @Field(() => Scalars.GraphQLBigInt, {nullable:false,description:'Unique identifier for the address'})
    addressId!: bigint;

    /**
     * Country name where the address is located
     */
    @Field(() => String, {nullable:false,description:'Country name where the address is located'})
    country!: string;

    /**
     * Region or state within the country
     */
    @Field(() => String, {nullable:false,description:'Region or state within the country'})
    region!: string;

    /**
     * City or town name
     */
    @Field(() => String, {nullable:false,description:'City or town name'})
    city!: string;

    /**
     * Street name or road identifier
     */
    @Field(() => String, {nullable:true,description:'Street name or road identifier'})
    street!: string | null;

    /**
     * Building number or identifier
     */
    @Field(() => String, {nullable:false,description:'Building number or identifier'})
    buildingNo!: string;

    /**
     * Apartment or flat number within the building
     */
    @Field(() => String, {nullable:true,description:'Apartment or flat number within the building'})
    flatNo!: string | null;

    /**
     * Postal or ZIP code for the address
     */
    @Field(() => String, {nullable:false,description:'Postal or ZIP code for the address'})
    postCode!: string;

    /**
     * Reference to the associated workshop
     */
    @Field(() => Workshop, {nullable:true,description:'Reference to the associated workshop'})
    @Type(() => Workshop)
    workshop?: Workshop | null;
}
