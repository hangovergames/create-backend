// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa } from "execa";
import { DEFAULT_EXECA_STDIO } from "./constants/runtime";
import { SupportedPackageManagers } from "pkg-install";
import LogService from "./fi/nor/ts/LogService";

const LOG = LogService.createLogger('initPackage');

export async function initPackage (pkgManager : SupportedPackageManagers) : Promise<void> {

    const args = process.argv.slice(2).filter((arg : string) => arg.startsWith("-"));

    LOG.debug(`Executing: `, pkgManager, "init", ...args);

    await execa(
        pkgManager,
        [ "init", ...args ],
        {
            stdio: DEFAULT_EXECA_STDIO
        }
    );

}

