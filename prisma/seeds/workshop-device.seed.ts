import { PrismaClient, WorkshopDeviceStatus } from '@prisma/client';

const prisma = new PrismaClient();

const workshopDevices = [
  // Workshop 1 Devices
  {
    workshopId: 1n,
    serialNumber: 'DEVICE-1',
    deviceName: 'Front Desk Tablet',
    status: WorkshopDeviceStatus.ENABLED,
    acceptedAt: new Date(),
    acceptedBy: 1n, // Employee ID
  },
  {
    workshopId: 1n,
    serialNumber: 'DEVICE-2',
    deviceName: 'Service Bay Scanner',
    status: WorkshopDeviceStatus.ENABLED,
    acceptedAt: new Date(),
    acceptedBy: 1n,
  },
  // Workshop 2 Devices
  {
    workshopId: 2n,
    serialNumber: 'DEVICE-3',
    deviceName: 'Reception Terminal',
    status: WorkshopDeviceStatus.ENABLED,
    acceptedAt: new Date(),
    acceptedBy: 2n,
  },
  {
    workshopId: 2n,
    serialNumber: 'DEVICE-4',
    deviceName: 'Diagnostic Station',
    status: WorkshopDeviceStatus.ENABLED,
    acceptedAt: new Date(),
    acceptedBy: 2n,
  },
  // Workshop 3 Devices
  {
    workshopId: 3n,
    serialNumber: 'DEVICE-5',
    deviceName: 'Main Counter Device',
    status: WorkshopDeviceStatus.ENABLED,
    acceptedAt: new Date(),
    acceptedBy: 3n,
  },
  {
    workshopId: 3n,
    serialNumber: 'DEVICE-6',
    deviceName: 'Service Area Scanner',
    status: WorkshopDeviceStatus.INACTIVE,
    acceptedAt: new Date(),
    acceptedBy: 8n,
  },
];

export async function seedWorkshopDevices() {
  try {
    let count = 0;

    for (const device of workshopDevices) {
      const existingDevice = await prisma.workshopDevice.findFirst({
        where: {
          workshopId: device.workshopId,
          serialNumber: device.serialNumber,
        },
      });

      if (existingDevice) continue;

      await prisma.workshopDevice.create({
        data: {
          workshop: { connect: { workshopId: device.workshopId } },
          serialNumber: device.serialNumber,
          deviceName: device.deviceName,
          status: device.status,
          acceptedAt: device.acceptedAt,
          acceptedBy: device.acceptedBy,
        },
      });
      count++;
    }

    console.log('Successfully seeded workshop devices:', count);
  } catch (error) {
    console.error('Error seeding workshop devices:', error);
    throw error;
  }
}
