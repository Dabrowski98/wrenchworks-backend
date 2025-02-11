import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const jobs = [
  // Silnik - Jobs
  {
    name: 'Wymiana oleju silnikowego',
    description: 'Wymiana oleju wraz z filtrem oleju',
    categoryName: 'Silnik benzynowy',
    isPopular: true,
  },
  {
    name: 'Wymiana rozrządu',
    description: 'Kompleksowa wymiana rozrządu',
    categoryName: 'Silnik benzynowy',
    isPopular: true,
  },
  {
    name: 'Wymiana świec zapłonowych',
    description: 'Wymiana kompletu świec zapłonowych',
    categoryName: 'Silnik benzynowy',
    isPopular: true,
  },

  // Silnik diesla - Jobs
  {
    name: 'Regeneracja wtryskiwaczy',
    description: 'Regeneracja wtryskiwaczy diesla',
    categoryName: 'Silnik diesla',
    isPopular: true,
  },
  {
    name: 'Wymiana filtra paliwa',
    description: 'Wymiana filtra paliwa z odpowietrzeniem układu',
    categoryName: 'Silnik diesla',
    isPopular: true,
  },
  {
    name: 'Regeneracja pompy wtryskowej',
    description: 'Regeneracja pompy wysokiego ciśnienia',
    categoryName: 'Silnik diesla',
    isPopular: false,
  },

  // Silnik hybrydowy - Jobs
  {
    name: 'Diagnostyka baterii hybrydowej',
    description: 'Kompleksowa diagnostyka układu hybrydowego',
    categoryName: 'Silnik hybrydowy',
    isPopular: true,
  },
  {
    name: 'Serwis układu hybrydowego',
    description: 'Przegląd i serwis układu hybrydowego',
    categoryName: 'Silnik hybrydowy',
    isPopular: false,
  },

  // Silnik elektryczny - Jobs
  {
    name: 'Diagnostyka napędu elektrycznego',
    description: 'Diagnostyka silnika elektrycznego i układu sterowania',
    categoryName: 'Silnik elektryczny',
    isPopular: true,
  },
  {
    name: 'Serwis baterii trakcyjnej',
    description: 'Przegląd i serwis baterii trakcyjnej',
    categoryName: 'Silnik elektryczny',
    isPopular: false,
  },

  // Skrzynia manualna - Jobs
  {
    name: 'Wymiana sprzęgła',
    description: 'Wymiana kompletu sprzęgła',
    categoryName: 'Skrzynia manualna',
    isPopular: true,
  },
  {
    name: 'Wymiana oleju przekładniowego',
    description: 'Wymiana oleju w skrzyni biegów',
    categoryName: 'Skrzynia manualna',
    isPopular: false,
  },
  {
    name: 'Wymiana koła dwumasowego',
    description: 'Wymiana koła dwumasowego ze sprzęgłem',
    categoryName: 'Skrzynia manualna',
    isPopular: true,
  },

  // Skrzynia automatyczna - Jobs
  {
    name: 'Wymiana oleju w skrzyni automatycznej',
    description: 'Wymiana oleju z płukaniem skrzyni',
    categoryName: 'Skrzynia automatyczna',
    isPopular: true,
  },
  {
    name: 'Naprawa skrzyni automatycznej',
    description: 'Naprawa automatycznej skrzyni biegów',
    categoryName: 'Skrzynia automatyczna',
    isPopular: false,
  },
  {
    name: 'Diagnostyka skrzyni automatycznej',
    description: 'Kompleksowa diagnostyka skrzyni automatycznej',
    categoryName: 'Skrzynia automatyczna',
    isPopular: true,
  },

  // Hamulce przednie - Jobs
  {
    name: 'Wymiana klocków przednich',
    description: 'Wymiana przednich klocków hamulcowych',
    categoryName: 'Hamulce przednie',
    isPopular: true,
  },
  {
    name: 'Wymiana tarcz przednich',
    description: 'Wymiana przednich tarcz hamulcowych z klockami',
    categoryName: 'Hamulce przednie',
    isPopular: true,
  },
  {
    name: 'Wymiana zacisków przednich',
    description: 'Wymiana przednich zacisków hamulcowych',
    categoryName: 'Hamulce przednie',
    isPopular: false,
  },

  // Hamulce tylne - Jobs
  {
    name: 'Wymiana klocków tylnych',
    description: 'Wymiana tylnych klocków hamulcowych',
    categoryName: 'Hamulce tylne',
    isPopular: true,
  },
  {
    name: 'Wymiana tarcz tylnych',
    description: 'Wymiana tylnych tarcz hamulcowych z klockami',
    categoryName: 'Hamulce tylne',
    isPopular: true,
  },
  {
    name: 'Regulacja hamulca ręcznego',
    description: 'Regulacja mechanizmu hamulca postojowego',
    categoryName: 'Hamulce tylne',
    isPopular: false,
  },

  // Zawieszenie przednie - Jobs
  {
    name: 'Wymiana amortyzatorów przednich',
    description: 'Wymiana przednich amortyzatorów',
    categoryName: 'Zawieszenie przednie',
    isPopular: true,
  },
  {
    name: 'Wymiana wahaczy',
    description: 'Wymiana wahaczy przedniego zawieszenia',
    categoryName: 'Zawieszenie przednie',
    isPopular: true,
  },
  {
    name: 'Wymiana łożysk przednich',
    description: 'Wymiana przednich łożysk kół',
    categoryName: 'Zawieszenie przednie',
    isPopular: false,
  },

  // Zawieszenie tylne - Jobs
  {
    name: 'Wymiana amortyzatorów tylnych',
    description: 'Wymiana tylnych amortyzatorów',
    categoryName: 'Zawieszenie tylne',
    isPopular: true,
  },
  {
    name: 'Wymiana sprężyn tylnych',
    description: 'Wymiana tylnych sprężyn zawieszenia',
    categoryName: 'Zawieszenie tylne',
    isPopular: false,
  },

  // Układ kierowniczy - Jobs
  {
    name: 'Wymiana końcówek drążków',
    description: 'Wymiana końcówek drążków kierowniczych',
    categoryName: 'Układ kierowniczy',
    isPopular: true,
  },
  {
    name: 'Wymiana przekładni kierowniczej',
    description: 'Wymiana przekładni kierowniczej',
    categoryName: 'Układ kierowniczy',
    isPopular: false,
  },

  // Elektryka silnika - Jobs
  {
    name: 'Wymiana alternatora',
    description: 'Wymiana lub regeneracja alternatora',
    categoryName: 'Elektryka silnika',
    isPopular: true,
  },
  {
    name: 'Wymiana rozrusznika',
    description: 'Wymiana lub regeneracja rozrusznika',
    categoryName: 'Elektryka silnika',
    isPopular: true,
  },

  // Elektryka wnętrza - Jobs
  {
    name: 'Naprawa centralnego zamka',
    description: 'Naprawa systemu centralnego zamka',
    categoryName: 'Elektryka wnętrza',
    isPopular: false,
  },
  {
    name: 'Naprawa szyb elektrycznych',
    description: 'Naprawa elektrycznych podnośników szyb',
    categoryName: 'Elektryka wnętrza',
    isPopular: false,
  },

  // Systemy elektroniczne - Jobs
  {
    name: 'Diagnostyka czujników',
    description: 'Diagnostyka i wymiana czujników',
    categoryName: 'Systemy elektroniczne',
    isPopular: true,
  },
  {
    name: 'Kalibracja systemów ADAS',
    description: 'Kalibracja systemów wspomagania jazdy',
    categoryName: 'Systemy elektroniczne',
    isPopular: false,
  },

  // Blacharstwo - Jobs
  {
    name: 'Naprawa drobnych wgnieceń',
    description: 'Naprawa wgnieceń metodą PDR',
    categoryName: 'Blacharstwo',
    isPopular: true,
  },
  {
    name: 'Naprawa po kolizji',
    description: 'Naprawa powypadkowa elementów blacharskich',
    categoryName: 'Blacharstwo',
    isPopular: false,
  },

  // Lakiernictwo - Jobs
  {
    name: 'Lakierowanie elementu',
    description: 'Lakierowanie pojedynczego elementu',
    categoryName: 'Lakiernictwo',
    isPopular: true,
  },
  {
    name: 'Polerowanie lakieru',
    description: 'Polerowanie lakieru całego pojazdu',
    categoryName: 'Lakiernictwo',
    isPopular: true,
  },

  // Przegląd serwisowy - Jobs
  {
    name: 'Przegląd okresowy',
    description: 'Standardowy przegląd okresowy',
    categoryName: 'Przegląd serwisowy',
    isPopular: true,
  },
  {
    name: 'Przegląd klimatyzacji',
    description: 'Przegląd układu klimatyzacji',
    categoryName: 'Przegląd serwisowy',
    isPopular: true,
  },

  // Przegląd techniczny - Jobs
  {
    name: 'Przegląd rejestracyjny',
    description: 'Okresowy przegląd techniczny',
    categoryName: 'Przegląd techniczny',
    isPopular: true,
  },
  {
    name: 'Przegląd przedsprzedażowy',
    description: 'Kompleksowy przegląd przed zakupem',
    categoryName: 'Przegląd techniczny',
    isPopular: false,
  },

  // Diagnostyka komputerowa - Jobs
  {
    name: 'Diagnostyka silnika',
    description: 'Komputerowa diagnostyka silnika',
    categoryName: 'Diagnostyka komputerowa',
    isPopular: true,
  },
  {
    name: 'Kasowanie błędów',
    description: 'Kasowanie błędów sterownika',
    categoryName: 'Diagnostyka komputerowa',
    isPopular: true,
  },

  // Diagnostyka mechaniczna - Jobs
  {
    name: 'Diagnostyka zawieszenia',
    description: 'Sprawdzenie stanu zawieszenia',
    categoryName: 'Diagnostyka mechaniczna',
    isPopular: true,
  },
  {
    name: 'Diagnostyka hamulców',
    description: 'Sprawdzenie układu hamulcowego',
    categoryName: 'Diagnostyka mechaniczna',
    isPopular: true,
  },
];

export async function seedJobs() {
  try {
    // Get all categories for reference
    const categories = await prisma.jobCategory.findMany();
    const categoryMap = new Map(
      categories.map((cat) => [cat.name, cat.categoryId]),
    );

    // Prepare jobs with proper categoryId
    const jobsWithCategories = jobs.map((job) => ({
      name: job.name,
      description: job.description,
      isPopular: job.isPopular,
      categoryId: categoryMap.get(job.categoryName)!,
    }));

    // Create all jobs
    const result = await prisma.job.createMany({
      data: jobsWithCategories,
      skipDuplicates: true,
    });

    console.log('Successfully seeded jobs:', result.count);
  } catch (error) {
    console.error('Error seeding jobs:', error);
    throw error;
  }
}

if (require.main === module) {
  seedJobs()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
