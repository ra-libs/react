import React, { useEffect } from 'react'
import { TextField } from '@mui/material'
import { TextInputProps, useInput, useTranslate, useResourceContext } from 'react-admin'
import { useIMask } from 'react-imask'

interface MaskedTextInputProps extends TextInputProps {
  mask: string
}

export function MaskedTextInput(props: MaskedTextInputProps) {
  const { mask, margin = 'dense', ...propsRest } = props
  const translate = useTranslate()

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

  const { ref, value, setValue } = useIMask({ mask })

  useEffect(() => {
    if (field.value) {
      setValue(field.value)
    }
  }, [])

  return (
    <TextField
      {...field}
      {...propsRest}
      id={id}
      required={isRequired}
      inputRef={ref}
      label={label}
      value={value}
      margin={margin}
      error={hasError}
      helperText={hasError ? translate(error?.message || '') : ''}
    />
  )
}
