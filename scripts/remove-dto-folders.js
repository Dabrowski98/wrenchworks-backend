const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '..', 'src', 'modules');

const modulesToDeleteDto = [
  'address',
  'customer',
  'employee',
  'guest',
  'job',
  'job-category',
  'join-workshop-request',
  'permission-set',
  'review',
  'review-response',
  'service',
  'service-request',
  'session-data',
  'task',
  'prisma',
  'user',
  'user-report',
  'vehicle',
  'vehicle-brand',
  'vehicle-details',
  'vehicle-model',
  'workshop',
  'workshop-details',
  'workshop-job'
];

function removeDtoFromSpecifiedModules(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, modules) => {
    if (err) {
      console.error(
        `Error reading modules directory ${directory}: ${err.message}`,
      );
      return;
    }

    modules.forEach((module) => {
      if (module.isDirectory()) {
        const moduleName = module.name;
        if (modulesToDeleteDto.includes(moduleName)) {
          const dtoPath = path.join(directory, moduleName, 'dto');

          fs.access(dtoPath, fs.constants.F_OK, (accessErr) => {
            if (accessErr) {
              console.warn(
                `'dto' folder does not exist in module: ${moduleName}`,
              );
              return;
            }

            fs.rm(dtoPath, { recursive: true, force: true }, (rmErr) => {
              if (rmErr) {
                console.error(
                  `Error deleting 'dto' folder in module ${moduleName}: ${rmErr.message}`,
                );
              } else {
                console.log(`Deleted 'dto' folder in module: ${moduleName}`);
              }
            });
          });
        } else {
          console.log(`Skipped module: ${moduleName}`);
        }
      }
    });
  });
}

removeDtoFromSpecifiedModules(modulesDir);
