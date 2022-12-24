import React from 'react'
import { Labeled, SelectField, SelectFieldProps, useTranslate } from 'react-admin'
import { LabeledFieldProps } from '../../../config'
import { COUNTRIES } from '../../../config/common/countries'
interface CountryFieldProps extends SelectFieldProps {
  translationPath?: string
}

export function CountryField(props: LabeledFieldProps<CountryFieldProps>) {
  const { source = 'country', translationPath, useLabel, ...rest } = props
  const translate = useTranslate()

  const field = (
    <SelectField
      source={source}
      choices={COUNTRIES.map((country) => ({
        id: country.id,
        name: `${translationPath ? translate(`${translationPath}.${country.id}`) : country.name}`,
      }))}
      {...rest}
    />
  )

  return useLabel ? <Labeled>{field}</Labeled> : <>{field}</>
}
