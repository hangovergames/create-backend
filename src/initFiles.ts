// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { SupportedPackageManagers } from "pkg-install";
import { mkdirp } from "./mkdirp";
import LogService from "./fi/nor/ts/LogService";

const LOG = LogService.createLogger('initFiles');

export function initFiles (pkgManager : SupportedPackageManagers) {

    const fs = require("fs");
    const path = require("path");

    const pkgPath = path.resolve("package.json");
    if ( !fs.existsSync(pkgPath) ) {
        LOG.debug(`initFiles: pkgPath did not exist: `, pkgPath);
        return;
    }

    const pkgString = fs.readFileSync(pkgPath, "utf8");
    const pkgJSON = JSON.parse(pkgString);

    const cjsMainField = pkgJSON.main || "index.js";
    const cjsMainPath = path.resolve(cjsMainField);
    const cjsMainName = path.basename(cjsMainPath);
    const cjsMainDirname = path.dirname(cjsMainPath);

    LOG.debug(`initFiles: Creating: `, cjsMainDirname);
    mkdirp(cjsMainDirname);

    // Initialize babel.config.json
    // Initialize docker-compose.yml
    // Initialize rollup.config.js
    // Initialize tsconfig.json
    // Initialize src/constants/build.ts
    // Initialize src/constants/runtime.ts
    // Initialize src/main.ts

}
