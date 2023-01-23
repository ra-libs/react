import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { TextInputProps, useInput, useLocaleState, useResourceContext, useTranslate } from 'react-admin'
import { useFormContext } from 'react-hook-form'

interface PhoneInputProps extends TextInputProps {}

export function PhoneInput(props: PhoneInputProps) {
  const [locale] = useLocaleState()
  const translate = useTranslate()
  const { setValue } = useFormContext()

  const { margin = 'dense', ...propsRest } = props

  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
    id,
  } = useInput(props)

  const hasError = (isTouched || isSubmitted) && invalid

  const resource = useResourceContext()
  const label = props.label ? props.label : translate(`resources.${resource}.fields.${field.name}`)

  const handleChange = (newPhone: string) => {
    setValue(props.source, newPhone, { shouldDirty: true })
  }

  return (
    <MuiTelInput
      {...propsRest}
      {...field}
      onChange={handleChange}
      preferredCountries={['BR']}
      langOfCountryName={locale}
      defaultCountry={props.defaultValue || 'BR'}
      label={label}
      required={isRequired}
      margin={margin}
      error={hasError}
      helperText={hasError ? translate(error?.message || '') : ''}
    />
  )
}
