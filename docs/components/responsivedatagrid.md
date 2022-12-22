# ResponsiveDatagrid

A component to render [SimpleList](https://marmelab.com/react-admin/SimpleList.html) or [Datagrid](https://marmelab.com/react-admin/Datagrid.html) based on screen size.

```tsx
import { ResponsiveDatagrid } from '@ra-libs/react';

<ResponsiveDatagrid
  primaryText={(record) => `${record.firstName} ${record.lastName}`}
  secondaryText={(record) => `${record.company}`}
>
  <TextField source="firstName" />
  <TextField source="lastName" />
  <TextField source="company" />
</ResponsiveDatagrid>
```
