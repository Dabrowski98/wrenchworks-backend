import { Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql/language';

@Scalar('BigInt', () => BigInt )
export class BigIntScalar {
  description = 'BigInt custom scalar type';

  parseValue(value: string): bigint {
    return BigInt(value);
  }

  serialize(value: bigint): string {
    return value.toString();
  }

  parseLiteral(ast: any): bigint {
    if (ast.kind === Kind.INT) {
      return BigInt(ast.value);
    }
    return null;
  }
}
