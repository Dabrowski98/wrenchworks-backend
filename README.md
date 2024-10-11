<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

```
wrenchworks-backend
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-cd0d226bef7ebda15b0e2c872097a3098e3243b2.idx
│  │     ├─ pack-cd0d226bef7ebda15b0e2c872097a3098e3243b2.pack
│  │     └─ pack-cd0d226bef7ebda15b0e2c872097a3098e3243b2.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ package-lock.json
├─ package.json
├─ prisma
│  ├─ migrations
│  │  ├─ 20240625222405_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ README.md
├─ src
│  ├─ app.module.ts
│  ├─ common
│  │  ├─ helper
│  │  │  ├─ bcrypt.ts
│  │  │  └─ softdeletion.ts
│  │  ├─ scalars
│  │  │  └─ bigint.scalar.ts
│  │  └─ utils
│  │     └─ defineBigInt.ts
│  ├─ database
│  │  ├─ database.module.ts
│  │  └─ database.service.ts
│  ├─ main.ts
│  ├─ metadata.ts
│  ├─ modules
│  │  ├─ address
│  │  │  ├─ address.module.ts
│  │  │  ├─ address.resolver.ts
│  │  │  ├─ address.service.ts
│  │  │  ├─ dto
│  │  │  │  ├─ create-address.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-address.input.ts
│  │  │  └─ entities
│  │  │     └─ address.entity.ts
│  │  ├─ address-person
│  │  │  ├─ address-person.module.ts
│  │  │  ├─ address-person.resolver.ts
│  │  │  ├─ address-person.service.ts
│  │  │  └─ entities
│  │  │     └─ address-person.entity.ts
│  │  ├─ address-workshop
│  │  │  ├─ address-workshop.module.ts
│  │  │  ├─ address-workshop.resolver.ts
│  │  │  ├─ address-workshop.service.ts
│  │  │  └─ entities
│  │  │     └─ address-workshop.entity.ts
│  │  ├─ auth
│  │  │  ├─ auth.module.ts
│  │  │  ├─ dto
│  │  │  │  ├─ login.dto.ts
│  │  │  │  ├─ token.dto.ts
│  │  │  │  └─ user-response.dto.ts
│  │  │  ├─ entities
│  │  │  │  ├─ index.ts
│  │  │  │  └─ refresh-token.entity.ts
│  │  │  ├─ resolvers
│  │  │  │  ├─ auth.resolver.ts
│  │  │  │  └─ refresh-token.resolver.ts
│  │  │  ├─ services
│  │  │  │  ├─ auth.service.ts
│  │  │  │  └─ refresh-token.service.ts
│  │  │  └─ strategies
│  │  │     ├─ jwt.strategy.ts
│  │  │     └─ local.strategy.ts
│  │  ├─ customer
│  │  │  ├─ customer.module.ts
│  │  │  ├─ customer.resolver.ts
│  │  │  ├─ customer.service.ts
│  │  │  ├─ dto
│  │  │  │  ├─ create-customer.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-customer.input.ts
│  │  │  └─ entities
│  │  │     └─ customer.entity.ts
│  │  ├─ employee
│  │  │  ├─ dto
│  │  │  │  ├─ create-employee.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-employee.input.ts
│  │  │  ├─ employee.module.ts
│  │  │  ├─ employee.resolver.ts
│  │  │  ├─ employee.service.ts
│  │  │  └─ entities
│  │  │     └─ employee.entity.ts
│  │  ├─ employee-task
│  │  │  ├─ dto
│  │  │  │  ├─ create-employee-task.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-employee-task.input.ts
│  │  │  ├─ employee-task.module.ts
│  │  │  ├─ employee-task.resolver.ts
│  │  │  ├─ employee-task.service.ts
│  │  │  └─ entities
│  │  │     └─ employee-task.entity.ts
│  │  ├─ index.ts
│  │  ├─ job
│  │  │  ├─ dto
│  │  │  │  ├─ create-job.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-job.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ job.entity.ts
│  │  │  ├─ job.module.ts
│  │  │  ├─ job.resolver.ts
│  │  │  └─ job.service.ts
│  │  ├─ job-category
│  │  │  ├─ dto
│  │  │  │  ├─ create-job-category.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-job-category.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ job-category.entity.ts
│  │  │  ├─ job-category.module.ts
│  │  │  ├─ job-category.resolver.ts
│  │  │  └─ job-category.service.ts
│  │  ├─ permission-set
│  │  │  ├─ dto
│  │  │  │  ├─ create-permission-set.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-permission-set.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ permission-set.entity.ts
│  │  │  ├─ permission-set.module.ts
│  │  │  ├─ permission-set.resolver.ts
│  │  │  └─ permission-set.service.ts
│  │  ├─ person
│  │  │  ├─ dto
│  │  │  │  ├─ create-person.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-person.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ person.entity.ts
│  │  │  ├─ person.module.ts
│  │  │  ├─ person.resolver.ts
│  │  │  └─ person.service.ts
│  │  ├─ review
│  │  │  ├─ dto
│  │  │  │  ├─ create-review.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-review.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ review.entity.ts
│  │  │  ├─ review.module.ts
│  │  │  ├─ review.resolver.ts
│  │  │  └─ review.service.ts
│  │  ├─ review-response
│  │  │  ├─ dto
│  │  │  │  ├─ create-review-response.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-review-response.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ review-response.entity.ts
│  │  │  ├─ review-response.module.ts
│  │  │  ├─ review-response.resolver.ts
│  │  │  └─ review-response.service.ts
│  │  ├─ service
│  │  │  ├─ dto
│  │  │  │  ├─ create-service.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-service.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ service.entity.ts
│  │  │  ├─ service.module.ts
│  │  │  ├─ service.resolver.ts
│  │  │  └─ service.service.ts
│  │  ├─ service-request
│  │  │  ├─ dto
│  │  │  │  ├─ create-service-request.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-service-request.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ service-request.entity.ts
│  │  │  ├─ service-request.module.ts
│  │  │  ├─ service-request.resolver.ts
│  │  │  └─ service-request.service.ts
│  │  ├─ service-request-job
│  │  │  ├─ dto
│  │  │  │  ├─ create-service-request-job.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-service-request-job.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ service-request-job.entity.ts
│  │  │  ├─ service-request-job.module.ts
│  │  │  ├─ service-request-job.resolver.ts
│  │  │  └─ service-request-job.service.ts
│  │  ├─ task
│  │  │  ├─ dto
│  │  │  │  ├─ create-task.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-task.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ task.entity.ts
│  │  │  ├─ task.module.ts
│  │  │  ├─ task.resolver.ts
│  │  │  └─ task.service.ts
│  │  ├─ user
│  │  │  ├─ dto
│  │  │  │  ├─ change-password-input.ts
│  │  │  │  ├─ create-user.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ link-user-to-person-input.ts
│  │  │  │  └─ update-user.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ user.entity.ts
│  │  │  ├─ user.module.ts
│  │  │  ├─ user.resolver.ts
│  │  │  └─ user.service.ts
│  │  ├─ user-report
│  │  │  ├─ dto
│  │  │  │  ├─ create-user-report.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-user-report.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ user-report.entity.ts
│  │  │  ├─ user-report.module.ts
│  │  │  ├─ user-report.resolver.ts
│  │  │  └─ user-report.service.ts
│  │  ├─ vehicle
│  │  │  ├─ dto
│  │  │  │  ├─ create-vehicle.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-vehicle.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ vehicle.entity.ts
│  │  │  ├─ vehicle.module.ts
│  │  │  ├─ vehicle.resolver.ts
│  │  │  └─ vehicle.service.ts
│  │  ├─ vehicle-brand
│  │  │  ├─ dto
│  │  │  │  ├─ create-vehicle-brand.input.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ entities
│  │  │  │  └─ vehicle-brand.entity.ts
│  │  │  ├─ vehicle-brand.module.ts
│  │  │  ├─ vehicle-brand.resolver.ts
│  │  │  └─ vehicle-brand.service.ts
│  │  ├─ vehicle-details
│  │  │  ├─ dto
│  │  │  │  ├─ create-vehicle-detail.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-vehicle-detail.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ vehicle-detail.entity.ts
│  │  │  ├─ vehicle-details.module.ts
│  │  │  ├─ vehicle-details.resolver.ts
│  │  │  └─ vehicle-details.service.ts
│  │  ├─ vehicle-model
│  │  │  ├─ dto
│  │  │  │  ├─ create-vehicle-model.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-vehicle-model.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ vehicle-model.entity.ts
│  │  │  ├─ vehicle-model.module.ts
│  │  │  ├─ vehicle-model.resolver.ts
│  │  │  └─ vehicle-model.service.ts
│  │  ├─ workshop
│  │  │  ├─ dto
│  │  │  │  ├─ create-workshop.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-workshop.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ workshop.entity.ts
│  │  │  ├─ workshop.module.ts
│  │  │  ├─ workshop.resolver.ts
│  │  │  └─ workshop.service.ts
│  │  ├─ workshop-details
│  │  │  ├─ dto
│  │  │  │  ├─ create-workshop-details.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-workshop-details.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ workshop-detail.entity.ts
│  │  │  ├─ workshop-details.module.ts
│  │  │  ├─ workshop-details.resolver.ts
│  │  │  └─ workshop-details.service.ts
│  │  ├─ workshop-job
│  │  │  ├─ dto
│  │  │  │  ├─ create-workshop-job.input.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ update-workshop-job.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ workshop-job.entity.ts
│  │  │  ├─ workshop-job.module.ts
│  │  │  ├─ workshop-job.resolver.ts
│  │  │  └─ workshop-job.service.ts
│  │  └─ workshop-job-category
│  │     ├─ dto
│  │     │  ├─ create-workshop-job-category.input.ts
│  │     │  ├─ index.ts
│  │     │  └─ update-workshop-job-category.input.ts
│  │     ├─ entities
│  │     │  └─ workshop-job-category.entity.ts
│  │     ├─ workshop-job-category.module.ts
│  │     ├─ workshop-job-category.resolver.ts
│  │     └─ workshop-job-category.service.ts
│  └─ schema.gql
└─ tsconfig.json

```