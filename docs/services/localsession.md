# LocalSession

a customized sessionStoage class that uses cookies when sessionStorage not available.

```ts

import { LocalSession } from '@ra-libs/react'


// Set session key-value
LocalSession.set("key", "value");

// Get session key
LocalSession.get("key");

// Check if key exists
LocalSession.check("key");

```
