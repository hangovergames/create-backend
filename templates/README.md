# GIT-ORGANISATION/PROJECT-NAME

## Working on the development environment

### Fetching source code

```bash
git clone git@github.com:GIT-ORGANISATION/PROJECT-NAME.git PROJECT-NAME
cd PROJECT-NAME
git submodule update --init --recursive
```

### Build the server locally

```
npm run build
```

### Start the server in production mode locally

```
npm run start-prod
```

...and open http://0.0.0.0:3000

If you wish to use Docker instead, check *Using Docker environment* later.

## Using Docker environment

### Building the service using Docker

```bash
docker-compose build
```

### Starting the service using Docker

This is the easiest way to run the full environment.

```bash
docker-compose up
```

## Other development guides

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

### Updating upstream git modules

```bash
./scripts/pull-all.sh
```
