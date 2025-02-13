import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVehiclesInput } from './user-create-without-vehicles.input';
import { HideField } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutVehiclesInput } from './user-create-or-connect-without-vehicles.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class UserCreateNestedOneWithoutVehiclesInput {

    @HideField()
    create?: UserCreateWithoutVehiclesInput;

    @HideField()
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'userId' | 'username' | 'email'>;
}
