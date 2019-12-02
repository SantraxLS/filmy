# :clapper:Filmy:clapper:

[![Build Status](https://github.com/carlocorradini/filmy/workflows/build/badge.svg)](https://github.com/carlocorradini/filmy/actions)

## Members

|  Name   |  Surname  |     Username      |    MAT     |
| :-----: | :-------: | :---------------: | :--------: |
|  Carlo  | Corradini | `carlocorradini`  | **192451** |
| Grigore | Andronic  | `grigoreandronic` | **192343** |
|  Luca   |  Santoro  |    `SantraxLS`    | **195342** |
| Miraxh  |  Tereziu  |  `MiraxhTereziu`  | **195067** |
|  Ayoub  |  Saghir   |   `AyoubSaghir`   | **195605** |

## Description

Set of APIs that get films and/or their infos. It uses a system of data validation for the user's requests.

## SCRUM

Available under _SCRUM_ folder.

## Built with

- [NodeJS](https://nodejs.org/it/) - JavaScript run-time environment
- [Git](https://git-scm.com) - Distributed version control system
- [Heroku](https://www.heroku.com/) - Hosting service

## Dependancies

|                                      Dependancy                                      |                                                                                                                                                      Description                                                                                                                                                       |
| :----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                  [bcryptjs](https://www.npmjs.com/package/bcryptjs)                  |                                                                                                                                             A library that hash passwords                                                                                                                                              |
|               [body-parser](https://www.npmjs.com/package/body-parser)               |                                                                                                                                            Node.js body parsing middleware                                                                                                                                             |
|           [class-validator](https://www.npmjs.com/package/class-validator)           |                                                                               Allows use of decorator and non-decorator based validation. Internally uses [validator](https://www.npmjs.com/package/validator).js to perform validation                                                                                |
|               [compression](https://www.npmjs.com/package/compression)               |                                                                                                                                             Node.js compression middleware                                                                                                                                             |
|                      [cors](https://www.npmjs.com/package/cors)                      |                                                                                    Provide a Express middleware that can be used to enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) wth various options                                                                                     |
|                 [cross-env](https://www.npmjs.com/package/cross-env)                 |                                                                                                                          Run scripts that set and use environment variables across platforms                                                                                                                           |
|                    [dotenv](https://www.npmjs.com/package/dotenv)                    | Dotenv is a zero-dependency module that loads environment variables from a .env file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env). Storing configuration in the environment separate from code is based on The [Twelve-Factor App](https://12factor.net/config) methodology |
|                   [express](https://www.npmjs.com/package/express)                   |                                                                                                                    Fast, unopinionated, minimalist web framework for [node](https://nodejs.org/en/)                                                                                                                    |
|                    [helmet](https://www.npmjs.com/package/helmet)                    |                                                                                                 Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!                                                                                                  |
|              [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)              |                                                                                                                      An implementation of [JSON Web Tokens](https://tools.ietf.org/html/rfc7519)                                                                                                                       |
|                        [pg](https://www.npmjs.com/package/pg)                        |                                                                                                             Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings                                                                                                             |
|          [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)          |                                                                                                                                         Proposal to add Metadata to ECMAScript                                                                                                                                         |
|             [serve-favicon](https://www.npmjs.com/package/serve-favicon)             |                                                                                                                   Node.js middleware for serving a [favicon](https://en.wikipedia.org/wiki/Favicon)                                                                                                                    |
|        [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)        |                                This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a [swagger](https://swagger.io/tools/swagger-ui/).json file. The result is living documentation for your API hosted from your API server via a route                                |
|                   [typeorm](https://www.npmjs.com/package/typeorm)                   |                                                                                                          TypeORM is an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) that can run in NodeJS                                                                                                           |
|                   [winston](https://www.npmjs.com/package/winston)                   |                                                                                                                                           A logger for just about everything                                                                                                                                           |
| [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file) |                                                      A transport for [winston](https://www.npmjs.com/package/winston) which logs to a rotating file. Logs can be rotated based on a date, size limit, and old logs can be removed based on count or elapsed days                                                       |
|                    [yamljs](https://www.npmjs.com/package/yamljs)                    |                                                                                    Standalone JavaScript YAML 1.2 Parser & Encoder. Works under node.js and all major browsers. Also brings command line YAML/JSON conversion tools                                                                                    |

## Scripts

|       Script        | Description |
| :-----------------: | :---------: |
|      [clean]()      |             |
|     [update]()      |             |
| [update:install]()  |             |
|    [prettify]()     |             |
| [prettify:staged]() |             |
|      [lint]()       |             |
|   [lint:staged]()   |             |
|    [prebuild]()     |             |
|      [build]()      |             |
|    [postbuild]()    |             |
|      [test]()       |             |
|   [test:staged]()   |             |
|    [prestart]()     |             |
|   [start:prod]()    |             |
|    [start:dev]()    |             |

## Endpoint list

For a more detailed description go to <link_heroku>

|                         Endpoint                         |    Description    |
| :------------------------------------------------------: | :---------------: |
| http://filmy-19.herokuapp.com/v1/auth/signin<1 endpoint> | <description_api> |
|   http://filmy-19.herokuapp.com/api/status<1 endpoint>   | <description_api> |
|    http://filmy-19.herokuapp.com/v1/film<1 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/film<2 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/film<3 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/film<4 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/film<5 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/actor<1 endpoint>    | <description_api> |
|    http://filmy-19.herokuapp.com/v1/actor<2 endpoint>    | <description_api> |
|    http://filmy-19.herokuapp.com/v1/actor<3 endpoint>    | <description_api> |
|    http://filmy-19.herokuapp.com/v1/actor<4 endpoint>    | <description_api> |
|    http://filmy-19.herokuapp.com/v1/actor<5 endpoint>    | <description_api> |
|    http://filmy-19.herokuapp.com/v1/user<1 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/user<2 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/user<3 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/user<4 endpoint>     | <description_api> |
|    http://filmy-19.herokuapp.com/v1/user<5 endpoint>     | <description_api> |
