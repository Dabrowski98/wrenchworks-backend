import { SetMetadata } from '@nestjs/common';
import { Action, UserAuthSubjects } from './user-ability.factory';

export interface RequiredRole {
    action: Action;
    subject: UserAuthSubjects
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRole[]) => SetMetadata(CHECK_ABILITY, requirements);