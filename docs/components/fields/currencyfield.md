# CurrencyField

CountryField component uses react-admin SelectField with a pre-defined currencies list. \


```tsx
import { CurrencyField } from '@ra-libs/react';


<CurrencyField fullWidth useLabel translationPath="choices.currencies" />
```

### Props

| Prop            | Required | Type    | Default | Description                                                                                                                                                                                                          |
| --------------- | -------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useLabel        | false    | boolean | false   | whether to use react-admin Labeled component or not.                                                                                                                                                                 |
| translationPath | false    | string  | -       | <p>the path to be used with the useTranslate hook to translate the currency name based on its Id, ex: translate(`${translationPath}.BRL`)<br><br>Make sure to add the translation choices to your i18n provider.</p> |

