import { registerEnumType } from '@nestjs/graphql';

export enum BodyColors {
    BLACK = "BLACK",
    WHITE = "WHITE",
    RED = "RED",
    BLUE = "BLUE",
    SILVER = "SILVER",
    GRAY = "GRAY",
    GREEN = "GREEN",
    YELLOW = "YELLOW",
    BROWN = "BROWN",
    OTHER = "OTHER"
}


registerEnumType(BodyColors, { name: 'BodyColors', description: undefined })
