**Join our [Discord](https://discord.gg/UBTrHxA78f) to discuss our software!**

# @heusalagroup/create-backend

A command-line tool to easily create NodeJS REST backend projects with
TypeScript in the style inspired by Java Spring Boot. For more information on
our style of NodeJS backends, check out [HG.fi](https://hg.fi/).

### Usage

To create a minimal backend project, run either of the following commands:

```shell
npm init @heusalagroup/backend ./foo-backend
```

...or..

```shell
npm install -g @heusalagroup/create-backend
create-backend ./foo-backend
```

This command also accepts any argument from the `npm init` command. For example,
you can call it with `--yes` to answer "yes" to every question:

```shell
create-backend ./foo-backend --yes
```

To increase the log level for debugging, set the `LOG_LEVEL` environment 
variable:

```shell
LOG_LEVEL=DEBUG npm init @heusalagroup/backend ./foo-backend
```

## Development

### Fetching source code

To get started with development, clone the repository locally and install the 
git submodules:

```bash
git clone git@github.com:heusalagroup/create-backend.git create-backend
cd create-backend
git submodule update --init --recursive
```

### Listing state of git modules

To see the state of the git modules, run this command:

```bash
./scripts/get-all-branches.sh
```

If you see states like this, run the `set-branch-main.sh` script:

```bash
$ ./scripts/get-all-branches.sh 
main    .
(HEAD detached at 34566e9)      src/fi/hg/core
(HEAD detached at 898988b)      src/fi/hg/create
```

When everything is correct, you should see this:

```bash
$ ./scripts/get-all-branches.sh 
main    .
main    src/fi/hg/core
main    src/fi/hg/create
```

Unless you want to use a different branch, of course.

### Changing all git modules to the `main` branch

To switch all git modules to `main`, run this script:

```bash
./scripts/set-branch-main.sh
```

### Updating git modules to the latest version

To update all git modules to the latest version, run this script:

```bash
./scripts/pull-all.sh
```

#### Building the project

This script will build a standalone version of the project and output it
to `./dist/create-backend.js`. It will be zero dep after that, meaning that only
Node.js is required to run it, along with `./create.config.json` and the files
in `./templates`.

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

## Development with GitHub Using SSH

To use SSH when working with submodules in this repository, you will need to
configure your Git settings as follows:

```
git config --global url."git@github.com:heusalagroup/".insteadOf "https://github.com/heusalagroup/"
```

This configuration is necessary because the repository uses HTTPS links for
read-only access. However, you may prefer to use SSH when pushing and pulling
changes.

### License

Copyright (c) 2022 Heusala Group. All rights reserved. Licensed under the MIT 
License (the "[License](./LICENSE)").
