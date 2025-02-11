import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addresses = [
  {
    country: 'Poland',
    region: 'Mazowieckie',
    city: 'Warsaw',
    street: 'Marszałkowska',
    buildingNo: '126',
    flatNo: '4',
    postCode: '00-008',
  },
  {
    country: 'Poland',
    region: 'Małopolskie',
    city: 'Kraków',
    street: 'Floriańska',
    buildingNo: '45',
    postCode: '31-019',
  },
  {
    country: 'Poland',
    region: 'Pomorskie',
    city: 'Gdańsk',
    street: 'Długa',
    buildingNo: '23A',
    flatNo: '12',
    postCode: '80-827',
  },
  {
    country: 'Poland',
    region: 'Dolnośląskie',
    city: 'Wrocław',
    street: 'Rynek',
    buildingNo: '14',
    postCode: '50-001',
  },
  {
    country: 'Poland',
    region: 'Wielkopolskie',
    city: 'Poznań',
    street: 'Święty Marcin',
    buildingNo: '80',
    flatNo: '3B',
    postCode: '61-809',
  },
  {
    country: 'Poland',
    region: 'Łódzkie',
    city: 'Łódź',
    street: 'Piotrkowska',
    buildingNo: '104',
    postCode: '90-926',
  },
  {
    country: 'Poland',
    region: 'Mazowieckie',
    city: 'Warsaw',
    street: 'Aleje Jerozolimskie',
    buildingNo: '56',
    flatNo: '15',
    postCode: '00-803',
  },
  {
    country: 'Poland',
    region: 'Śląskie',
    city: 'Katowice',
    street: 'Mariacka',
    buildingNo: '10',
    postCode: '40-001',
  },
  {
    country: 'Poland',
    region: 'Zachodniopomorskie',
    city: 'Szczecin',
    street: 'Wały Chrobrego',
    buildingNo: '3',
    flatNo: '7',
    postCode: '70-502',
  },
  {
    country: 'Poland',
    region: 'Małopolskie',
    city: 'Kraków',
    street: 'Grodzka',
    buildingNo: '22',
    flatNo: '1A',
    postCode: '31-044',
  },
  {
    country: 'Poland',
    region: 'Lubelskie',
    city: 'Lublin',
    street: 'Krakowskie Przedmieście',
    buildingNo: '15',
    postCode: '20-002',
  },
  {
    country: 'Poland',
    region: 'Podkarpackie',
    city: 'Rzeszów',
    street: '3 Maja',
    buildingNo: '13',
    flatNo: '22',
    postCode: '35-030',
  },
  {
    country: 'Poland',
    region: 'Kujawsko-Pomorskie',
    city: 'Bydgoszcz',
    street: 'Gdańska',
    buildingNo: '33',
    postCode: '85-005',
  },
  {
    country: 'Poland',
    region: 'Warmińsko-Mazurskie',
    city: 'Olsztyn',
    street: 'Dąbrowszczaków',
    buildingNo: '5',
    flatNo: '11',
    postCode: '10-538',
  },
  {
    country: 'Poland',
    region: 'Podlaskie',
    city: 'Białystok',
    street: 'Lipowa',
    buildingNo: '28',
    flatNo: '4C',
    postCode: '15-427',
  },
];

export async function seedAddresses() {
  try {
    const result = await prisma.address.createMany({
      data: addresses,
      skipDuplicates: true,
    });

    console.log('Successfully seeded addresses:', result.count);
  } catch (error) {
    console.error('Error seeding addresses:', error);
    throw error;
  }
}

if (require.main === module) {
  seedAddresses()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
