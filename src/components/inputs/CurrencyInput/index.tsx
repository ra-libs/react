import React from 'react'
import { SelectInput, SelectInputProps } from 'react-admin'

import { useCurrencies } from '../../../hooks/currencies'

interface CurrencyInputProps extends SelectInputProps {}

export function CurrencyInput(props: CurrencyInputProps) {
  const { source = 'currency', defaultValue, ...rest } = props

  const currencies = useCurrencies()

  return <SelectInput source={source} choices={currencies} defaultValue={defaultValue || 'BRL'} {...rest} />
}
