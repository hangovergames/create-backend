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

## Working on the development environment

### Fetching source code

```bash
git clone git@github.com:heusalagroup/create-backend.git create-backend
cd create-backend
git submodule update --init --recursive
```

### Listing state of git modules

```bash
./scripts/get-all-branches.sh
```

Run the `set-branch-main.sh` script if you see states like this:

```bash
$ ./scripts/get-all-branches.sh 
main    .
(HEAD detached at 34566e9)      src/fi/hg/core
(HEAD detached at 898988b)      src/fi/hg/create
```

When everything is correct you should see this:

```bash
$ ./scripts/get-all-branches.sh 
main    .
main    src/fi/hg/core
main    src/fi/hg/create
```

...unless you want to use some other branch...

### Changing all git modules to the `main` branch

```bash
./scripts/set-branch-main.sh
```

### Updating git modules to the latest version

```bash
./scripts/pull-all.sh
```

#### Building the project

```shell
npm run build
```

### Testing locally

You can install your own locally changed version globally:

```shell
npm install -g .
```

Then use it to kickstart a backend project:

```shell
create-backend ./foo-backend
```

### License

Copyright (c) 2022 Heusala Group. All rights reserved. Licensed under the MIT License 
(the "[License](./LICENSE)");

