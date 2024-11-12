import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyEmployeeInput } from './service-create-many-employee.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyEmployeeInputEnvelope {

    @Field(() => [ServiceCreateManyEmployeeInput], {nullable:false})
    @Type(() => ServiceCreateManyEmployeeInput)
    data!: Array<ServiceCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
