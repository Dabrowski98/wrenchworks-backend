import { registerEnumType } from '@nestjs/graphql';

export enum PersonScalarFieldEnum {
    personId = "personId",
    firstName = "firstName",
    lastName = "lastName",
    telephoneNumber = "telephoneNumber",
    deletedAt = "deletedAt"
}


registerEnumType(PersonScalarFieldEnum, { name: 'PersonScalarFieldEnum', description: undefined })
