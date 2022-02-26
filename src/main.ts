// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import {
    DEFAULT_EXECA_STDIO,
    DEFAULT_INSTALLED_PACKAGES,
    PREFERED_PACKAGE_SYSTEM
} from "./constants/runtime";

import { getPackageManager, install, SupportedPackageManagers } from "pkg-install";
import { InstallConfig } from "pkg-install/lib/config";
import { initPackage } from "./initPackage";
import { initFiles } from "./initFiles";

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

    await initPackage(pkgManager);

    await install(
        DEFAULT_INSTALLED_PACKAGES
    );

    await initFiles(pkgManager);

}



