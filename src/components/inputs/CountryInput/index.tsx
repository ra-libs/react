import React from 'react'
import { SelectInput, SelectInputProps, useTranslate } from 'react-admin'

import { COUNTRIES, MAPPED_COUNTRIES } from '../../../config/common/countries'

interface CountryInputProps extends SelectInputProps {
  translationPath?: string
}

export function CountryInput(props: CountryInputProps) {
  const { source = 'country', translationPath, defaultValue, ...rest } = props
  const translate = useTranslate()

  return (
    <SelectInput
      source={source}
      choices={COUNTRIES.map((country) => ({
        id: country.id,
        name: `${translationPath ? translate(`${translationPath}.${country.id}`) : country.name}`,
      }))}
      defaultValue={defaultValue || MAPPED_COUNTRIES['BR']}
      {...rest}
    />
  )
}
