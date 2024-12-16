import { UseGuards } from "@nestjs/common";

import { applyDecorators } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "src/modules/auth/common-guards/roles.guard";
import { UserRole } from "src/modules/prisma";

export function AuthRoles(...roles: UserRole[]) {
    return applyDecorators(
        Roles(...roles),
        UseGuards(RolesGuard)
    )
}