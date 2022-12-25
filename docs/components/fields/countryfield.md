# CountryField

CountryField component uses react-admin SelectField with a pre-defined countries list.

### Usage

```tsx
import { CountryField } from '@ra-libs/react';

<CountryField useLabel fullWidth translationPath="choices.countries" />
```

### Props

| Prop            | Required | Type    | Default | Description                                                                                                                                                                                                        |
| --------------- | -------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| useLabel        | false    | boolean | false   | whether to use react-admin Labeled component or not.                                                                                                                                                               |
| translationPath | false    | string  | -       | <p>the path to be used with the useTranslate hook to translate the country name based on its Id, ex: translate(`${translationPath}.BR`)<br><br>Make sure to add the translation choices to your i18n provider.</p> |
| source        | false    | string | country   | the field source to retrieve its value.


