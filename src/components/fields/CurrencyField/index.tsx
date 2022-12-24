import React from 'react'
import { Labeled, SelectField, SelectFieldProps, useTranslate } from 'react-admin'
import { LabeledFieldProps } from '../../../config'
import { CURRENCIES } from '../../../config/common/currencies'

interface CurrencyFieldProps extends SelectFieldProps {
  translationPath?: string
}

export function CurrencyField(props: LabeledFieldProps<CurrencyFieldProps>) {
  const { source = 'currency', translationPath, useLabel, ...rest } = props
  const translate = useTranslate()

  const field = (
    <SelectField
      source={source}
      choices={CURRENCIES.map((currency) => ({
        id: currency.id,
        name: `${currency.symbol}${translationPath ? ` - ${translate(`${translationPath}.${currency.id}`)}` : ''}`,
      }))}
      {...rest}
    />
  )

  return useLabel ? <Labeled>{field}</Labeled> : <>{field}</>
}
