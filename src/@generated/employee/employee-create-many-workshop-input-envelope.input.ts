import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateManyWorkshopInput } from './employee-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class EmployeeCreateManyWorkshopInputEnvelope {

    @Field(() => [EmployeeCreateManyWorkshopInput], {nullable:false})
    @Type(() => EmployeeCreateManyWorkshopInput)
    data!: Array<EmployeeCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
