import { registerEnumType } from '@nestjs/graphql';

export enum CustomerCreationSource {
    GUEST = "GUEST",
    WORKSHOP = "WORKSHOP",
    USER = "USER"
}


registerEnumType(CustomerCreationSource, { name: 'CustomerCreationSource', description: undefined })
