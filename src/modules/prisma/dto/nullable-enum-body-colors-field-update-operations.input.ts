import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BodyColors } from './body-colors.enum';

@InputType()
export class NullableEnumBodyColorsFieldUpdateOperationsInput {

    @Field(() => BodyColors, {nullable:true})
    set?: keyof typeof BodyColors;
}
