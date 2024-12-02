import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVehiclesInput } from './user-create-without-vehicles.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateOrConnectWithoutVehiclesInput } from './user-create-or-connect-without-vehicles.input';
import { UserUpsertWithoutVehiclesInput } from './user-upsert-without-vehicles.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutVehiclesInput } from './user-update-to-one-with-where-without-vehicles.input';

@InputType()
export class UserUpdateOneWithoutVehiclesNestedInput {

    @Field(() => UserCreateWithoutVehiclesInput, {nullable:true})
    @Type(() => UserCreateWithoutVehiclesInput)
    @ValidateNested()
    create?: UserCreateWithoutVehiclesInput;

    @Field(() => UserCreateOrConnectWithoutVehiclesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVehiclesInput)
    @ValidateNested()
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput;

    @Field(() => UserUpsertWithoutVehiclesInput, {nullable:true})
    @Type(() => UserUpsertWithoutVehiclesInput)
    @ValidateNested()
    upsert?: UserUpsertWithoutVehiclesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'email' | 'addressId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutVehiclesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVehiclesInput)
    @ValidateNested()
    update?: UserUpdateToOneWithWhereWithoutVehiclesInput;
}
