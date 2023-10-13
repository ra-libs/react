import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import React, { useEffect } from 'react'
import { DateInputProps, useInput, useResourceContext, useTranslate } from 'react-admin'
import { useFormContext } from 'react-hook-form'

dayjs.extend(utc)
dayjs.extend(timezone)

interface TzDateInputProps extends DateInputProps {
  timezoneSource: string
  adapterLocale?: string
}

export function TzDateInput(props: TzDateInputProps) {
  const translate = useTranslate()

  const { setValue: setFormValue } = useFormContext()

  const { margin = 'dense', adapterLocale = 'pt-br' } = props

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

  const timezoneSourceInput = useInput({
    source: props.timezoneSource,
  })

  const [value, setValue] = React.useState<Dayjs | null>()

  const handleValueChange = (newValue: Dayjs | null) => {
    setFormValue(props.source, newValue?.toISOString(), { shouldDirty: true })
  }

  useEffect(() => {
    if (field.value) {
      const date = dayjs.utc(field.value)
      setValue(date.tz(timezoneSourceInput.field.value))
    }
  }, [field.value])

  useEffect(() => {
    if (timezoneSourceInput.field.value && value) {
      const tzDate = dayjs.tz(field.value, timezoneSourceInput.field.value)
      setFormValue(props.source, tzDate?.toISOString(), {
        shouldDirty: true,
      })
    }
  }, [timezoneSourceInput.field.value])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={adapterLocale}>
      <DatePicker
        {...field}
        value={value}
        label={label}
        onChange={handleValueChange}
        slotProps={{
          textField: {
            id: id,
            required: isRequired,
            margin: margin,
            error: hasError,
            helperText: hasError ? translate(error?.message || '') : '',
            fullWidth: props.fullWidth,
          },
        }}
      />
    </LocalizationProvider>
  )
}
