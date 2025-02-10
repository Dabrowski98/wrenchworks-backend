import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopCreateWithoutWorkshopDevicesInput } from './workshop-create-without-workshop-devices.input';
import { HideField } from '@nestjs/graphql';
import { WorkshopCreateOrConnectWithoutWorkshopDevicesInput } from './workshop-create-or-connect-without-workshop-devices.input';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateNestedOneWithoutWorkshopDevicesInput {

    @HideField()
    create?: WorkshopCreateWithoutWorkshopDevicesInput;

    @HideField()
    connectOrCreate?: WorkshopCreateOrConnectWithoutWorkshopDevicesInput;

    @Field(() => WorkshopWhereUniqueInput, {nullable:true})
    @Type(() => WorkshopWhereUniqueInput)
    @ValidateNested()
    connect?: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;
}
