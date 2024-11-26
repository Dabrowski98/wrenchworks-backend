import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleCreateWithoutGuestInput } from './vehicle-create-without-guest.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleCreateOrConnectWithoutGuestInput } from './vehicle-create-or-connect-without-guest.input';
import { VehicleUpsertWithoutGuestInput } from './vehicle-upsert-without-guest.input';
import { VehicleWhereInput } from './vehicle-where.input';
import { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInput } from './vehicle-where-unique.input';
import { VehicleUpdateToOneWithWhereWithoutGuestInput } from './vehicle-update-to-one-with-where-without-guest.input';

@InputType()
export class VehicleUpdateOneWithoutGuestNestedInput {

    @Field(() => VehicleCreateWithoutGuestInput, {nullable:true})
    @Type(() => VehicleCreateWithoutGuestInput)
    @ValidateNested()
    create?: VehicleCreateWithoutGuestInput;

    @Field(() => VehicleCreateOrConnectWithoutGuestInput, {nullable:true})
    @Type(() => VehicleCreateOrConnectWithoutGuestInput)
    @ValidateNested()
    connectOrCreate?: VehicleCreateOrConnectWithoutGuestInput;

    @Field(() => VehicleUpsertWithoutGuestInput, {nullable:true})
    @Type(() => VehicleUpsertWithoutGuestInput)
    @ValidateNested()
    upsert?: VehicleUpsertWithoutGuestInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    @ValidateNested()
    disconnect?: VehicleWhereInput;

    @Field(() => VehicleWhereInput, {nullable:true})
    @Type(() => VehicleWhereInput)
    @ValidateNested()
    delete?: VehicleWhereInput;

    @Field(() => VehicleWhereUniqueInput, {nullable:true})
    @Type(() => VehicleWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<VehicleWhereUniqueInput, 'vehicleId' | 'guestId'>;

    @Field(() => VehicleUpdateToOneWithWhereWithoutGuestInput, {nullable:true})
    @Type(() => VehicleUpdateToOneWithWhereWithoutGuestInput)
    @ValidateNested()
    update?: VehicleUpdateToOneWithWhereWithoutGuestInput;
}
