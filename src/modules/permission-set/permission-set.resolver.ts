import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PermissionSetService } from './permission-set.service';
import { PermissionSet } from './entities/permission-set.entity';
import { CreatePermissionSetInput, UpdatePermissionSetInput } from './dto';

@Resolver(() => PermissionSet)
export class PermissionSetResolver {
  constructor(private readonly permissionSetService: PermissionSetService) {}

  @Mutation(() => PermissionSet)
  async createPermissionSet(@Args('data') data: CreatePermissionSetInput) {
    return this.permissionSetService.createPermissionSet(data);
  }

  @Mutation(() => PermissionSet)
  async updatePermissionSet(@Args('data') data: UpdatePermissionSetInput) {
    return this.permissionSetService.updatePermissionSet(data);
  }

  @Query(() => [PermissionSet])
  async permissionSets() {
    return this.permissionSetService.findAllPermissionSets();
  }

  @Query(() => PermissionSet, { nullable: true })
  async permissionSet(@Args('permissionSetId', { type: () => BigInt }) permissionSetId: bigint) {
    return this.permissionSetService.findPermissionSetById(permissionSetId);
  }

  @Mutation(() => PermissionSet)
  async deletePermissionSet(@Args('permissionSetId', { type: () => BigInt }) permissionSetId: bigint) {
    return this.permissionSetService.deletePermissionSet(permissionSetId);
  }
}
