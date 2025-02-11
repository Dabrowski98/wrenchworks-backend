import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const jobCategories = [
  // Główne kategorie
  {
    name: 'Silnik',
    description: 'Usługi związane z silnikiem',
    isPopular: true,
  },
  {
    name: 'Skrzynia biegów',
    description: 'Usługi związane ze skrzynią biegów',
    isPopular: true,
  },
  {
    name: 'Hamulce',
    description: 'Usługi układu hamulcowego',
    isPopular: true,
  },
  {
    name: 'Zawieszenie',
    description: 'Usługi zawieszenia i układu kierowniczego',
    isPopular: true,
  },
  {
    name: 'Elektryka',
    description: 'Usługi instalacji elektrycznej',
    isPopular: false,
  },
  {
    name: 'Nadwozie',
    description: 'Usługi blacharskie i kosmetyczne',
    isPopular: false,
  },
  {
    name: 'Detailing',
    description: 'Usługi Detailingowe',
    isPopular: true,
  },
  {
    name: 'Przeglądy',
    description: 'Regularne przeglądy i konserwacja',
    isPopular: true,
  },

  {
    name: 'Klimatyzacja',
    description: 'Serwis układu klimatyzacji',
    isPopular: true,
  },
  {
    name: 'Układ wydechowy',
    description: 'Serwis układu wydechowego',
    isPopular: false,
  },
  {
    name: 'Układ paliwowy',
    description: 'Serwis układu paliwowego',
    isPopular: false,
  },
  {
    name: 'Układ chłodzenia',
    description: 'Serwis układu chłodzenia',
    isPopular: false,
  },
  { name: 'Diagnostyka', description: 'Usługi diagnostyczne', isPopular: true },
  { name: 'Koła i opony', description: 'Serwis kół i opon', isPopular: true },
  { name: 'Szyby', description: 'Usługi związane z szybami', isPopular: false },

  // Podkategorie - Silnik
  {
    name: 'Silnik benzynowy',
    description: 'Serwis silników benzynowych',
    parentName: 'Silnik',
    isPopular: false,
  },
  {
    name: 'Silnik diesla',
    description: 'Serwis silników diesla',
    parentName: 'Silnik',
    isPopular: false,
  },
  {
    name: 'Silnik hybrydowy',
    description: 'Serwis układów hybrydowych',
    parentName: 'Silnik',
    isPopular: false,
  },
  {
    name: 'Silnik elektryczny',
    description: 'Serwis silników elektrycznych',
    parentName: 'Silnik',
    isPopular: false,
  },

  // Podkategorie - Skrzynia biegów
  {
    name: 'Skrzynia manualna',
    description: 'Serwis skrzyni manualnej',
    parentName: 'Skrzynia biegów',
    isPopular: false,
  },
  {
    name: 'Skrzynia automatyczna',
    description: 'Serwis skrzyni automatycznej',
    parentName: 'Skrzynia biegów',
    isPopular: false,
  },

  // Podkategorie - Hamulce
  {
    name: 'Hamulce przednie',
    description: 'Serwis hamulców przednich',
    parentName: 'Hamulce',
    isPopular: true,
  },
  {
    name: 'Hamulce tylne',
    description: 'Serwis hamulców tylnych',
    parentName: 'Hamulce',
    isPopular: true,
  },

  // Podkategorie - Zawieszenie
  {
    name: 'Zawieszenie przednie',
    description: 'Serwis zawieszenia przedniego',
    parentName: 'Zawieszenie',
    isPopular: true,
  },
  {
    name: 'Zawieszenie tylne',
    description: 'Serwis zawieszenia tylnego',
    parentName: 'Zawieszenie',
    isPopular: true,
  },
  {
    name: 'Układ kierowniczy',
    description: 'Serwis układu kierowniczego',
    parentName: 'Zawieszenie',
    isPopular: true,
  },

  // Podkategorie - Elektryka
  {
    name: 'Elektryka silnika',
    description: 'Serwis elektryki silnika',
    parentName: 'Elektryka',
    isPopular: false,
  },
  {
    name: 'Elektryka wnętrza',
    description: 'Serwis elektryki wnętrza',
    parentName: 'Elektryka',
    isPopular: false,
  },
  {
    name: 'Systemy elektroniczne',
    description: 'Serwis systemów elektronicznych',
    parentName: 'Elektryka',
    isPopular: false,
  },

  // Podkategorie - Nadwozie
  {
    name: 'Blacharstwo',
    description: 'Naprawy blacharskie',
    parentName: 'Nadwozie',
    isPopular: false,
  },
  {
    name: 'Lakiernictwo',
    description: 'Usługi lakiernicze',
    parentName: 'Nadwozie',
    isPopular: false,
  },

  // Podkategorie - Detailing
  {
    name: 'Detailing wnętrza',
    description: 'Usługi Detailingowe wnętrza',
    parentName: 'Detailing',
    isPopular: true,
  },
  {
    name: 'Detailing zewnętrzny',
    description: 'Usługi Detailingowe zewnętrzny',
    parentName: 'Detailing',
    isPopular: true,
  },

  // Podkategorie - Przeglądy
  {
    name: 'Przegląd serwisowy',
    description: 'Przeglądy serwisowe',
    parentName: 'Przeglądy',
    isPopular: true,
  },
  {
    name: 'Przegląd techniczny',
    description: 'Przeglądy techniczne',
    parentName: 'Przeglądy',
    isPopular: true,
  },

  // Podkategorie - Diagnostyka
  {
    name: 'Diagnostyka komputerowa',
    description: 'Diagnostyka elektroniki',
    parentName: 'Diagnostyka',
    isPopular: true,
  },
  {
    name: 'Diagnostyka mechaniczna',
    description: 'Diagnostyka mechaniczna',
    parentName: 'Diagnostyka',
    isPopular: true,
  },

  // Podkategorie - Koła i opony
  {
    name: 'Felgi',
    description: 'Serwis felg',
    parentName: 'Koła i opony',
    isPopular: true,
  },
  {
    name: 'Opony',
    description: 'Serwis opon',
    parentName: 'Koła i opony',
    isPopular: true,
  },
];

export async function seedJobCategories() {
  try {
    // First, create main categories
    const mainCategories = jobCategories.filter((cat) => !cat.parentName);
    await prisma.jobCategory.createMany({
      data: mainCategories,
      skipDuplicates: true,
    });

    // Get all created categories
    const createdCategories = await prisma.jobCategory.findMany();
    const categoryMap = new Map(
      createdCategories.map((cat) => [cat.name, cat.categoryId]),
    );

    // Prepare subcategories with parentId
    const subCategories = jobCategories
      .filter((cat) => cat.parentName)
      .map(({ parentName, ...subCat }) => ({
        ...subCat,
        parentId: categoryMap.get(parentName),
      }));

    // Create all subcategories at once
    const result =await prisma.jobCategory.createMany({
      data: subCategories,
      skipDuplicates: true,
    });

    console.log('Successfully seeded job categories', result.count);
  } catch (error) {
    console.error('Error seeding job categories:', error);
    throw error;
  }
}

if (require.main === module) {
  seedJobCategories()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
