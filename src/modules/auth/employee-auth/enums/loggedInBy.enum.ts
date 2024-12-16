import { registerEnumType } from '@nestjs/graphql';

export enum LoggedInBy {
  WORKSHOP = "WORKSHOP",
  USER = "USER"
}

registerEnumType(LoggedInBy, { name: 'LoggedInBy', description: "Way in which employee logged in" })

