import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateManyAddressInput } from './person-create-many-address.input';
import { Type } from 'class-transformer';

@InputType()
export class PersonCreateManyAddressInputEnvelope {

    @Field(() => [PersonCreateManyAddressInput], {nullable:false})
    @Type(() => PersonCreateManyAddressInput)
    data!: Array<PersonCreateManyAddressInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
