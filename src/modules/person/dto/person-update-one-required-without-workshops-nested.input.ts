import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutWorkshopsInput } from './person-create-without-workshops.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutWorkshopsInput } from './person-create-or-connect-without-workshops.input';
import { PersonUpsertWithoutWorkshopsInput } from './person-upsert-without-workshops.input';
import { Prisma } from '@prisma/client';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateToOneWithWhereWithoutWorkshopsInput } from './person-update-to-one-with-where-without-workshops.input';

@InputType()
export class PersonUpdateOneRequiredWithoutWorkshopsNestedInput {

    @Field(() => PersonCreateWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonCreateWithoutWorkshopsInput)
    create?: PersonCreateWithoutWorkshopsInput;

    @Field(() => PersonCreateOrConnectWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutWorkshopsInput)
    connectOrCreate?: PersonCreateOrConnectWithoutWorkshopsInput;

    @Field(() => PersonUpsertWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonUpsertWithoutWorkshopsInput)
    upsert?: PersonUpsertWithoutWorkshopsInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: Prisma.AtLeast<PersonWhereUniqueInput, 'personId'>;

    @Field(() => PersonUpdateToOneWithWhereWithoutWorkshopsInput, {nullable:true})
    @Type(() => PersonUpdateToOneWithWhereWithoutWorkshopsInput)
    update?: PersonUpdateToOneWithWhereWithoutWorkshopsInput;
}
