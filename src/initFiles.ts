// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { SupportedPackageManagers } from "pkg-install";
import { mkdirp } from "./mkdirp";
import { LogService } from "./fi/nor/ts/LogService";
import { copyFile } from "./copyFile";
import fs from "fs";

const LOG = LogService.createLogger('initFiles');

export function initFiles (pkgManager : SupportedPackageManagers) {

    const fs = require("fs");
    const path = require("path");

    const pkgPath = path.resolve("package.json");
    if ( !fs.existsSync(pkgPath) ) {
        LOG.debug(`initFiles: pkgPath did not exist: `, pkgPath);
        return;
    }

    const templatesDir = path.resolve(__dirname, "../templates");

    const mainName = path.basename(path.dirname(pkgPath));

    const pkgString = fs.readFileSync(pkgPath, "utf8");
    const pkgJSON = JSON.parse(pkgString);

    const mainField = pkgJSON?.main ?? "index.js";
    const mainPath = path.resolve(mainField);
    const mainDir = path.dirname(mainPath);

    const srcDir = path.resolve(mainDir, './src');
    const srcConstantsDir = path.resolve(srcDir, './constants');
    const srcControllersDir = path.resolve(srcDir, './controllers');

    LOG.debug(`initFiles: Creating: `, mainDir);
    mkdirp(srcConstantsDir);
    mkdirp(srcControllersDir);

    copyFile( mainName, path.resolve(templatesDir, "./Dockerfile"), path.resolve(mainDir, "./Dockerfile"));
    copyFile( mainName, path.resolve(templatesDir, "./docker-compose.yml"), path.resolve(mainDir, "./docker-compose.yml"));
    copyFile( mainName, path.resolve(templatesDir, "./babel.config.json"), path.resolve(mainDir, "./babel.config.json"));
    copyFile( mainName, path.resolve(templatesDir, "./rollup.config.js"), path.resolve(mainDir, "./rollup.config.js"));
    copyFile( mainName, path.resolve(templatesDir, "./tsconfig.json"), path.resolve(mainDir, "./tsconfig.json"));
    copyFile( mainName, path.resolve(templatesDir, "./src/constants/build.ts"), path.resolve(srcConstantsDir, "./build.ts"));
    copyFile( mainName, path.resolve(templatesDir, "./src/constants/runtime.ts"), path.resolve(srcConstantsDir, "./runtime.ts"));
    copyFile( mainName, path.resolve(templatesDir, "./src/controllers/BackendController.ts"), path.resolve(srcControllersDir, "./BackendController.ts"));
    copyFile( mainName, path.resolve(templatesDir, "./src/main.ts"), path.resolve(srcDir, "./main.ts"));

    const mainFileName = `./${mainName}.ts`;
    const mainSrcFileName = `./src/${mainName}.ts`;

    copyFile( mainName, path.resolve(templatesDir, "./src/project-name.ts"), path.resolve(srcDir, mainFileName));

    const distFile = `./dist/${mainName}.js`;

    const newPkgJson = {
        ...pkgJSON,
        private: true,
        main: distFile,
        bin: {
            [mainName]: distFile
        },
        scripts: {
            ...pkgJSON.scripts,
            "start-prod": `node ${distFile}`,
            "start": `ts-node ${mainSrcFileName}`,
            "build": "rollup -c"
        }
    };

    const newPkgJsonString = JSON.stringify(newPkgJson, null, 2);

    fs.writeFileSync(pkgPath, newPkgJsonString, {encoding: 'utf8'});

}
