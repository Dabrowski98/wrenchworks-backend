import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VehicleModelCreateWithoutVehiclesBrandInput } from './vehicle-model-create-without-vehicles-brand.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VehicleModelCreateOrConnectWithoutVehiclesBrandInput } from './vehicle-model-create-or-connect-without-vehicles-brand.input';
import { VehicleModelCreateManyVehiclesBrandInputEnvelope } from './vehicle-model-create-many-vehicles-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VehicleModelWhereUniqueInput } from './vehicle-model-where-unique.input';

@InputType()
export class VehicleModelUncheckedCreateNestedManyWithoutVehiclesBrandInput {

    @Field(() => [VehicleModelCreateWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateWithoutVehiclesBrandInput)
    @ValidateNested()
    create?: Array<VehicleModelCreateWithoutVehiclesBrandInput>;

    @Field(() => [VehicleModelCreateOrConnectWithoutVehiclesBrandInput], {nullable:true})
    @Type(() => VehicleModelCreateOrConnectWithoutVehiclesBrandInput)
    @ValidateNested()
    connectOrCreate?: Array<VehicleModelCreateOrConnectWithoutVehiclesBrandInput>;

    @Field(() => VehicleModelCreateManyVehiclesBrandInputEnvelope, {nullable:true})
    @Type(() => VehicleModelCreateManyVehiclesBrandInputEnvelope)
    @ValidateNested()
    createMany?: VehicleModelCreateManyVehiclesBrandInputEnvelope;

    @Field(() => [VehicleModelWhereUniqueInput], {nullable:true})
    @Type(() => VehicleModelWhereUniqueInput)
    @ValidateNested()
    connect?: Array<Prisma.AtLeast<VehicleModelWhereUniqueInput, 'modelId' | 'modelName_brand'>>;
}
