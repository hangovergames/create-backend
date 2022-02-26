// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import {
    DEFAULT_EXECA_STDIO,
    DEFAULT_INSTALLED_PACKAGES, DEFAULT_LOG_LEVEL,
    PREFERED_PACKAGE_SYSTEM
} from "./constants/runtime";

import { getPackageManager, install, SupportedPackageManagers } from "pkg-install";
import { InstallConfig } from "pkg-install/lib/config";
import { initPackage } from "./initPackage";
import { initFiles } from "./initFiles";
import LogService from "./fi/nor/ts/LogService";
import { parseLogLevel } from "./fi/nor/ts/types/LogLevel";

LogService.setLogLevel( parseLogLevel(DEFAULT_LOG_LEVEL) );

const LOG = LogService.createLogger('main');

export async function main () : Promise<void> {

    const installConfig : InstallConfig = {
        dev: false,
        exact: false,
        noSave: false,
        bundle: false,
        verbose: false,
        global: false,
        prefer: PREFERED_PACKAGE_SYSTEM,
        stdio: DEFAULT_EXECA_STDIO,
        cwd: process.cwd()
    };

    const pkgManager : SupportedPackageManagers = await getPackageManager(installConfig);

    LOG.debug(`Initializing package using `, pkgManager);
    await initPackage(pkgManager);

    LOG.debug(`Installing packages: `, DEFAULT_INSTALLED_PACKAGES);
    await install(
        DEFAULT_INSTALLED_PACKAGES
    );

    LOG.debug(`Initializing files using `, pkgManager);
    await initFiles(pkgManager);

}



