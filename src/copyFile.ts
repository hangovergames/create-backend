// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { camelCase } from "lodash";

export function copyFile (
    mainName: string,
    sourceFile: string,
    toFile: string
) {
    const fs = require("fs");
    const fileContentString = fs.readFileSync(sourceFile, 'utf8')
                                .replace('PROJECT-NAME', mainName )
                                .replace('projectName', camelCase(mainName) );
    fs.writeFileSync(toFile, fileContentString, {encoding: 'utf8'});
}
