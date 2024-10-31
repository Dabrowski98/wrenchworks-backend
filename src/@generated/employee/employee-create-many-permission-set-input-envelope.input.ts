import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyPermissionSetInput } from './employee-create-many-permission-set.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyPermissionSetInputEnvelope {

    @Field(() => [EmployeeCreateManyPermissionSetInput], {nullable:false})
    @Type(() => EmployeeCreateManyPermissionSetInput)
    data!: Array<EmployeeCreateManyPermissionSetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
