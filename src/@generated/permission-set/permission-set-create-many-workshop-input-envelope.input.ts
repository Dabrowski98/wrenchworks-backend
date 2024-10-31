import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionSetCreateManyWorkshopInput } from './permission-set-create-many-workshop.input';
import { Type } from 'class-transformer';

@InputType()
export class PermissionSetCreateManyWorkshopInputEnvelope {

    @Field(() => [PermissionSetCreateManyWorkshopInput], {nullable:false})
    @Type(() => PermissionSetCreateManyWorkshopInput)
    data!: Array<PermissionSetCreateManyWorkshopInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
