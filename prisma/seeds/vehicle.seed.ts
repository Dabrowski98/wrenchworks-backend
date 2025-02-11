import { BodyColor, FuelType, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const vehicles = [
  // Super Admin's vehicle
  {
    userId: 1n,
    modelId: 36n,
    details: {
      yearOfProduction: 2020,
      VIN: 'WBAPK53559A123456',
      engineCapacity: '3.0L',
      licensePlate: 'WA123456',
      fuelType: FuelType.PETROL,
      engineNo: 'N55B30A123456',
      bodyColor: BodyColor.BLACK,
      countryOfRegistration: 'PL',
    },
  },
  // Admin's vehicle
  {
    userId: 2n,
    modelId: 82n,
    details: {
      yearOfProduction: 2021,
      VIN: 'WDDWF4KB2FR123456',
      engineCapacity: '4.0L',
      licensePlate: 'WA234567',
      fuelType: FuelType.PETROL,
      engineNo: 'M177E40123456',
      bodyColor: BodyColor.SILVER,
      countryOfRegistration: 'PL',
    },
  },
  // Moderator's vehicle
  {
    userId: 3n,
    modelId: 190n,
    details: {
      yearOfProduction: 2022,
      VIN: 'WAUZZZ4G5NN123456',
      engineCapacity: '12.0L',
      licensePlate: 'WA345678',
      fuelType: FuelType.PETROL,
      engineNo: 'DJPB123456',
      bodyColor: BodyColor.BLUE,
      countryOfRegistration: 'PL',
    },
  },
  // Workshop Owner 1's vehicles
  {
    userId: 4n,
    modelId: 1237n,
    details: {
      yearOfProduction: 2021,
      VIN: 'JT153JMA2N0123456',
      engineCapacity: '3.0L',
      licensePlate: 'WA456789',
      fuelType: FuelType.PETROL,
      engineNo: 'B58B30123456',
      bodyColor: BodyColor.RED,
      countryOfRegistration: 'PL',
    },
  },
  // Workshop Owner 2's vehicles
  {
    userId: 5n,
    modelId: 444n,
    details: {
      yearOfProduction: 2023,
      VIN: 'WP0ZZZ99ZTS123456',
      engineCapacity: '3.8L',
      licensePlate: 'WA567890',
      fuelType: FuelType.PETROL,
      engineNo: 'MA1123456',
      bodyColor: BodyColor.YELLOW,
      countryOfRegistration: 'PL',
    },
  },
  // Workshop Owner 3's vehicles
  {
    userId: 6n,
    modelId: 720n,
    details: {
      yearOfProduction: 2023,
      VIN: '5YJSA1E47JF123456',
      engineCapacity: 'N/A',
      licensePlate: 'WA678901',
      fuelType: FuelType.ELECTRIC,
      engineNo: '1234567',
      bodyColor: BodyColor.WHITE,
      countryOfRegistration: 'PL',
    },
  },
  // Customer vehicles
  {
    userId: 7n,
    modelId: 112n,
    details: {
      yearOfProduction: 2019,
      VIN: 'WVWZZZ1KZAW123456',
      engineCapacity: '2.0L',
      licensePlate: 'WA789012',
      fuelType: FuelType.DIESEL,
      engineNo: 'DFGA123456',
      bodyColor: BodyColor.GREEN,
      countryOfRegistration: 'PL',
    },
  },
  {
    modelId: 113n,
    customerId: 2n,
    details: {
      yearOfProduction: 2019,
      VIN: 'WVWZZZ1KZAW123456',
      engineCapacity: '2.0L',
      licensePlate: 'WA789012',
      fuelType: FuelType.PETROL,
      engineNo: 'CJSA123456',
      bodyColor: BodyColor.GRAY,
      countryOfRegistration: 'PL',
    },
  },
  // Guest vehicles (no userId)
  {
    modelId: 223n,
    details: {
      yearOfProduction: 2018,
      VIN: 'TMBEG7NE8J0123456',
      engineCapacity: '1.8L',
      licensePlate: 'WA890123',
      fuelType: FuelType.PETROL,
      engineNo: 'CJSA123456',
      bodyColor: BodyColor.GRAY,
      countryOfRegistration: 'PL',
    },
  },
  {
    modelId: 154n,
    details: {
      yearOfProduction: 2017,
      VIN: 'VSSZZZ5FZJR123456',
      engineCapacity: '2.0L',
      licensePlate: 'WA901234',
      fuelType: FuelType.DIESEL,
      engineNo: 'CUPA123456',
      bodyColor: BodyColor.BLACK,
      countryOfRegistration: 'PL',
    },
  },
];

export async function seedVehicles() {
  try {
    let count = 0;

    for (const vehicle of vehicles) {
      if (
        await prisma.vehicle.findFirst({
          where: {
            OR: [
              { userId: vehicle.userId },
              { customers: { some: { customerId: vehicle.customerId } } },
            ],
          },
        })
      ) {
        continue;
      }

      await prisma.vehicle.create({
        data: {
          userId: vehicle.userId,
          modelId: vehicle.modelId,
          vehicleDetails: {
            create: vehicle.details,
          },
        },
      });
      count++;
    }

    console.log('Successfully seeded vehicles:', count);
  } catch (error) {
    console.error('Error seeding vehicles:', error);
    throw error;
  }
}
