import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceUpdateManyMutationInput } from './service-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ServiceWhereInput } from './service-where.input';

@ArgsType()
export class UpdateManyServiceArgs {

    @Field(() => ServiceUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceUpdateManyMutationInput)
    @ValidateNested()
    data!: ServiceUpdateManyMutationInput;

    @Field(() => ServiceWhereInput, {nullable:true})
    @Type(() => ServiceWhereInput)
    where?: ServiceWhereInput;
}
