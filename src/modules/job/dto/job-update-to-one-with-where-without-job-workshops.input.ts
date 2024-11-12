import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { Type } from 'class-transformer';
import { JobUpdateWithoutJobWorkshopsInput } from './job-update-without-job-workshops.input';

@InputType()
export class JobUpdateToOneWithWhereWithoutJobWorkshopsInput {

    @Field(() => JobWhereInput, {nullable:true})
    @Type(() => JobWhereInput)
    where?: JobWhereInput;

    @Field(() => JobUpdateWithoutJobWorkshopsInput, {nullable:false})
    @Type(() => JobUpdateWithoutJobWorkshopsInput)
    data!: JobUpdateWithoutJobWorkshopsInput;
}
