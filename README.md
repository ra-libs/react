<p align="center">@ra-libs/react</p>
    <p align="center">
    <a href="https://www.npmjs.com/org/ra-libs" target="_blank"><img src="https://img.shields.io/npm/v/@ra-libs/react.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/org/ra-libs" target="_blank"><img src="https://img.shields.io/npm/l/@ra-libs/react.svg" alt="Package License" /></a>
    <a href="https://github.com/ra-libs/react/actions/workflows/semantic-release.yml/badge.svg" target="_blank"><img src="https://github.com/ra-libs/react/actions/workflows/semantic-release.yml/badge.svg" alt="Publish Status" /></a>
</p>

This Package uses [semantic-release](https://github.com/semantic-release/semantic-release) to publish new versions. Check [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format) for new commits

### Installation

Run npm install

```bash
npm install @ra-libs/react
```
## Components

### ResponsiveDatagrid

A component to render [SimpleList](https://marmelab.com/react-admin/SimpleList.html) or [Datagrid](https://marmelab.com/react-admin/Datagrid.html) based on screen size. 

```tsx
      <ResponsiveDatagrid
        primaryText={(record) => `${record.firstName} ${record.lastName}`}
        secondaryText={(record) => `${record.company}`}
      >
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="company" />
      </ResponsiveDatagrid>
```

### Datagrid

Datagrid component with bulkActionButtons false by default

## Hooks

### useScreenSize

Hook that uses material ui useMediaQuery to check if screen isSmall or isXsmall

```ts
    const { isSmall, isXSmall } = useScreenSize()
```

## Services

### raDataRestProvider

it uses ra-data-simple-rest provider and intercepts react-admin requests to transform to formData when it has any file in the request body. 

```tsx

import { raDataRestProvider } from '@ra-libs/react';

<Admin
    dataProvider={raDataRestProvider('<API_URL>')}
>
    ...
</Admin>

```

### LocalSession

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

### HttpRequest

a customized axios class

```ts
import { HttpRequest } from '@ra-libs/react';

// Get
const results = await HttpRequest.get('<URL>')
```