// Copyright (c) CURRENT-YEAR. ORGANISATION-NAME <ORGANISATION-EMAIL>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
} from "../fi/nor/ts/Request";
import { ReadonlyJsonObject } from "../fi/nor/ts/Json";
import { ResponseEntity } from "../fi/nor/ts/request/ResponseEntity";
import { LogService } from "../fi/nor/ts/LogService";

const LOG = LogService.createLogger('BackendController');

@RequestMapping("/")
export class BackendController {

    @GetMapping("/")
    public static async getIndex (
        @RequestHeader('X-Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string
    ): Promise<ResponseEntity<ReadonlyJsonObject | {readonly error: string}>> {
        try {

            return ResponseEntity.ok({
                hello: 'world'
            } as unknown as ReadonlyJsonObject);

        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<{readonly error: string}>().body({
                error: 'Internal Server Error'
            });
        }
    }

}
