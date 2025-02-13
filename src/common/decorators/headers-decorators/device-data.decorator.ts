
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const DeviceData = createParamDecorator(
  (data: unknown, context: ExecutionContext): DeviceData => {
    const ctx = GqlExecutionContext.create(context);
    const deviceId = ctx.getContext().req.headers['device-id'] || `default`;
    const deviceInfo = ctx.getContext().req.headers['device-info'] || 'default';
    const ipAddress = ctx.getContext().req.ip || 'default';
    const deviceSerialNumber = ctx.getContext().req.headers['device-serial-number'] || undefined;
    return { deviceId, deviceInfo, ipAddress, deviceSerialNumber } as DeviceData;
  },
);

export interface DeviceData {
  deviceId: string;
  deviceInfo: string;
  ipAddress: string;
  deviceSerialNumber: string | undefined;
}
