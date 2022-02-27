// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import {
    DEFAULT_EXECA_STDIO,
    DEFAULT_INSTALLED_PACKAGES,
    DEFAULT_LOG_LEVEL,
    PREFERED_PACKAGE_SYSTEM
} from "./constants/runtime";

import { getPackageManager, install, SupportedPackageManagers } from "pkg-install";
import { InstallConfig } from "pkg-install/lib/config";
import { initPackage } from "./initPackage";
import { initFiles } from "./initFiles";
import { LogService } from "./fi/nor/ts/LogService";
import { parseLogLevel } from "./fi/nor/ts/types/LogLevel";
import { SyncFileUtils } from "./fi/nor/ts/SyncFileUtils";
import { SyncGitUtils } from "./SyncGitUtils";

const LOG = LogService.createLogger('main');

const logLevel = parseLogLevel(DEFAULT_LOG_LEVEL);
if (logLevel) {
    LOG.debug(`Setting log level as `, logLevel);
    LogService.setLogLevel( logLevel );
}

export async function main () : Promise<void> {

    const path = require("path");

    let cwd : string = process.cwd();

    const dirname = process.argv.slice(2).filter((arg : string) => !arg.startsWith("-")).shift();

    if (dirname) {
        const newCwd = path.resolve(cwd, dirname);
        LOG.debug(`Creating project directory: `, newCwd);
        SyncFileUtils.mkdirp(newCwd);
        process.chdir(newCwd);
        cwd = newCwd;
    }

    const installConfig : InstallConfig = {
        dev: false,
        exact: false,
        noSave: false,
        bundle: false,
        verbose: false,
        global: false,
        prefer: PREFERED_PACKAGE_SYSTEM,
        stdio: DEFAULT_EXECA_STDIO,
        cwd: cwd
    };

    LOG.debug(`Initial install config: `, installConfig);

    const pkgManager : SupportedPackageManagers = await getPackageManager(installConfig);

    LOG.debug(`Initializing package using `, pkgManager);
    await initPackage(pkgManager);

    LOG.debug(`Installing packages: `, DEFAULT_INSTALLED_PACKAGES);
    await install(
        DEFAULT_INSTALLED_PACKAGES,
        installConfig
    );

    LOG.debug(`Initializing files using `, pkgManager);
    await initFiles(pkgManager);

    LOG.debug(`Initializing sub module: sendanor/typescript from main branch`);
    SyncGitUtils.initSubModule('git@github.com:sendanor/typescript.git', 'src/fi/nor/ts', 'main');

}



