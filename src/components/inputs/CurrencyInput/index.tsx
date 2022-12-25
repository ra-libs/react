import React from 'react'
import { SelectInput, SelectInputProps, useTranslate } from 'react-admin'

import { CURRENCIES, MAPPED_CURRENCIES } from '../../../config/common/currencies'

interface CurrencyInputProps extends SelectInputProps {
  translationPath?: string
}

export function CurrencyInput(props: CurrencyInputProps) {
  const { source = 'currency', translationPath, defaultValue, ...rest } = props
  const translate = useTranslate()

  return (
    <SelectInput
      source={source}
      choices={CURRENCIES.map((currency) => ({
        id: currency.id,
        name: `${currency.symbol}${translationPath ? ` - ${translate(`${translationPath}.${currency.id}`)}` : ''}`,
      }))}
      defaultValue={defaultValue || MAPPED_CURRENCIES['BRL'].id}
      {...rest}
    />
  )
}
