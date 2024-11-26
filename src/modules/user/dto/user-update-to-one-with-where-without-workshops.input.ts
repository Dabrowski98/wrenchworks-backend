import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutWorkshopsInput } from './user-update-without-workshops.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutWorkshopsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserUpdateWithoutWorkshopsInput)
    data!: UserUpdateWithoutWorkshopsInput;
}
