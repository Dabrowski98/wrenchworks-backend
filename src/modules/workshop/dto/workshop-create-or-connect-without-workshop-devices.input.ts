import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { WorkshopWhereUniqueInput } from './workshop-where-unique.input';
import { Type } from 'class-transformer';
import { WorkshopCreateWithoutWorkshopDevicesInput } from './workshop-create-without-workshop-devices.input';
import { ValidateNested } from 'class-validator';

@InputType()
export class WorkshopCreateOrConnectWithoutWorkshopDevicesInput {

    @Field(() => WorkshopWhereUniqueInput, {nullable:false})
    @Type(() => WorkshopWhereUniqueInput)
    where!: Prisma.AtLeast<WorkshopWhereUniqueInput, 'workshopId' | 'addressId' | 'email'>;

    @Field(() => WorkshopCreateWithoutWorkshopDevicesInput, {nullable:false})
    @Type(() => WorkshopCreateWithoutWorkshopDevicesInput)
    @ValidateNested()
    create!: WorkshopCreateWithoutWorkshopDevicesInput;
}
