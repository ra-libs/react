# raDataRestProvider

it uses ra-data-simple-rest provider and intercepts react-admin requests to transform to formData when it has any file in the request body.

```tsx

import { raDataRestProvider } from '@ra-libs/react';

<Admin
    dataProvider={raDataRestProvider('<API_URL>')}
>
    ...
</Admin>

```
