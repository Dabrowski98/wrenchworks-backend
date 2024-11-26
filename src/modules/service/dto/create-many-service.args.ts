import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceCreateManyInput } from './service-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyServiceArgs {

    @Field(() => [ServiceCreateManyInput], {nullable:false})
    @Type(() => ServiceCreateManyInput)
    @ValidateNested()
    data!: Array<ServiceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
