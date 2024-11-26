import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutWorkshopsInput } from './user-update-without-workshops.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { UserCreateWithoutWorkshopsInput } from './user-create-without-workshops.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutWorkshopsInput {

    @Field(() => UserUpdateWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserUpdateWithoutWorkshopsInput)
    @ValidateNested()
    update!: UserUpdateWithoutWorkshopsInput;

    @Field(() => UserCreateWithoutWorkshopsInput, {nullable:false})
    @Type(() => UserCreateWithoutWorkshopsInput)
    @ValidateNested()
    create!: UserCreateWithoutWorkshopsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
