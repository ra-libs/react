import React from 'react'
import { DateInputProps, useInput, useResourceContext, useTranslate } from 'react-admin'

import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useFormContext } from 'react-hook-form'
import { useDateLocale } from '../../../hooks/locales'

export function DateInput(props: DateInputProps) {
  const translate = useTranslate()

  const { setValue } = useFormContext()
  const adapterLocale = useDateLocale()

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

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={adapterLocale}>
      <DatePicker
        {...field}
        label={label}
        onChange={(newValue) => {
          setValue(props.source, newValue, { shouldDirty: true })
        }}
        renderInput={(params) => (
          <TextField
            {...propsRest}
            {...params}
            id={id}
            required={isRequired}
            margin={margin}
            error={hasError}
            helperText={hasError ? translate(error?.message || '') : ''}
          />
        )}
      />
    </LocalizationProvider>
  )
}
