// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { SupportedPackageManagers } from "pkg-install";
import { LogService } from "./fi/nor/ts/LogService";
import { camelCase } from "lodash";
import { SyncFileUtils } from "./fi/nor/ts/SyncFileUtils";
import { isReadonlyJsonObject } from "./fi/nor/ts/Json";
import { isEqual } from "./fi/nor/ts/modules/lodash";
import { SyncGitUtils } from "./SyncGitUtils";
import path from "path";
import { initPackage } from "./initPackage";

const LOG = LogService.createLogger('initFiles');

/**
 *
 * @param pkgManager
 */
export function initFiles (pkgManager : SupportedPackageManagers) {

    const path = require("path");

    LOG.debug(`Initializing package.json using `, pkgManager);
    initPackage(pkgManager);

    const packageJsonPath = path.resolve("package.json");
    if ( !SyncFileUtils.fileExists(packageJsonPath) ) {
        LOG.warn(`Warning! package.json did not exist: `, packageJsonPath);
        return;
    }

    const pkgDir = path.dirname(packageJsonPath);
    const templatesDir = path.resolve(__dirname, "../templates");
    const mainName = path.basename(pkgDir);
    const srcDir = path.resolve(pkgDir, './src');
    const srcConstantsDir = path.resolve(srcDir, './constants');
    const srcControllersDir = path.resolve(srcDir, './controllers');

    LOG.debug(`Creating directory: `, srcConstantsDir);
    SyncFileUtils.mkdirp(srcConstantsDir);

    LOG.debug(`Creating directory: `, srcControllersDir);
    SyncFileUtils.mkdirp(srcControllersDir);

    const currentYear = (new Date().getFullYear());

    const replacements = {
        'GIT-ORGANISATION' : `@heusalagroup`,
        'ORGANISATION-NAME' : `Heusala Group Ltd`,
        'ORGANISATION-EMAIL' : `info@heusalagroup.fi`,
        'CURRENT-YEAR' : `${currentYear}`,
        'PROJECT-NAME' : mainName,
        'projectName' : camelCase(mainName)
    };

    LOG.debug(`Initializing git if necessary`);
    SyncGitUtils.initGit();

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./LICENSE"), path.resolve(pkgDir, "./LICENSE"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./README.md"), path.resolve(pkgDir, "./README.md"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./gitignore"), path.resolve(pkgDir, "./.gitignore"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./Dockerfile"), path.resolve(pkgDir, "./Dockerfile"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./docker-compose.yml"), path.resolve(pkgDir, "./docker-compose.yml"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./babel.config.json"), path.resolve(pkgDir, "./babel.config.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./rollup.config.js"), path.resolve(pkgDir, "./rollup.config.js"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./tsconfig.json"), path.resolve(pkgDir, "./tsconfig.json"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/build.ts"), path.resolve(srcConstantsDir, "./build.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/constants/runtime.ts"), path.resolve(srcConstantsDir, "./runtime.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/controllers/BackendController.ts"), path.resolve(srcControllersDir, "./BackendController.ts"), replacements);
    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/main.ts"), path.resolve(srcDir, "./main.ts"), replacements);

    const mainFileName = `./${mainName}.ts`;
    const mainSrcFileName = `./src/${mainName}.ts`;

    SyncFileUtils.copyTextFileWithReplacementsIfMissing(path.resolve(templatesDir, "./src/project-name.ts"), path.resolve(srcDir, mainFileName), replacements);

    const distFile = `./dist/${mainName}.js`;

    const pkgJSON = SyncFileUtils.readJsonFile(packageJsonPath);

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
        SyncFileUtils.writeJsonFile(packageJsonPath, newPkgJson);
    } else {
        LOG.warn(`Warning! No changes to package.json detected`);
    }

    LOG.debug(`Initializing git sub module: sendanor/typescript from main branch`);
    SyncGitUtils.initSubModule('git@github.com:sendanor/typescript.git', 'src/fi/nor/ts', 'main');

    LOG.debug(`Adding files to git`);
    SyncGitUtils.addFiles(
        [
            "./LICENSE",
            "./README.md",
            "./.gitignore",
            "./Dockerfile",
            "./docker-compose.yml",
            "./babel.config.json",
            "./rollup.config.js",
            "./tsconfig.json",
            "./package.json",
            "./package-lock.json",
            "./src"
        ]
    );

    LOG.debug(`Initial git commit`);
    SyncGitUtils.commit('first commit');

    LOG.debug(`Renaming main git branch`);
    SyncGitUtils.renameMainBranch('main');

}
