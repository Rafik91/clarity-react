/**
 * Copyright (c) 2018 Dell Inc., or its subsidiaries. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Header} from ".";

storiesOf('Header', module)
    .add('Header', () =>
        <Header primaryShown={true} secondaryShown={true}/>
    )
;
