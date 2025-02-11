import { PrismaClient, EmployeeStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const DEFAULT_PASSWORD = 'Password123!';

const employees = [
  {
    userId: 4n, // employeeowner1
    workshopId: 1n,
    nickname: 'BOSS',
    login: 'employeeowner1',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 5n, // employeeowner2
    workshopId: 2n,
    nickname: 'BOSS',
    login: 'employeeowner2',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 6n, // employeeowner3
    workshopId: 3n,
    nickname: 'SZEFU',
    login: 'employeeowner3',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 10n, // employee
    workshopId: 1n,
    nickname: 'Endrju',
    login: 'employee1',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 11n, // employee
    workshopId: 1n,
    nickname: 'Endrju',
    login: 'employee2',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 12n, // employee
    workshopId: 2n,
    nickname: 'Endrju',
    login: 'employee3',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 12n, // employee
    workshopId: 1n,
    nickname: 'Dżak',
    login: 'employee4',
    status: EmployeeStatus.ACTIVE,
  },
  {
    userId: 13n, // employee
    workshopId: 3n,
    nickname: 'Bradli',
    login: 'employee5',
    status: EmployeeStatus.ACTIVE,
  },
];

export async function seedEmployees() {
  try {
    let count = 0;

    for (const employee of employees) {
      const existingEmployee = await prisma.employee.findFirst({
        where: {
          AND: [
            { userId: employee.userId },
            { workshopId: employee.workshopId },
          ],
        },
      });

      if (existingEmployee) continue;

      const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

      const createdEmployee = await prisma.employee.create({
        data: {
          login: employee.login,
          password: hashedPassword,
          status: employee.status,
          user: { connect: { userId: employee.userId } },
          workshop: { connect: { workshopId: employee.workshopId } },
        },
      });

      // Determine if the employee is a workshop owner
      const isOwner = employee.login.startsWith('owner');

      // Fetch all permissions
      const allPermissions = await prisma.employeePermission.findMany();

      // Assign permissions
      const permissionsToAssign = isOwner
        ? allPermissions // All permissions for owners
        : allPermissions.slice(0, 5); // A subset for regular employees

      await prisma.employee.update({
        where: { employeeId: createdEmployee.employeeId },
        data: {
          permissions: {
            connect: permissionsToAssign.map((perm) => ({
              permissionId: perm.permissionId,
            })),
          },
        },
      });

      count++;
    }

    console.log('Successfully seeded employees:', count);
  } catch (error) {
    console.error('Error seeding employees:', error);
    throw error;
  }
}
