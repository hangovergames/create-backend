// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa } from "execa";
import { DEFAULT_EXECA_STDIO } from "./constants/runtime";
import { SupportedPackageManagers } from "pkg-install";

export function initPackage (pkgManager : SupportedPackageManagers) {

    const args = process.argv.slice(2).filter((arg : string) => arg.startsWith("-"));

    return execa(
        pkgManager,
        [ "init", ...args ],
        {
            stdio: DEFAULT_EXECA_STDIO
        }
    );

}

