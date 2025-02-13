import { registerEnumType } from '@nestjs/graphql';

export enum BodyColor {
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


registerEnumType(BodyColor, { name: 'BodyColor', description: "Vehicle body colors" })
