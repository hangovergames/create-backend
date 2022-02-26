import LogService from "./fi/nor/ts/LogService";

const LOG = LogService.createLogger('mkdirp');

export function mkdirp (dirPath : string) {

    const fs = require("fs");
    const path = require("path");

    const paths = [];
    while (!( fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory() )) {
        paths.push(dirPath);
        const parentPath = path.dirname(dirPath);
        if (dirPath === parentPath) break;
        dirPath = parentPath;
    }

    while ( paths.length >= 1 ) {
        const dir : string | undefined = paths.pop();
        LOG.debug(`Creating missing directory: `, dir);
        fs.mkdirSync(dir);
    }

}
