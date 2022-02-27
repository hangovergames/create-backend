// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa } from "execa";
import path from "path";
import { DEFAULT_EXECA_STDIO } from "./constants/runtime";
import { SyncFileUtils } from "./fi/nor/ts/SyncFileUtils";
import { LogService } from "./fi/nor/ts/LogService";
import { isString } from "./fi/nor/ts/modules/lodash";

const LOG = LogService.createLogger('SyncGitUtils');

export class SyncGitUtils {

    /**
     * Returns the git directory path
     *
     * @param filePath
     */
    static getGitDir (filePath: string) : string | undefined {

        let dirPath : string = filePath;
        let newDirPath : string = dirPath;

        do {

            LOG.debug(`getGitDir: Searching git directory from `, dirPath);

            dirPath = newDirPath;

            if (SyncFileUtils.fileExists(path.resolve(dirPath, '.git')) ) {
                return dirPath;
            }

            newDirPath = path.dirname(dirPath);

        } while (newDirPath !== dirPath);

        return undefined;

    }

    static initGit () {

        const currentGitDir = SyncGitUtils.getGitDir(process.cwd());

        if (!currentGitDir) {
            LOG.debug(`Creating git directory`);
            execa(
                'git',
                [ "init" ],
                {
                    stdio: DEFAULT_EXECA_STDIO
                }
            );
        } else {
            LOG.warn(`Warning! Git directory already exists: `, currentGitDir);
        }

    }

    static addFiles (filePath: string | string[]) {

        const files = isString(filePath) ? [ filePath ] : filePath;

        LOG.debug(`addFiles: Adding files: `, filePath);
        execa(
            'git',
            [ "add", ...files ],
            {
                stdio: DEFAULT_EXECA_STDIO
            }
        );

    }

    static commit (message: string) {

        LOG.debug(`commit with: `, message);
        execa(
            'git',
            [ "commit", '-m', message ],
            {
                stdio: DEFAULT_EXECA_STDIO
            }
        );

    }

    /**
     *
     * git branch -M main
     * @param newName
     */
    static renameMainBranch (newName: string) {

        LOG.debug(`rename branch: `, newName);
        execa(
            'git',
            [ "branch", '-M', newName ],
            {
                stdio: DEFAULT_EXECA_STDIO
            }
        );

    }

    static addSubModule (
        moduleUrl : string,
        modulePath : string
    ) {

        if (!SyncFileUtils.fileExists(modulePath)) {
            execa(
                'git',
                [ "submodule", 'add', moduleUrl, modulePath ],
                {
                    stdio: DEFAULT_EXECA_STDIO
                }
            );
        } else {
            LOG.warn(`Warning! Git sub module directory already exists: `, modulePath);
        }

    }

    static setSubModuleBranch (
        modulePath : string,
        moduleBranch : string
    ) {
        execa(
            'git',
            [ "config", '-f', '.gitmodules', `submodule.${modulePath}.branch`, moduleBranch ],
            {
                stdio: DEFAULT_EXECA_STDIO
            }
        );
    }

    static initSubModule (
        moduleUrl: string,
        modulePath: string,
        moduleBranch: string
    ) {

        const parentPath = path.dirname(modulePath);

        // mkdir -p src/fi/nor
        LOG.debug(`initSubModule: Creating: `, parentPath)
        SyncFileUtils.mkdirp(parentPath);

        // git submodule add git@github.com:sendanor/typescript.git src/fi/nor/ts
        LOG.debug(`initSubModule: Adding submodule: `, moduleUrl, modulePath)
        SyncGitUtils.addSubModule(moduleUrl, modulePath);

        // git config -f .gitmodules submodule.src/fi/nor/ts.branch main
        LOG.debug(`initSubModule: Configuring branch for `, moduleUrl, modulePath, ': ', moduleBranch);
        SyncGitUtils.setSubModuleBranch(modulePath, moduleBranch);

    }

}
