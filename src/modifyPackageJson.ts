// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { parseReadonlyJsonObject, ReadonlyJsonObject } from "./fi/hg/core/Json";
import { CreatePackageConfig } from "./fi/hg/create/types/CreatePackageConfig";
import { isArrayOf, isString } from "./fi/hg/core/modules/lodash";

export function modifyPackageJson (
    pkgJSON: ReadonlyJsonObject,
    config: CreatePackageConfig
): ReadonlyJsonObject {
    const scriptsObject: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.scripts) ?? {};
    const binObject: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.bin) ?? {};
    const dependencies: ReadonlyJsonObject = parseReadonlyJsonObject(pkgJSON?.dependencies) ?? {};
    const distFile = config.getDistFile();
    const mainName = config.getMainName();
    const mainSrcFileName = config.getMainSourceFileName();
    const keywords : string[] = isArrayOf(pkgJSON?.keywords, isString) ? pkgJSON?.keywords as string[] : [];
    return {
        ...pkgJSON,
        private: true,
        main: distFile,
        bin: {
            ...binObject,
            [mainName]: distFile
        },
        keywords: [
            ...keywords,
            "typescript",
            "backend",
            "rest",
            "nodejs",
            "spring",
            "spring-boot"
        ],
        scripts: {
            ...scriptsObject,
            "start-prod": `node ${distFile}`,
            "start": `ts-node ${mainSrcFileName}`,
            "build": "rollup -c"
        },
        dependencies: {},
        devDependencies: dependencies
    };
}
