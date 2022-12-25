# CountryInput

CountryInput component uses react-admin SelectInput with a pre-defined countries list.

### Usage

```tsx
import { CountryInput } from '@ra-libs/react';

<CountryInput fullWidth validate={[required()]} translationPath="choices.countries" />
```

### Props

| Prop            | Required | Type    | Default | Description                                                                                                                                                                                                        |
| --------------- | -------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| translationPath | false    | string  | -       | <p>the path to be used with the useTranslate hook to translate the country name based on its Id, ex: translate(`${translationPath}.BR`)<br><br>Make sure to add the translation choices to your i18n provider.</p> |
| source        | false    | string | country   | the field source to retrieve its value.


