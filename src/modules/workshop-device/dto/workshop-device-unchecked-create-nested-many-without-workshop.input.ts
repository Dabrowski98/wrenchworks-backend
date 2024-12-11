import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkshopDeviceCreateWithoutWorkshopInput } from './workshop-device-create-without-workshop.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { WorkshopDeviceCreateOrConnectWithoutWorkshopInput } from './workshop-device-create-or-connect-without-workshop.input';
import { WorkshopDeviceCreateManyWorkshopInputEnvelope } from './workshop-device-create-many-workshop-input-envelope.input';
import { Prisma } from '@prisma/client';
import { WorkshopDeviceWhereUniqueInput } from './workshop-device-where-unique.input';

@InputType()
export class WorkshopDeviceUncheckedCreateNestedManyWithoutWorkshopInput {

    @Field(() => [WorkshopDeviceCreateWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceCreateWithoutWorkshopInput)
    @ValidateNested()
    create?: Array<WorkshopDeviceCreateWithoutWorkshopInput>;

    @Field(() => [WorkshopDeviceCreateOrConnectWithoutWorkshopInput], {nullable:true})
    @Type(() => WorkshopDeviceCreateOrConnectWithoutWorkshopInput)
    @ValidateNested()
    connectOrCreate?: Array<WorkshopDeviceCreateOrConnectWithoutWorkshopInput>;

    @Field(() => WorkshopDeviceCreateManyWorkshopInputEnvelope, {nullable:true})
    @Type(() => WorkshopDeviceCreateManyWorkshopInputEnvelope)
    @ValidateNested()
    createMany?: WorkshopDeviceCreateManyWorkshopInputEnvelope;

    @Field(() => [WorkshopDeviceWhereUniqueInput], {nullable:true})
    @Type(() => WorkshopDeviceWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<WorkshopDeviceWhereUniqueInput, 'workshopDeviceId' | 'workshopId_serialNumber'>>;
}
