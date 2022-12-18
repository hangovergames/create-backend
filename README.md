# @heusalagroup/create-backend

Kickstart NodeJS REST backend projects with TypeScript in the familiar style 
inspired from Java Spring Boot:

See [HG Backend Guide](https://docs.hg.fi/backend/) for complete introduction to
our style of NodeJS backends.

### Usage

```shell
npm init @heusalagroup/backend ./foo-backend
```

This command will create a minimal backend project.

### Increase log level for debugging

Log level can be changed using `LOG_LEVEL`, which defaults to `INFO`.

```shell
LOG_LEVEL=DEBUG npm init @heusalagroup/backend ./foo-backend
```

### 

### Building the project

```shell
npm run build
```

### Testing locally

Install development version globally:

```shell
npm install -g .
```

Use locally installed version to kickstart a backend project:

```shell
create-backend ./foo-backend
```

### License

Copyright (c) 2022 Heusala Group. All rights reserved. Licensed under the MIT License 
(the "[License](./LICENSE)");

