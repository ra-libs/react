# CurrencyInput

CurrencyInput component uses react-admin SelectField with a pre-defined currencies list.

### Usage

```tsx
import { CurrencyInput } from '@ra-libs/react';

<CurrencyInput fullWidth validate={[required()]} translationPath="choices.currencies"/>
```

### Props

| Prop            | Required | Type   | Default  | Description                                                                                                                                                                                                                     |
| --------------- | -------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| translationPath | false    | string | -        | <p>the path to be used with the useTranslate hook to translate the currency name based on its Id, ex: translate(<code>${translationPath}.BRL</code>)<br><br>Make sure to add the translation choices to your i18n provider.</p> |
| source          | false    | string | currency | the field source to retrieve its value.                                                                                                                                                                                         |
