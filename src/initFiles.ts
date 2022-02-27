// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { SupportedPackageManagers } from "pkg-install";
import { LogService } from "./fi/nor/ts/LogService";
import { camelCase } from "lodash";
import { SyncFileUtils } from "./fi/nor/ts/SyncFileUtils";
import { isReadonlyJsonObject } from "./fi/nor/ts/Json";
import { isEqual } from "./fi/nor/ts/modules/lodash";

const LOG = LogService.createLogger('initFiles');

/**
 *
 * @param pkgManager
 */
export function initFiles (pkgManager : SupportedPackageManagers) {

    const path = require("path");

    const pkgPath = path.resolve("package.json");
    if ( !SyncFileUtils.fileExists(pkgPath) ) {
        LOG.debug(`initFiles: pkgPath did not exist: `, pkgPath);
        return;
    }

    const templatesDir = path.resolve(__dirname, "../templates");

    const mainName = path.basename(path.dirname(pkgPath));
    const srcDir = path.resolve(pkgPath, './src');
    const srcConstantsDir = path.resolve(srcDir, './constants');
    const srcControllersDir = path.resolve(srcDir, './controllers');

    LOG.debug(`initFiles: Creating: `, pkgPath);
    SyncFileUtils.mkdirp(srcConstantsDir);
    SyncFileUtils.mkdirp(srcControllersDir);

    const replacements = {
        'PROJECT-NAME' : mainName,
        'projectName' : camelCase(mainName)
    };

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./Dockerfile"), path.resolve(pkgPath, "./Dockerfile"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./docker-compose.yml"), path.resolve(pkgPath, "./docker-compose.yml"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./babel.config.json"), path.resolve(pkgPath, "./babel.config.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./rollup.config.js"), path.resolve(pkgPath, "./rollup.config.js"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./tsconfig.json"), path.resolve(pkgPath, "./tsconfig.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/build.ts"), path.resolve(srcConstantsDir, "./build.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/runtime.ts"), path.resolve(srcConstantsDir, "./runtime.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/controllers/BackendController.ts"), path.resolve(srcControllersDir, "./BackendController.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/main.ts"), path.resolve(srcDir, "./main.ts"), replacements);

    const mainFileName = `./${mainName}.ts`;
    const mainSrcFileName = `./src/${mainName}.ts`;

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/project-name.ts"), path.resolve(srcDir, mainFileName), replacements);

    const distFile = `./dist/${mainName}.js`;

    const pkgJSON = SyncFileUtils.readJsonFile(pkgPath);

    if (!isReadonlyJsonObject(pkgJSON)) {
        throw new TypeError('package.json was invalid');
    }

    let scriptsObject = pkgJSON?.scripts ?? {};
    if (!isReadonlyJsonObject(scriptsObject)) {
        scriptsObject = {};
    }

    let binObject = pkgJSON?.bin ?? {};
    if (!isReadonlyJsonObject(binObject)) {
        binObject = {};
    }

    const newPkgJson = {
        ...pkgJSON,
        private: true,
        main: distFile,
        bin: {
            ...binObject,
            [mainName]: distFile
        },
        scripts: {
            ...scriptsObject,
            "start-prod": `node ${distFile}`,
            "start": `ts-node ${mainSrcFileName}`,
            "build": "rollup -c"
        }
    };

    if (!isEqual(newPkgJson, pkgJSON)) {
        SyncFileUtils.writeJsonFile(pkgPath, newPkgJson);
    } else {
        LOG.warn(`Warning! No changes to package.json detected`);
    }

}
