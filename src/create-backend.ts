// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { main } from "./main";

console.log(`Running main()`);

main().catch((err) => {
    console.error(err);
});
