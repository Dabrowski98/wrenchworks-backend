import { registerEnumType } from '@nestjs/graphql';

export enum BodyColors {
    black = "black",
    white = "white",
    red = "red",
    blue = "blue",
    silver = "silver",
    gray = "gray",
    green = "green",
    yellow = "yellow",
    brown = "brown",
    other = "other"
}


registerEnumType(BodyColors, { name: 'BodyColors', description: undefined })
