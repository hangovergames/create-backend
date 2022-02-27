// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa } from "execa";
import path from "path";
import { DEFAULT_EXECA_STDIO } from "./constants/runtime";
import { SyncFileUtils } from "./fi/nor/ts/SyncFileUtils";
import { LogService } from "./fi/nor/ts/LogService";

const LOG = LogService.createLogger('SyncGitUtils');

export class SyncGitUtils {

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
        LOG.debug(`setupGitSubModule: Creating: `, parentPath)
        SyncFileUtils.mkdirp(parentPath);

        // git submodule add git@github.com:sendanor/typescript.git src/fi/nor/ts
        LOG.debug(`setupGitSubModule: Adding submodule: `, moduleUrl, modulePath)
        SyncGitUtils.addSubModule(moduleUrl, modulePath);

        // git config -f .gitmodules submodule.src/fi/nor/ts.branch main
        LOG.debug(`setupGitSubModule: Configuring branch for `, moduleUrl, modulePath, ': ', moduleBranch);
        SyncGitUtils.setSubModuleBranch(modulePath, moduleBranch);

    }

}
